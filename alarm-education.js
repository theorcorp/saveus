/* ============================================================
   민방위 경보 교육용 예시 — 소리를 파일로 넣지 않고 직접 만든다.

   경보음은 단순한 사인파라 파일로 가질 이유가 없다. 예전에는 합성한
   소리를 mp3·wav 로 담아 24MB 를 차지했는데, 그 자리에서 만들면 0바이트다.
   음질도 더 낫다. 압축을 거치지 않기 때문이다.

   현장에서 실제 경보로 오해받으면 안 되는 소리다. 그래서
   - 누르면 바로 울리지 않고 한 번 더 확인을 받는다
   - 24초만 들려주고, 더 듣고 싶으면 다시 누르게 한다
   - 음량을 낮게 시작한다
   - 화면을 벗어나면 무조건 멈춘다
   ============================================================ */
(function () {
  "use strict";

  /* 국민안전24 안내를 바탕으로 한 근사치다. 인증된 신호가 아니다.

     사이렌이 울리는 경보는 공습경보와 핵경보 둘뿐이고, 둘의 사이렌은
     완전히 같다. 어느 쪽인지는 뒤따르는 음성방송으로만 알 수 있다.
     경계경보·화생방경보·경보해제는 2023년 8월 규정 개정으로 사이렌 없이
     음성방송만 나간다. 그래서 들려줄 소리가 하나뿐이다. */
  /* 실제 녹음을 재서 맞춘 값이다(20주기 평균, 주기 편차 0.02초).
     국민안전24 안내문은 "5초 상승, 3초 하강" 이라고 적지만, 그 5초는
     올라가는 2초와 가장 높은 소리를 유지하는 3초를 합한 것이다.
     5초에 걸쳐 올라가는 것이 아니다. 귀로 듣는 모양은 아래가 맞다. */
  var TONE = {
    airraid: { lo: 390, hi: 560, up: 2, hold: 3, down: 3, name: "공습·핵경보" }
  };
  var CYCLE = TONE.airraid.up + TONE.airraid.hold + TONE.airraid.down;   /* 8초 */
  var PREVIEW = 20;          /* 실제는 1분이지만 연습에는 20초면 된다 */
  var VOLUME = 0.22;         /* 낮게 시작한다 */

  var ctx = null, osc = null, gain = null, timer = null, tick = null, cur = null;
  /* au 는 하나만 쓰고 돌려 쓴다. 아이폰은 사용자가 누른 동작 안에서 한 번
     재생해 두면 그 요소에 한해 나중에도 소리를 낼 수 있다. 끝 안내는 30초
     뒤에 나가므로, 요소를 새로 만들면 그때는 막힌다. */
  var au = null, gen = 0;

  function voiceUrl(name) {
    var m = window.SAVEUS_MEDIA || {};
    var langs = m.alarmVoice || [];
    var lang = window.LANG || "ko";
    if (langs.indexOf(lang) < 0) return null;
    return "voice/" + lang + "/alarm/" + name + "." + (m.voiceExt || "m4a");
  }

  /* 음성 한 줄을 끝까지 들려주고 다음으로 넘어간다. 파일이 없거나 소리를
     못 내면 그냥 넘어간다. 안내가 없다고 교육을 못 할 이유는 없다. */
  function speak(name, next) {
    var url = voiceUrl(name);
    if (!url) { next(); return; }
    var my = gen, done = false, guard = null;
    function go() {
      if (done || my !== gen) return;
      done = true; clearTimeout(guard);
      au.onended = au.onerror = null;
      next();
    }
    if (!au) { au = new Audio(); au.preload = "auto"; }
    au.onended = go;
    au.onerror = go;
    try { au.pause(); } catch (e) {}
    au.src = url;
    au.currentTime = 0;
    var pr = au.play();
    if (pr && pr.catch) pr.catch(go);
    /* 20초가 넘도록 끝나지 않으면 무언가 잘못된 것이다 */
    guard = setTimeout(go, 20000);
  }

  function stopVoice() {
    if (!au) return;
    au.onended = au.onerror = null;
    try { au.pause(); } catch (e) {}
  }

  function audio() {
    if (ctx) return ctx;
    var AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    try { ctx = new AC(); } catch (e) { ctx = null; }
    return ctx;
  }

  function status(msg) {
    var el = document.getElementById("alarmStatus");
    if (el) el.textContent = msg;
  }

  /* 사이렌만 끈다. 진행 중인 흐름은 건드리지 않는다. */
  function stopTone() {
    if (osc) { try { osc.stop(); } catch (e) {} osc.disconnect(); osc = null; }
    if (gain) { try { gain.disconnect(); } catch (e) {} gain = null; }
    clearTimeout(timer); clearInterval(tick); timer = tick = null;
  }

  function stop() {
    gen++;                 /* 진행 중인 안내 음성의 뒷처리를 무효로 만든다 */
    stopVoice();
    stopTone();
    cur = null;
    var ns = document.querySelectorAll("[data-alarm]");
    for (var i = 0; i < ns.length; i++) ns[i].disabled = false;
    var s = document.getElementById("alarmStop");
    if (s) s.hidden = true;
    status("버튼을 누르면 " + PREVIEW + "초 동안 들려 드립니다.");
  }

  function playTone(key, after) {
    var spec = TONE[key]; if (!spec) return;
    var c = audio();
    if (!c) { status("이 기기에서는 소리를 만들 수 없습니다."); return; }
    if (c.state === "suspended") { try { c.resume(); } catch (e) {} }
    /* stop() 을 쓰면 gen 이 올라 마무리 안내까지 끊긴다. 소리만 끈다. */
    stopTone();
    cur = key;

    osc = c.createOscillator();
    gain = c.createGain();
    osc.type = "sine";
    /* 갑자기 터지지 않게 0.4초에 걸쳐 올린다 */
    gain.gain.setValueAtTime(0.0001, c.currentTime);
    gain.gain.exponentialRampToValueAtTime(VOLUME, c.currentTime + 0.4);

    var t = c.currentTime;
    /* 2초 올라가 3초 유지하고 3초에 걸쳐 내려오기를 8초마다 되풀이한다.
       올라가는 속도(85Hz/초)와 내려오는 속도(57Hz/초)가 다르다. 이 비대칭이
       경보음 특유의 느낌을 만든다. 둘을 같게 하면 다른 소리가 된다. */
    osc.frequency.setValueAtTime(spec.lo, t);
    for (var n = 0; n * CYCLE < PREVIEW + CYCLE; n++) {
      var b = t + n * CYCLE;
      osc.frequency.linearRampToValueAtTime(spec.hi, b + spec.up);
      osc.frequency.setValueAtTime(spec.hi, b + spec.up + spec.hold);
      osc.frequency.linearRampToValueAtTime(spec.lo, b + CYCLE);
    }

    osc.connect(gain); gain.connect(c.destination);
    osc.start();

    var btns = document.querySelectorAll("[data-alarm]");
    for (var i = 0; i < btns.length; i++) btns[i].disabled = true;
    var s = document.getElementById("alarmStop");
    if (s) s.hidden = false;

    var left = PREVIEW;
    status(spec.name + " 예시 · " + left + "초 남음");
    tick = setInterval(function () {
      left--; if (left >= 0) status(spec.name + " 예시 · " + left + "초 남음");
    }, 1000);

    timer = setTimeout(function () {
      /* 뚝 끊지 않고 0.5초에 걸쳐 줄인다 */
      if (gain) {
        try {
          gain.gain.cancelScheduledValues(c.currentTime);
          gain.gain.setValueAtTime(gain.gain.value, c.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + 0.5);
        } catch (e) {}
      }
      setTimeout(function () {
        stopTone();
        if (after) after(); else stop();
      }, 600);
    }, PREVIEW * 1000);
  }

  /* 안내 음성 → 사이렌 → 마무리 안내. 벽 너머로 듣는 사람에게는 이
     앞뒤 안내만이 연습이라는 신호다. 확인 화면은 누른 사람만 본다. */
  function run(key) {
    var spec = TONE[key]; if (!spec) return;
    stop();
    gen++;
    var my = gen;
    var btns = document.querySelectorAll("[data-alarm]");
    for (var i = 0; i < btns.length; i++) btns[i].disabled = true;
    var s = document.getElementById("alarmStop");
    if (s) s.hidden = false;
    status(voiceUrl("intro") ? "안내 음성이 나오고 있습니다." : "");
    speak("intro", function () {
      if (my !== gen) return;
      playTone(key, function () {
        if (my !== gen) return;
        status("마무리 안내가 나오고 있습니다.");
        speak("outro", function () {
          if (my !== gen) return;
          stop(); status(spec.name + " 예시가 끝났습니다.");
        });
      });
    });
  }

  /* 누르자마자 울리면 주변 사람이 놀란다. 한 번 더 묻는다. */
  function ask(key) {
    var spec = TONE[key]; if (!spec) return;
    if (typeof window.openSheet !== "function") { run(key); return; }
    window.openSheet("교육용 " + spec.name + " 소리 듣기",
      '<div class="danger"><b>실제 경보가 아닙니다</b>' +
      '<p>지금 울리는 소리는 연습용으로 새로 만든 소리입니다. ' +
      '주변 사람이 진짜 경보로 오해할 수 있으니 <b>이어폰을 쓰거나 먼저 알려 주세요.</b></p></div>' +
      '<div class="card card-pad">' +
        '<p class="muted" style="line-height:1.8">' + alarmDesc() + '</p>' +
        '<p class="tiny" style="margin-top:8px">' +
        (voiceUrl("intro")
          ? '<b>연습이라는 안내 음성</b>이 먼저 나오고, 사이렌이 ' + PREVIEW +
            '초 울린 뒤 마무리 안내가 나옵니다. 모두 합해 40초쯤 걸립니다. ' +
            '앞뒤 안내는 옆 사람이 진짜 경보로 오해하지 않도록 넣었습니다. '
          : '사이렌이 ' + PREVIEW + '초 동안 울립니다. ') +
        '실제 경보는 1분간 이어집니다. 낮은 음량으로 시작하니 ' +
        '필요하면 기기 음량을 조절하세요.</p>' +
      '</div>' +
      '<button class="btn block" data-alarm-go="' + key + '">들어보기</button>' +
      '<p class="fine">화면을 닫거나 다른 탭으로 가면 소리가 바로 멈춥니다.</p>');
  }

  function alarmDesc() {
    return "<b>공습경보와 핵경보</b>는 2초에 걸쳐 올라가 3초 동안 가장 높은 " +
           "소리를 유지하고 3초에 걸쳐 내려오기를, 8초마다 1분간 되풀이합니다. " +
           "<b>두 경보의 사이렌은 똑같습니다.</b> " +
           "어느 쪽인지는 뒤따르는 음성방송으로 알 수 있고, 할 일은 둘 다 " +
           "<b>즉시 지하로 대피</b>로 같습니다.";
  }

  function markup() {
    return '' +
      '<p class="sec-title">경보 소리 미리 들어보기</p>' +
      '<div class="card">' +
        '<div class="field"><label>공습경보 · 핵경보</label>' +
          '<p class="tiny">8초마다 2초 올라가 3초 유지하고 3초에 걸쳐 내려오기를 ' +
          '1분간 되풀이하는 소리. ' +
          '두 경보의 사이렌은 똑같아서, 어느 쪽인지는 음성방송으로 구분합니다. ' +
          '할 일은 둘 다 즉시 지하로 대피하는 것입니다.</p>' +
          '<p class="tiny">연습이라는 안내 음성이 앞뒤에 함께 나옵니다.</p>' +
          '<button class="btn ghost block" data-alarm="airraid" style="margin-top:8px">소리 듣기</button>' +
        '</div>' +
        '<div class="field"><label>나머지 경보는 사이렌이 없습니다</label>' +
          '<p class="tiny"><b>경계경보 · 화생방경보 · 경보해제</b>는 사이렌 없이 ' +
          '음성방송만 나갑니다. 2023년 8월 규정이 바뀌면서 즉시 대피가 필요하지 않은 ' +
          '경보의 사이렌이 없어졌습니다. ' +
          '<b>사이렌이 들리지 않아도 방송이 나오면 경보입니다.</b></p>' +
        '</div>' +
      '</div>' +
      '<button class="btn block" id="alarmStop" data-alarm-stop hidden style="background:var(--ink-deep)">소리 멈추기</button>' +
      '<p class="tiny" id="alarmStatus" role="status">버튼을 누르면 ' + PREVIEW + '초 동안 들려 드립니다.</p>' +
      '<div class="notice">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 8h.01M11 12h1v4h1"/></svg>' +
        '<p><b>연습용으로 새로 만든 소리입니다.</b> 실제 경보음을 녹음한 것이 아니며 ' +
        '소리의 모양만 비슷하게 맞췄습니다. 실제 상황에서는 공식 안내를 따르세요. ' +
        '<a href="https://www.safekorea.go.kr/safekorea-kor/edtr/clns/cdal/civilDefenseAlarm.do?menuSn=57" target="_blank" rel="noopener">국민안전24 경보 안내</a></p>' +
      '</div>';
  }

  document.addEventListener("click", function (e) {
    var go = e.target.closest("[data-alarm-go]");
    if (go) { if (window.closeSheet) window.closeSheet(); run(go.dataset.alarmGo); return; }
    if (e.target.closest("[data-alarm-stop]")) { stop(); return; }
    var b = e.target.closest("[data-alarm]");
    if (b) ask(b.dataset.alarm);
  });

  /* 앱을 벗어나면 즉시 멈춘다. 주머니에서 울리는 연습용 사이렌은
     주변 사람에게 진짜 경보로 들린다. 가슴압박 코치는 화면이 꺼져도
     이어져야 하므로 여기서만 멈춘다. */
  document.addEventListener("visibilitychange", function () {
    if (document.hidden) stop();
  });
  window.addEventListener("pagehide", stop);

  /* __play 는 검사용이다. 파형이 맞는지 보려면 코드를 실제로 돌려야 한다. */
  window.SaveusAlarmEducation = { markup: markup, stop: stop, __play: playTone, __run: run };
})();
