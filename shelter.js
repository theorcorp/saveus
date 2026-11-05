/* ============================================================
   내 주변 민방위 대피소 찾기

   앱이 위치를 받지 않는다. 지도 서비스로 넘겨 거기서 현재 위치를 쓰게
   한다. 좌표를 받지도 저장하지도 않으므로 권한을 요구할 이유가 없다.

   홈에는 한 줄만 두고 눌렀을 때 시트로 연다. 홈은 준비 현황을 보는
   화면이지 검색창을 놓을 자리가 아니다.
   ============================================================ */
(function () {
  "use strict";

  var OFFICIAL = "https://www.safekorea.go.kr/safekorea-kor/flsm/flsm/facilitiesSafteyMap.do?menuSn=234";

  function h(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function links(region) {
    var q = ((region || "").trim().slice(0, 100) + " 민방위 대피소").trim();
    return {
      naver: "https://map.naver.com/p/search/" + encodeURIComponent(q),
      kakao: "https://map.kakao.com/link/search/" + encodeURIComponent(q),
      official: OFFICIAL
    };
  }

  function open() {
    var u = links("");
    var b =
      '<div class="card card-pad">' +
        '<p class="muted" style="line-height:1.8">지도를 연 뒤 <b>현재 위치 버튼</b>을 누르고 ' +
        '위치 접근을 허용하면 주변 대피소가 나옵니다. 대피소를 고르면 길찾기를 쓸 수 있습니다.</p>' +
      '</div>' +

      '<p class="sec-title">지역으로 찾기</p>' +
      '<div class="card">' +
        '<div class="field"><label for="shelterRegion">동네나 주소 <span class="tiny">(선택)</span></label>' +
          '<input id="shelterRegion" type="text" maxlength="100" placeholder="예: 대구 북구 읍내동" autocomplete="off">' +
          '<p class="tiny">위치를 쓸 수 없을 때만 적으세요. 입력한 지역은 고른 지도 서비스로 전달됩니다.</p>' +
        '</div>' +
      '</div>' +

      '<div class="advbtns">' +
        '<a class="btn" id="shelterNaver" href="' + u.naver + '" target="_blank" rel="noopener noreferrer">네이버지도</a>' +
        '<a class="btn" id="shelterKakao" href="' + u.kakao + '" target="_blank" rel="noopener noreferrer">카카오맵</a>' +
      '</div>' +
      '<a class="btn ghost block" href="' + h(OFFICIAL) + '" target="_blank" rel="noopener noreferrer">국민안전24 공식 시설지도</a>' +

      '<div class="notice">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 8h.01M11 12h1v4h1"/></svg>' +
        '<p>공식 지도에서는 <b>민방위 대피소</b>를 골라야 합니다. 지진 대피장소와 ' +
        '이재민 임시주거시설은 다른 시설입니다. 출입구와 실제 이용 가능 여부는 ' +
        '가서 확인하세요.</p>' +
      '</div>' +
      '<p class="tiny" id="shelterConnection" role="status"></p>' +
      '<p class="fine">인터넷이 필요합니다. 앱은 위치를 수집하지 않고, 가장 가까운 순서나 ' +
      '실시간 개방 여부를 보장하지 않습니다. 평소에 미리 찾아 두세요.</p>';

    if (typeof window.openSheet === "function") {
      window.openSheet("가까운 대피소 찾기", b);
      refresh();
      var input = document.getElementById("shelterRegion");
      if (input) input.addEventListener("input", refresh);
    }
  }

  function refresh() {
    var input = document.getElementById("shelterRegion");
    if (!input) return;
    var u = links(input.value);
    var n = document.getElementById("shelterNaver"), k = document.getElementById("shelterKakao");
    if (n) n.href = u.naver;
    if (k) k.href = u.kakao;
    var c = document.getElementById("shelterConnection");
    if (c) c.textContent = navigator.onLine === false ? "지금 오프라인입니다. 연결한 뒤 검색하세요." : "";
  }

  function row() {
    return '<button class="step" data-act="shelter">' +
      '<span class="dot" style="background:var(--orange)">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:16px;height:16px"><path d="M12 21s-7-5.6-7-10.5A7 7 0 0 1 19 10.5C19 15.4 12 21 12 21z"/><circle cx="12" cy="10.5" r="2.5"/></svg>' +
      '</span>' +
      '<span class="t"><b>가까운 대피소 찾기</b><span>지도에서 민방위 대피소 검색</span></span>' +
      '<svg class="pc" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width:16px;height:16px"><path d="m9 18 6-6-6-6"/></svg>' +
      '</button>';
  }

  window.SaveusShelter = { row: row, open: open, links: links, refresh: refresh };
})();
