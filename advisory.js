/* ============================================================
   해외 정부의 한국 여행경보 바로가기

   각국 대사관의 철수 여부를 앱이 대신 판단하지 않는다. 자동 수집은
   서버가 필요하고, 6시간 전 정보가 되며, 무엇보다 "미국 철수"를 잘못
   띄우면 돌이킬 수 없다. 그래서 공식 페이지로 바로 보내 준다.

   문제는 네 곳 모두 영어라는 점이다. 그래서 두 가지를 같이 둔다.
   - 영어를 몰라도 무엇만 보면 되는지 한국어로 먼저 알려 준다
   - 번역된 페이지로 바로 가는 버튼을 따로 둔다
   ============================================================ */
(function () {
  "use strict";

  var SOURCES = [
    { id: "us", name: "미국", org: "국무부",
      url: "https://travel.state.gov/en/international-travel/travel-advisories/south-korea.html" },
    { id: "gb", name: "영국", org: "외무부(FCDO)",
      url: "https://www.gov.uk/foreign-travel-advice/south-korea" },
    { id: "ca", name: "캐나다", org: "정부 여행안내",
      url: "https://travel.gc.ca/destinations/south-korea" },
    { id: "au", name: "호주", org: "스마트트래블러",
      url: "https://www.smartraveller.gov.au/destinations/asia/south-korea-republic-korea" }
  ];

  /* 구글 번역이 제공하는 주소 형태로 바꾼다. example.com → example-com.translate.goog */
  function translated(url) {
    try {
      var u = new URL(url);
      var host = u.hostname.replace(/-/g, "--").replace(/\./g, "-") + ".translate.goog";
      return "https://" + host + u.pathname + u.search +
             (u.search ? "&" : "?") + "_x_tr_sl=auto&_x_tr_tl=ko&_x_tr_hl=ko";
    } catch (e) { return url; }
  }

  function h(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  var LEVELS = [
    ["Level 1", "Exercise normal precautions", "평상시 수준", "ok"],
    ["Level 2", "Exercise increased caution", "주의 강화", "ok"],
    ["Level 3", "Reconsider travel", "여행 재고 — 신호가 세진 상태", "warn"],
    ["Level 4", "Do not travel", "여행 금지 — 가장 높은 단계", "bad"]
  ];
  var DEPART = [
    ["Authorized Departure", "가족과 비필수 인원의 <b>자발적 출국을 허용</b>한 상태"],
    ["Ordered Departure", "가족과 비필수 인원에게 <b>출국을 명령</b>한 상태. 가장 강한 신호"]
  ];

  function open() {
    var b =
      '<div class="card card-pad">' +
        '<p class="muted" style="line-height:1.8">각국 정부가 자국민에게 한국 여행을 어떻게 ' +
        '안내하고 있는지 보여 주는 <b>공식 페이지</b>로 연결합니다. 앱이 내용을 ' +
        '대신 읽거나 판단하지 않으므로 <b>항상 지금 상태</b>입니다.</p>' +
      '</div>' +

      '<p class="sec-title">영어를 몰라도 읽는 법</p>' +
      '<div class="card card-pad">' +
        '<p class="muted" style="margin-bottom:10px">페이지에서 <b>이 단어만</b> 찾으면 됩니다.</p>' +
        '<div class="advlv">' +
          LEVELS.map(function (l) {
            return '<div class="advrow ' + l[3] + '"><b>' + h(l[0]) + '</b>' +
                   '<span class="en">' + h(l[1]) + '</span>' +
                   '<span class="ko">' + h(l[2]) + '</span></div>';
          }).join("") +
        '</div>' +
        '<p class="tiny" style="margin-top:12px">단계와 별개로, 아래 두 표현이 보이면 ' +
        '실제로 사람을 빼고 있다는 뜻입니다.</p>' +
        '<div class="advlv" style="margin-top:8px">' +
          DEPART.map(function (d) {
            return '<div class="advrow bad"><b>' + h(d[0]) + '</b><span class="ko">' + d[1] + '</span></div>';
          }).join("") +
        '</div>' +
      '</div>' +

      '<p class="sec-title">국가별 공식 페이지</p>' +
      '<div class="card">' +
        SOURCES.map(function (s) {
          return '<div class="field"><label>' + h(s.name) + ' · ' + h(s.org) + '</label>' +
            '<div class="btnrow">' +
              '<a class="btn ghost" href="' + h(s.url) + '" target="_blank" rel="noopener">원문 보기</a>' +
              '<a class="btn ghost" href="' + h(translated(s.url)) + '" target="_blank" rel="noopener">한국어로 보기</a>' +
            '</div></div>';
        }).join("") +
      '</div>' +
      '<p class="tiny">「한국어로 보기」는 구글 번역을 거칩니다. 번역이 열리지 않으면 ' +
      '원문을 연 뒤 브라우저 메뉴(점 세 개)에서 <b>번역</b>을 누르세요.</p>' +

      '<p class="sec-title">우리 정부 자료</p>' +
      '<div class="card">' +
        '<div class="field"><label>외교부 해외안전여행</label>' +
          '<p class="tiny">한국어. 우리 국민의 해외 여행경보와 국제 정세 공지</p>' +
          '<a class="btn ghost block" href="https://www.0404.go.kr/" target="_blank" rel="noopener" style="margin-top:8px">바로가기</a>' +
        '</div>' +
      '</div>' +

      '<div class="notice">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 8h.01M11 12h1v4h1"/></svg>' +
        '<p><b>발표는 실제보다 늦습니다.</b> 공개 발표에 나오지 않는 이동은 알 수 없고, ' +
        '단계가 낮다고 안전이 보장되는 것도 아닙니다. 판단의 한 가지 참고 자료로만 쓰세요.</p>' +
      '</div>' +
      '<p class="fine">네 나라만 연결합니다. 모든 주한 공관의 공지를 모으지 않습니다.</p>';

    if (typeof window.openSheet === "function") window.openSheet("해외 정부의 한국 안내", b);
  }

  function row() {
    return '<button class="step" data-act="advisory">' +
      '<span class="dot" style="background:var(--navy)">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:16px;height:16px"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/></svg>' +
      '</span>' +
      '<span class="t"><b>해외 정부의 한국 안내</b>' +
      '<span>미국·영국·캐나다·호주 여행경보 바로가기</span></span>' +
      '<svg class="pc" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width:16px;height:16px"><path d="m9 18 6-6-6-6"/></svg>' +
      '</button>';
  }

  window.SaveusAdvisory = { row: row, open: open };
})();
