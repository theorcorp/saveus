/* Presentation only: clinical procedure strings remain in i18n dictionaries. */
(function(){
'use strict';
var key='saveus.theme.v1', timer;
var labels={
 ko:{title:'화면 모드',light:'라이트',dark:'다크',auto:'시간별 자동',note:'기기 현지 시간 기준 · 오전 6시~오후 6시 라이트, 오후 6시~다음 날 오전 6시 다크',current:'현재 화면: ',sample:'편안하게 읽고, 차근차근 준비해요',guide:'그림과 함께 순서대로 확인하세요',sub:'숫자 순서대로 아래 설명을 읽어 주세요.',step:'행동',phone:'도움 요청',clock:'시간 확인',water:'물 확인',rest:'안정과 관찰',warm:'보온',bag:'준비물 확인',radio:'방송 확인',shelter:'안전한 곳',check:'상태 확인',aid:'응급처치',cool:'냉각',power:'전원 확인',message:'연락하기',protect:'몸 보호',clean:'위생 관리',document:'정보 기록'},
 en:{title:'Appearance',light:'Light',dark:'Dark',auto:'Scheduled',note:'Local device time · Light 06:00–18:00 · Dark 18:00–06:00',current:'Current: ',sample:'Read clearly. Prepare step by step.',guide:'Follow the illustrated steps',sub:'Read each instruction in numbered order.',step:'Step',phone:'Get help',clock:'Check time',water:'Water',rest:'Rest and observe',warm:'Keep warm',bag:'Check supplies',radio:'Listen for updates',shelter:'Find safety',check:'Check condition',aid:'First aid',cool:'Cool down',power:'Power',message:'Contact',protect:'Protection',clean:'Hygiene',document:'Record information'},
 ja:{title:'画面モード',light:'ライト',dark:'ダーク',auto:'時間で自動',note:'端末の現地時間 · 6時〜18時はライト、18時〜翌6時はダーク',current:'現在: ',sample:'読みやすく、一つずつ備えましょう',guide:'図と一緒に順番に確認',sub:'番号順に説明をお読みください。',step:'手順'},
 zh:{title:'显示模式',light:'浅色',dark:'深色',auto:'定时自动',note:'设备当地时间 · 06:00–18:00 浅色 · 18:00–06:00 深色',current:'当前：',sample:'清晰阅读，逐步准备',guide:'按图示顺序查看',sub:'请按编号阅读每一步说明。',step:'步骤'}
};
function ui(k){var l=typeof LANG==='string'?LANG:'ko';return (labels[l]||labels.ko)[k]||labels.en[k]||k;}
var icons={
 light:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/>',
 dark:'<path d="M20 15A9 9 0 0 1 9 4 9 9 0 1 0 20 15Z"/>',
 clock:'<circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/>',
 phone:'<rect x="6" y="2" width="12" height="20" rx="3"/><path d="M10 5h4m-3 14h2"/><path d="M9 10h6m-3-3v6"/>',
 water:'<path d="M9 2h6v4l2 3v11H7V9l2-3Z"/><path d="M7 12h10M9 5h6"/><path d="M10 16h4"/>',
 rest:'<circle cx="6" cy="9" r="2"/><path d="M3 16h18M9 12h7l4 3M3 13v7m18-7v7"/>',
 warm:'<path d="M4 3h13l3 3v15H4Z"/><path d="M17 3v4h3M7 8h7m-7 4h10m-10 4h10"/>',
 bag:'<rect x="5" y="5" width="14" height="17" rx="4"/><path d="M9 5V2h6v3M5 11h14M9 15h6v4H9Z"/>',
 radio:'<rect x="3" y="8" width="18" height="13" rx="3"/><path d="m6 8 11-6M6 12h12M6 16h4m-4 2h4"/><circle cx="16" cy="17" r="2"/>',
 shelter:'<path d="m2 11 10-8 10 8M5 9v12h14V9M10 21v-7h4v7"/>',
 check:'<path d="M9 4H5v18h14V4h-4"/><rect x="9" y="2" width="6" height="4" rx="1"/><path d="m8 12 2 2 5-5m-7 9h7"/>',
 aid:'<rect x="3" y="6" width="18" height="15" rx="3"/><path d="M8 6V3h8v3m-4 8v6m-3-3h6"/>',
 cool:'<path d="M3 5h10v4H3m6-4V2m-3 0h6M13 7h5v4h-4"/><path d="M15 14v2m4-2v2m-7 3h10"/>',
 power:'<path d="M12 2v10M6 5a9 9 0 1 0 12 0"/>',
 message:'<path d="M3 3h18v14H9l-6 4Z"/><path d="M7 8h10M7 12h7"/>',
 protect:'<path d="m12 2 8 4v6c0 5-8 10-8 10S4 17 4 12V6Z"/><path d="m8 12 3 3 5-6"/>',
 clean:'<path d="M8 8h9v13H6V10Zm0 0V4h7v4M10 4V2h8"/><path d="M10 13h3m-3 4h3"/>',
 document:'<path d="M5 2h10l4 4v16H5ZM15 2v5h4M8 11h8m-8 4h8m-8 4h5"/>'
};
function svg(name){return '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">'+(icons[name]||icons.check)+'</svg>';}
window.resolveTheme=function(mode,date){var h=(date||new Date()).getHours();return mode==='dark'?'dark':mode==='light'?'light':h>=6&&h<18?'light':'dark';};
window.getThemeMode=function(){try{var m=JSON.parse(localStorage.getItem(key));return ['light','dark','auto'].indexOf(m)>=0?m:'auto';}catch(e){return 'auto';}};
window.applyTheme=function(){
 var theme=resolveTheme(getThemeMode(),new Date());document.documentElement.dataset.theme=theme;
 var meta=document.querySelector('meta[name="theme-color"]');if(meta)meta.content=theme==='dark'?'#192430':'#FFFFFF';
 var status=document.querySelector('.theme-status');if(status)status.textContent=ui('current')+ui(theme);
 var plugin=window.Capacitor&&window.Capacitor.Plugins&&window.Capacitor.Plugins.StatusBar;
 if(plugin){Promise.resolve(plugin.setStyle({style:theme==='dark'?'DARK':'LIGHT'})).catch(function(){});Promise.resolve(plugin.setBackgroundColor({color:theme==='dark'?'#192430':'#FFFFFF'})).catch(function(){});}
 clearTimeout(timer);var now=new Date(),next=new Date(now);var hour=now.getHours();if(hour<6)next.setHours(6,0,0,0);else if(hour<18)next.setHours(18,0,0,0);else{next.setDate(next.getDate()+1);next.setHours(6,0,0,0);}timer=setTimeout(applyTheme,Math.max(100,Math.min(next-now+30,60000)));
};
window.setThemeMode=function(m){if(['light','dark','auto'].indexOf(m)<0)return;try{localStorage.setItem(key,JSON.stringify(m));}catch(e){}applyTheme();};
document.addEventListener('visibilitychange',function(){if(!document.hidden)applyTheme();});window.addEventListener('focus',function(){applyTheme();});window.addEventListener('pageshow',function(){applyTheme();});
window.addEventListener('storage',function(e){if(e.key===key)applyTheme();});
window.themeSettings=function(){return '<p class="sec-title">'+ui('title')+'</p><div class="theme-card"><div class="theme-options" role="group" aria-label="'+ui('title')+'">'+['light','dark','auto'].map(function(m){return '<button class="theme-option" data-act="theme" data-v="'+m+'" aria-pressed="'+(getThemeMode()===m)+'">'+svg(m==='auto'?'clock':m)+'<span>'+ui(m)+'</span></button>';}).join('')+'</div><p class="theme-note">'+ui('note')+'<span class="theme-status" aria-live="polite">'+ui('current')+ui(document.documentElement.dataset.theme)+'</span></p><div class="theme-sample"><img src="img/face-smile.webp" alt=""><div><b>SAVEUS</b><p>'+ui('sample')+'</p></div></div></div>';};
window.guideBanner=function(kind,id){var paths=kind==='emg'?EMG_ICON:SIT_ICON;var mascot=kind==='emg'?'act-guide':(['evac','nowater','purify'].indexOf(id)>=0?'act-pack':['separated','siren'].indexOf(id)>=0?'act-check':'act-guide');var title=ui('guide');return '<div class="guide-banner"><img class="guide-mascot" src="img/'+mascot+'.webp" alt=""><div class="guide-copy"><b>'+h(title)+'</b><p>'+h(ui('sub'))+'</p></div><svg class="guide-symbol" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">'+(paths[id]||icons.check)+'</svg></div>';};
// Explicit mapping per step: the pictogram is a visual cue, not an anatomical technique diagram.
var map={
 cpr:['check','phone','aid','aid','aid','power','protect','check'],choke:['check','aid','aid','aid','check','aid'],bleed:['protect','aid','aid','clock','warm'],burn:['protect','cool','protect','aid','warm'],fracture:['rest','warm','check'],heart:['rest','check','aid','aid'],stroke:['clock','rest','document'],seizure:['clock','protect','rest','aid'],anaphylaxis:['aid','rest','check','aid'],heat:['shelter','protect','cool','check'],hypothermia:['shelter','warm','warm','warm','check'],poison:['document','document','check'],drown:['protect','check','aid','aid','power','aid'],lowsugar:['check','clock','phone','protect'],
 siren:['radio','radio','message','bag'],airraid:['shelter','protect','protect','radio'],cbrn:['shelter','clean','shelter','clock','radio'],blackout:['power','protect','power','power','power'],nowater:['water','water','clean','clean','water'],evac:['power','bag','document','protect','shelter'],separated:['shelter','message','message','document','document'],fire:['phone','protect','protect','message','shelter'],quake:['protect','clock','power','shelter','shelter'],cold:['shelter','shelter','shelter','warm','water'],purify:['water','water','water','clock','clock']
};
// Semantic selection uses original Korean text regardless of chosen UI language.
function type(kind,id,i){var original=window.I18N.ko[kind==='emg'?'emg':'sit'];var st=kind==='emg'?original.i[id].s[i]:original[id].s[i];var text=Array.isArray(st)?st.join(' '):st;
 if(/119.*(신고|요청)|즉시 119/.test(text))return 'phone';if(/시각.*기록|시간.*기록/.test(text))return 'clock';if(/흐르는 물|식힙|적시|냉각/.test(text))return 'cool';if(/보온|따뜻하게|젖은 옷|담요로 감/.test(text))return 'warm';return (map[id]||[])[i]||'check';}
var headlines={
cpr:['반응과 호흡 확인','119 신고 · AED 요청','가슴 중앙 압박','가슴이 돌아오게 하기','압박과 인공호흡','AED 안내 따르기','분석·충격 때 손 떼기','구급대가 올 때까지'],
choke:['기침할 수 있는지 확인','등 두드리기 5회','복부 밀어올리기 5회','두 동작 번갈아 반복','이물질이 나오면 확인','반응이 없으면 심폐소생술'],
bleed:['장갑 착용','출혈점 직접 압박','지혈대는 교육·지시에 따라','적용 시각 기록','보온하며 관찰'],
burn:['열원에서 벗어나기','흐르는 물로 20분 냉각','붙지 않은 옷·장신구 제거','느슨하게 덮기','나머지 몸은 보온'],
fracture:['발견한 자세로 지지','움직임 줄이기','반응과 호흡 관찰'],
heart:['활동 멈추고 쉬기','곁에서 상태 관찰','처방·119 안내에 따르기','반응·정상 호흡 없으면 CPR'],
stroke:['마지막 정상 시각 기록','편안히 쉬며 관찰','구급대에 정보 전달'],
seizure:['시작 시각 확인','주변 위험 물건 치우기','끝난 뒤 호흡 확인','정상 호흡 없으면 CPR'],
anaphylaxis:['처방된 자동주사기 사용','호흡에 맞춰 자세 조절','상태 관찰 · 추가 지시 확인','호전돼도 응급진료'],
heat:['시원한 곳으로 이동','겉옷 줄이기','피부 적시고 부채질','반응과 호흡 관찰'],
hypothermia:['바람과 추위 피하기','젖은 옷 교체','머리·몸통 보온','바닥 냉기 차단','조심스럽게 관찰'],
poison:['물질·시간·양 전달','용기나 사진 준비','반응과 호흡 관찰'],
drown:['안전한 곳에서 구조 돕기','물 밖에서 호흡 확인','가능하면 인공호흡 포함','압박을 지체하지 않기','가슴 물기 닦고 AED','호전돼도 진료 기준 확인'],
lowsugar:['삼킬 수 있을 때만 당질','15분 뒤 다시 확인','악화되면 즉시 119','반응 없으면 먹이지 않기']
};
window.illustratedStep=function(kind,id,i,st){var name=type(kind,id,i);var title=Array.isArray(st)?st[0]:(typeof LANG!=='undefined'&&LANG==='ko'&&headlines[id]&&headlines[id][i]?headlines[id][i]:ui('step')+' '+(i+1));var body=Array.isArray(st)?st[1]:st;return '<div class="pstep visual-step"><div class="step-visual"><span class="n">'+(i+1)+'</span>'+svg(name)+'</div><div class="c"><b>'+h(title)+'</b><p>'+h(body)+'</p></div></div>';};
})();
