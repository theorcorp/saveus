window.I18N = window.I18N || {};
window.I18N.en = {
app:{ name:"SaveUs" },
common:{
  close:"Close",
  copyFail:"Couldn't copy",
  disclaimer:"This app is a reference. In a real emergency, follow the instructions of civil defence authorities and emergency broadcasts first."
},
tab:{ home:"Home", kit:"Supplies", act:"Disasters", emg:"Emergency", card:"ID card" },
bar:{
  home:{ t:"SaveUs", s:"Your household's readiness" },
  kit:{ t:"Supplies", s:"Quantities for your household" },
  act:{ t:"Disasters", s:"Step-by-step for each situation" },
  emg:{ t:"Emergency", s:"When someone is hurt or collapses" },
  card:{ t:"Emergency card", s:"Stored on this device only" }
},
lang:{
  title:"Choose a language",
  lead:"Pick the language for the app. You can change it later in settings.",
  next:"Next",
  failed:"Couldn't load that language"
},
f:{
  optional:"(Optional)", notCounted:"Not added to the household headcount",
  adultsM:"Adult men", adultsM_s:"Ages 19 to 64",
  adultsF:"Adult women", adultsF_s:"Ages 19 to 64",
  teensM:"Teen boys", teensM_s:"Ages 13 to 18",
  teensF:"Teen girls", teensF_s:"Ages 13 to 18",
  kids:"Children", kids_s:"Ages 4 to 12",
  infants:"Infants", infants_s:"Ages 0 to 3 · sets formula and nappies",
  seniors:"Older adults", seniors_s:"Age 65 and over",
  sani:"People needing menstrual supplies", sani_s:"Lower it for menopause or age",
  chronic:"Chronic conditions", chronic_s:"People on daily prescription medicine",
  dogs:"Dogs", dogs_s:"",
  cats:"Cats", cats_s:"",
  apt:"Flat / apartment", house:"House", winter:"Winter included"
},
setup:{
  about:"About",
  titleFirst:"Tell us about your household", title:"Settings",
  helloT:"Hello, I'm SaveUs",
  helloS:"Tell me how many people live with you and I'll work out how many bottles of water and tins of food you need.",
  display:"Display", lang:"Language", textSize:"Text size",
  ts1:"Smallest", ts2:"Small", ts3:"Normal", ts4:"Large", ts5:"Largest",
  family:"Household", pets:"Pets", cond:"Planning assumptions",
  dogSize:"Dog size", dog_small:"Small", dog_mid:"Medium", dog_large:"Large",
  days:"Days to prepare for", day3:"3 days", day7:"7 days", day14:"14 days",
  daysNote:"Three days is the bare minimum. Recovery is slow in wartime, so seven or more is safer.",
  home:"Type of home",
  winter:"Winter", winterOn:"Include", winterOff:"Exclude",
  winterNote:"Including winter raises the number of heat packs and warm-weather items.",
  start:"Get started", save:"Save and close",
  laterNote:"You can change any of this later from settings, top right.",
  reset:"Clear all checkmarks", resetDone:"Checkmarks cleared",
  needPeople:"Enter at least one person"
},
home:{
  msg0:"Let's start together. Water and food first — that's priority one.",
  msg1:"Good, you've started. Finishing the essentials first gets you safe fastest.",
  msg2:"Over halfway. Just the remaining essentials to go.",
  msg3:"Almost there. Only a few items left.",
  msg4:"All set! Just check expiry dates and batteries every six months.",
  done:"{done} of {total} ready",
  rate:"{pct}% ready", left:"{n} left",
  doneT:"You're fully prepared",
  doneS:"From now on, just check expiry dates and batteries twice a year.",
  alertT:"If the sirens sound", alertS:"Reading the alerts and what to do now",
  stPeople:"People", stDays:"Days", stWater:"Water needed (L)",
  stages:"Stages", tierSub:"{d} of {n} · {label}",
  firstT:"Before you buy anything",
  firstLead:"These cost nothing and raise your chances more than any purchase.",
  firstList:[
    "Find the civil defence shelters near home and work — the 안전디딤돌 (Safety Dideemdol) app",
    "Actually walk to the shelter once",
    "Agree on two meeting points (one nearby, one far away)",
    "Memorise at least three family phone numbers",
    "Keep the car's fuel tank at least half full",
    "Make sure everyone knows where the gas valve and breaker box are"
  ],
  goCard:"Fill in your emergency card"
},
tier:{
  1:{ n:"Water and food", s:"Losing the water supply comes first and hurts most", l:"Essential" },
  2:{ n:"Power and communications", s:"Losing information hits before running out of supplies", l:"Essential" },
  3:{ n:"Medicine and hygiene", s:"Hospitals and pharmacies fill up first", l:"Essential" },
  4:{ n:"Go-bag", s:"You must be able to grab it and leave within five minutes", l:"Important" },
  5:{ n:"Warmth and shelter", s:"Without heating, hypothermia happens indoors too", l:"Important" },
  6:{ n:"Tools and safety gear", s:"For clearing debris and preventing second accidents", l:"Extra" },
  7:{ n:"Extras for your household", s:"The most vulnerable member gives way first", l:"Tailored" }
},
kit:{
  lead:"For {n} people to last {d} days",
  leadSub:"These quantities come from the household you entered. Tick off what you already own.",
  filter0:"All", filter1:"Stage 1 · this week", filter2:"Stage 2 · this month", filter3:"Stage 3 · when you can",
  buy:"View on Coupang",
  affiliate:"As a Coupang Partners affiliate, we receive a commission on purchases",
  pharmacy:"Buy at a pharmacy in advance",
  empty:"Nothing in this stage.",
  copy:"Copy the remaining list", copyTitle:"Supplies still needed", copied:"Shopping list copied",
  foot:"Quantities are calculated from your household and the number of days. Change them in settings, top right."
},
act:{
  lead:"When it happens, the order is hard to recall. Read it once now and your body remembers for you.",
  toEmg:"If someone is hurt or has collapsed, open the Emergency tab",
  title:"By situation",
  alarmT:"Reading the civil defence sirens",
  alarms:[
    ["Alert warning","Voice broadcast","Get ready to move. Turn on the radio and check your go-bag"],
    ["Air raid warning","One-minute siren + voice broadcast","Go underground immediately"],
    ["Nuclear attack warning","Same siren as an air raid","Get deep underground at once. The siren is identical, so the voice broadcast is what tells them apart"],
    ["CBRN warning","Broadcast, no siren","Go indoors and seal windows and vents"],
    ["All clear","Voice broadcast","It's over. Listen to the broadcast to the end"]
  ],
  telT:"Emergency numbers",
  tels:[
    ["119","Fire · ambulance · rescue","Fire, injury, rescue"],
    ["112","Police","Crime, safety, missing persons"],
    ["1588-3650","Safety Report Centre","Reporting hazards and disasters"],
    ["123","KEPCO (electricity)","Power outages"],
    ["121","Water supply","Water cuts and quality"],
    ["1544-4500","Gas Safety Corporation","Gas leaks and accidents"],
    ["129","Health and welfare line","Emergency medical guidance"],
    ["110","Government helpline","Shelters and other public enquiries"]
  ],
  telFoot:"Tap a row to open the dialler. Press and hold the number to copy it.",
  sitFoot:"Every situation differs. On-site instructions and emergency broadcasts override these steps."
},
ec:{
  title:"Write it on paper too",
  lead:"If your phone dies, this screen goes with it. Writing this out on paper and putting a copy in each wallet is the single most useful thing in this app.",
  g1:"Family details", g2:"Contacts", g3:"Where to meet",
  members:{ l:"Names and years of birth", p:"Kim 1985 · Lee 1988 · Kim 2016" },
  bloodtype:{ l:"Blood types", p:"Kim A+ · Lee O-" },
  meds:{ l:"Medicines · allergies · conditions", p:"Blood pressure tablet each morning / penicillin allergy" },
  contacts:{ l:"Emergency contacts", p:"Parents 010-0000-0000 · Sibling 010-0000-0000 · Work 02-000-0000" },
  relay:{ l:"Overseas relay contact", p:"Someone abroad who can pass messages if local networks fail" },
  rally1:{ l:"Meeting point 1 — nearby", p:"Where to meet if you can't get into the house" },
  rally2:{ l:"Meeting point 2 — further away", p:"Where to meet if you have to leave the area" },
  shelter:{ l:"Nearest civil defence shelter", p:"The location you found in the 안전디딤돌 (Safety Dideemdol) app" },
  notes:{ l:"Other notes", p:"Where the insurance papers are, where the gas valve is, and so on" },
  copy:"Copy card contents", copied:"Emergency card copied", empty:"Fill something in first",
  foot:"What you type stays on this device and is never sent anywhere."
},
legal:{
  title:"Legal notice and disclaimer",
  foot:"Continuing to use this app means you accept the above. Last updated 2026-11-02",
  body:["This app is a reference tool that estimates disaster-preparedness supplies and summarises first aid for laypeople. It is not a medical device and has no diagnostic, prescribing or treatment function.", "The first-aid guidance summarises publicly available material from official bodies. It does not replace medical care or certified first-aid training, and it is a draft that has not been reviewed by a medical professional.", "In a real emergency, the emergency services and the clinicians on scene always take priority over this guide.", "The guidance is written for adults. It cannot be applied as-is to children, infants or pregnant women.", "Supply quantities are estimates based on averages and may differ from what your household actually needs.", "To the extent permitted by law, the developer accepts no liability for the outcome of using this information. Liability for damage caused by the developer's intent or gross negligence is not excluded.", "This app sends none of your information to a server. What you enter stays on the device and is removed when the app is deleted.", "Where product links are shown, the developer may receive a commission if a purchase is made through them."]
},
pv:{
  title:"Save · print",
  phone:"For phone", a4:"A4 print",
  phoneNote:"Larger text in a single column, easy to read on a phone. Saved at A5 size.",
  a4Note:"Laid out for A4 paper. Print it or keep it as a file.",
  save:"Save as PDF", saveSub:"Read it without internet",
  asof:"Prepared {date}",
  item:"Item", qty:"Qty",
  cardLead:"Fill this in, print it, and give everyone in the family a copy for their wallet.",
  cardFoot:"Paper survives a dead phone. Update it every six months.",
  foot:"A saved PDF opens any time, with no internet.",
  pageOf:"Page {n} of {total}",
  pages:"Splits into {n} page(s) at {size}. It prints exactly as shown.",
  blockedT:"Saving is blocked on this screen",
  blockedB:"The web preview blocks the browser's print and save dialog. It works normally in the installed app. To get the file right now, open the browser menu and choose Share, then Print \u2014 the document you just built is already loaded.",
  blockedF:"Installing the app removes this extra step.",
  webNote:"In the web preview the browser may block the save dialog. The installed app saves directly.",
  failed:"Saving isn't available here"
},
emg:{
  call:"Call 119", callSub:"Put it on speaker and follow their instructions",
  callRule:"When to call —",
  listT:"Choose the situation",
  symT:"Main signs", stepT:"What to do", noT:"Do not",
  ageT:"Age warning", noteT:"Review note", srcLabel:"Sources",
  reviewT:"Draft, not yet medically reviewed.",
  reviewS:"This is a layperson summary of first aid. It does not replace a doctor's diagnosis or treatment, or hands-on training. On scene, instructions from 119 take priority over this guidance.",
  childT:"Children and infants are different.",
  childS:"This guidance is for adults. Compression depth and technique differ for children and infants, so do not apply it to them. If a child is in trouble, tell 119 the child's age first and follow their instructions.",
  srcT:"Sources",
  srcBody:"S01 Safe Korea CPR action guide · S02 American Heart Association 2025 Adult Basic Life Support · S03 Resuscitation Council UK First Aid Guidelines 2025 · S04 Korea Disease Control and Prevention Agency health portal · S05 AHA Choking and CPR 2026 · S06 American Red Cross life-threatening external bleeding · S07 British Red Cross burns · S08 AHA / American Red Cross First Aid Guidelines 2024 · S09 British Red Cross broken bones · S10 heart attack · S11 stroke · S12 seizures · S13·S14 anaphylaxis · S15 heatstroke · S16 hypothermia · S17 poisoning · S18 American Red Cross diabetic emergencies",
  ackT:"Before you open the first-aid guide",
  ackB:"This is a layperson's summary of first aid, not medical care. It is a draft that has not yet been reviewed by a medical professional, and it is written for adults. In a real emergency the instructions of the emergency services always take priority over this guide. The developer accepts no responsibility for the outcome of using this information.",
  ackBtn:"I understand",
  ackFoot:"If this is urgent, press the emergency call button above first.",
  coach:{
    title:"Compression coach",
    open:"Compression coach",
    openS:"Beat and voice guidance",
    start:"Start",
    stop:"Stop",
    ready:"Press start when you are ready.",
    elapsed:"Elapsed",
    speed:"Compression rate",
    speedNote:"100 to 120 per minute is the recommended rate. The default is 110.",
    opts:"Sound and voice",
    on:"On",
    off:"Off",
    sound:"Beat",
    soundS:"Keeps the compression rate with a click",
    voice:"Voice guidance",
    voiceOff:"Off",
    voiceF:"Female",
    voiceM:"Male",
    voiceS:"Turn off while on the phone to emergency services",
    noVoice:"Voice guidance is not available on this device. The beat and the on-screen text still work.",
    warnT:"Written for adults.",
    warnS:"Depth and technique differ for children and infants. Do not give chest compressions to someone who responds and is breathing normally. This tool only keeps the beat; it does not measure how deep or how fast you press.",
    foot:"The instructions of the emergency services always take priority over this guide.",
    swap:"{n} minutes have passed. Swap with someone else if you can. Take under ten seconds.",
    intro:["Make sure the emergency services have been called.", "Put the call on speakerphone.", "Lay the person on a firm, flat surface.", "Place both hands in the centre of the chest, fingers interlocked.", "Keep your arms straight and press with your body weight.", "Press about five centimetres deep, in time with the beat."],
    loop:["Keep pressing. Do not stop.", "Let the chest come all the way back up.", "You are doing well. Hold the rhythm.", "Straight arms. Press from the shoulders.", "Do not stop until help arrives.", "If rescue breaths are hard, keep compressions only."]
  },
  read:{
    play:"Read the steps",
    stop:"Stop reading",
    failed:"Voice guidance is not available on this device"
  },
  foot:"Check the scene is safe first — you must not become a casualty yourself. Keep rechecking responsiveness, breathing and bleeding, and give nothing by mouth to anyone who is drowsy or cannot swallow safely.",
  q:{ cpr:"Check response", bleed:"Heavy bleeding", choke:"Choking" },
  i:{
    cpr:{
      t:"Suspected cardiac arrest — CPR and AED",
      m:"No response and not breathing normally",
      sym:"No response when called. No normal breathing, or only gasping.",
      call:"Call 119 immediately. Point at a specific bystander and ask them to bring an AED.",
      s:[
        "Check for response and normal breathing, taking no more than 10 seconds.",
        "Call 119, ask for an AED, then start chest compressions on a firm, flat surface.",
        "For an adult, compress the lower half of the breastbone in the centre of the chest, 100 to 120 times a minute, about 5cm deep.",
        "Let the chest come all the way back up after each compression, and keep interruptions as short as possible.",
        "If you can give rescue breaths, alternate 30 compressions with 2 breaths. If you can't, keep compressing.",
        "Switch the AED on and put the pads on bare skin: one below the right collarbone, one below the left nipple on the mid-axillary line. Follow the voice prompts.",
        "Keep everyone's hands off the patient while it analyses and while it shocks, then resume compressions immediately after the shock.",
        "Continue until normal breathing or a meaningful response returns, or until the ambulance crew takes over. If the scene becomes dangerous or you are exhausted, follow 119's instructions."
      ],
      no:[
        "Do not mistake gasping for normal breathing.",
        "Do not apply adult compression depth to a child or infant.",
        "Do not start compressions on someone who has chest pain but is responsive and breathing."
      ],
      age:"Compression depth and technique differ for children and infants. Separate verified guidance is needed.",
      note:"Compression depth follows Safe Korea (S01), which states 5cm. AHA 2025 (S02) gives 5–6cm. An emergency physician must settle this before release. AED pad placement was confirmed from S01 on 2026-11-01.",
      src:"S01, S02, S04"
    },
    choke:{
      t:"Choking",
      m:"Something is stuck in the throat",
      sym:"Suddenly unable to speak, unable to breathe, or unable to cough effectively.",
      call:"Severe choking — call 119 immediately.",
      s:[
        "If they can cough forcefully, encourage them to keep coughing and watch for it getting worse.",
        "If they cannot cough, or the cough makes no sound, lean them forward and give 5 back blows.",
        "If that does not clear it, give 5 abdominal thrusts.",
        "Alternate 5 back blows and 5 abdominal thrusts until the object comes out or the person becomes unresponsive.",
        "If the object comes out, stop and check how they are.",
        "If they become unresponsive, lower them to the floor and start CPR, beginning with chest compressions."
      ],
      no:[
        "Do not sweep a finger into the mouth to find an object you cannot see.",
        "After abdominal thrusts, always get medical care even if they seem fine."
      ],
      age:"Never give abdominal thrusts to an infant under one year. Use the infant back blow and chest thrust technique instead. In late pregnancy, or if you cannot get your arms around the abdomen, use chest thrusts rather than abdominal thrusts.",
      note:"The alternating 5 back blows and 5 abdominal thrusts sequence was confirmed to match Korean fire service guidance on 2026-11-01. Instructional diagrams still need expert verification.",
      src:"S02, S03, S05"
    },
    bleed:{
      t:"Heavy bleeding",
      m:"Bleeding heavily and it won't stop",
      sym:"Blood keeps coming heavily, or spurts out. May come with pallor, cold sweat and dizziness.",
      call:"Life-threatening bleeding — call 119 immediately.",
      s:[
        "Put on disposable gloves if you have them.",
        "Press hard and continuously on the bleeding point with gauze or a clean cloth.",
        "If life-threatening bleeding from an arm or leg is not controlled by pressure, use a commercial tourniquet, following your training or 119's instructions.",
        "Write down the time the tourniquet went on, and do not loosen it yourself.",
        "Keep watching them, keep them warm, and wait for the ambulance."
      ],
      no:[
        "Do not pull out an embedded object. Leave it and press around it.",
        "Do not keep lifting the dressing to check.",
        "Do not apply limb tourniquet technique to a penetrating chest or abdominal wound."
      ],
      src:"S03, S06"
    },
    burn:{
      t:"Burns",
      m:"Scalded by hot water or burned by fire",
      sym:"Pain, redness, blisters. The skin may turn white or black.",
      call:"Call 119 for large or deep burns, burns to the face or neck, or breathing difficulty after inhaling smoke.",
      s:[
        "Get away from the source of heat.",
        "Cool a heat burn under cool running water for about 20 minutes.",
        "Carefully remove clothing and jewellery that is not stuck to the skin.",
        "Once cooled, cover loosely with a clean, non-stick dressing.",
        "Keep the rest of the body warm to prevent hypothermia."
      ],
      no:[
        "Do not put ice directly on the burn.",
        "Do not use toothpaste, oil or other home remedies.",
        "Do not burst blisters or peel off clothing that has stuck to the skin."
      ],
      age:"For a child's burn, get medical advice even if the area looks small.",
      note:"This covers heat burns. Electrical and chemical burns are treated differently and need separate guidance.",
      src:"S07, S08"
    },
    fracture:{
      t:"Fractures, head and neck injuries",
      m:"A fall or a serious injury",
      sym:"Severe pain, swelling, deformity. A change in consciousness after a blow to the head.",
      call:"Call 119 for obvious deformity, severe pain, altered consciousness, or any suspected neck or spine injury.",
      s:[
        "Support the injured part in the position you found it.",
        "Pad it with clothing or blankets to reduce unnecessary movement.",
        "Keep checking response and breathing while you wait for the ambulance."
      ],
      no:[
        "Do not try to straighten a bone or joint.",
        "Do not force the person to stand.",
        "Do not move them unnecessarily unless the scene is immediately dangerous."
      ],
      note:"If the airway needs clearing or CPR is needed, life-saving action comes before limiting movement.",
      src:"S03, S09"
    },
    heart:{
      t:"Suspected heart attack",
      m:"A crushing chest pain that won't go away",
      sym:"Chest pain that persists. Pain spreading to the arm, jaw or back, breathlessness, cold sweat, nausea.",
      call:"Call 119 immediately.",
      s:[
        "Stop what they are doing and let them rest in whatever position is comfortable.",
        "Stay with them and keep watching response and breathing.",
        "Only give medicine that is their own prescription, or that 119 tells you to give.",
        "If response and normal breathing stop, switch to CPR."
      ],
      no:[
        "Do not let them drive themselves to hospital.",
        "Do not assume it is indigestion and wait it out.",
        "Do not start chest compressions just because the chest hurts."
      ],
      src:"S10"
    },
    stroke:{
      t:"Suspected stroke",
      m:"Slurred speech and weakness in one arm",
      sym:"Sudden drooping on one side of the face, weakness in one arm, slurred speech. Vision or balance may also be affected.",
      call:"Call 119 immediately. Even if the symptoms ease off, they still need emergency assessment.",
      s:[
        "Write down the time the symptoms started, or the time they were last known to be normal.",
        "Let them rest comfortably and keep watching response and breathing.",
        "Tell the ambulance crew that time and exactly what you saw."
      ],
      no:[
        "Do not force food, water or medicine on them.",
        "Do not delay treatment with home remedies."
      ],
      note:"Treatment is time-limited, so the time of onset is decisive. Give the most accurate time you can recall.",
      src:"S08, S11"
    },
    seizure:{
      t:"Seizure",
      m:"The body stiffens and jerks",
      sym:"Loss of consciousness, body going rigid, repeated jerking.",
      call:"Call 119 for a first seizure, one lasting over 5 minutes, repeated seizures without recovery, breathing difficulty, injury, a seizure in water, or a seizure in pregnancy.",
      s:[
        "Note the time the seizure started.",
        "Move dangerous objects out of the way and put something soft under the head.",
        "Once it ends, if they are breathing normally and no injury is suspected, roll them onto their side and watch them.",
        "If they are not breathing normally, switch to CPR."
      ],
      no:[
        "Do not hold them down or try to stop the movement.",
        "Do not put fingers, a spoon or anything else in the mouth.",
        "Do not give food, water or medicine until they have fully recovered."
      ],
      src:"S08, S12"
    },
    anaphylaxis:{
      t:"Anaphylaxis — severe allergic reaction",
      m:"An allergic reaction with difficulty breathing",
      sym:"Swelling of the throat or tongue, difficulty breathing or collapse after food, medicine or a sting. There may be no rash at all.",
      call:"Call 119 immediately.",
      s:[
        "If they have their own prescribed adrenaline auto-injector, help them use it on the outer thigh following the product instructions.",
        "Normally lay them flat, but if they are struggling to breathe let them sit up with their legs straight out.",
        "Watch response and breathing. Follow the product instructions and 119 on whether to give a further dose.",
        "Get emergency medical care even if they improve."
      ],
      no:[
        "Do not let them suddenly stand up or walk.",
        "Do not use an antihistamine in place of adrenaline."
      ],
      src:"S03, S13, S14"
    },
    heat:{
      t:"Suspected heatstroke",
      m:"Confused after being out in the heat",
      sym:"Hot body, confusion, seizures or reduced consciousness after being in a hot environment. They may still be sweating.",
      call:"Call 119 immediately.",
      s:[
        "Move them somewhere cool.",
        "Take off outer layers of clothing.",
        "Wet the skin with cool water and fan them to cool them down.",
        "Keep watching response and breathing."
      ],
      no:[
        "Do not rule out heatstroke just because they are sweating.",
        "Do not delay cooling or calling 119 in order to take a temperature.",
        "Do not give water to anyone who is drowsy or confused."
      ],
      src:"S08, S15"
    },
    hypothermia:{
      t:"Suspected hypothermia",
      m:"Shivering and confused after being out in the cold",
      sym:"Shivering, slurred speech, confusion, drowsiness. As it worsens, the shivering may stop.",
      call:"Call 119 if you suspect hypothermia, especially with any change in consciousness.",
      s:[
        "Get them out of the wind and cold.",
        "Change wet clothing for dry if you can.",
        "Wrap the head and torso in blankets to keep them warm.",
        "Put something underneath them so the cold ground does not draw heat away.",
        "Handle them gently and keep watching them."
      ],
      no:[
        "Do not move them roughly or rub their arms and legs hard.",
        "Do not give them alcohol."
      ],
      src:"S08, S16"
    },
    poison:{
      t:"Poisoning — swallowed a harmful substance",
      m:"Swallowed medicine, detergent or something harmful",
      sym:"Vomiting, stomach pain, confusion, drowsiness, abnormal breathing. There may be no symptoms at first.",
      call:"If you suspect they have swallowed something harmful, call 119 straight away for advice.",
      s:[
        "Tell them what was swallowed, when, and roughly how much.",
        "If you can do so safely, have the container, packaging or a photo of it ready.",
        "Keep watching response and breathing."
      ],
      no:[
        "Do not make them vomit.",
        "Do not give water, milk or any neutralising agent on your own judgement.",
        "Do not enter an enclosed space filled with gas or smoke to rescue someone."
      ],
      note:"This covers swallowed poisons. Exposure to gas or chemicals needs separate guidance.",
      src:"S08, S17"
    },
    drown:{
      t:"Drowning",
      m:"Struggling to breathe after being in the water",
      sym:"Coughing, difficulty breathing, reduced consciousness, no normal breathing.",
      call:"Call 119 immediately.",
      s:[
        "From a safe place, help with a ring buoy or a long object.",
        "Once out of the water, check for response and normal breathing.",
        "If there is no normal breathing, start CPR. Include rescue breaths if you are able to.",
        "If rescue breaths are not possible, do not delay chest compressions and follow 119's instructions.",
        "Dry the chest before putting AED pads on.",
        "If they are breathless, keep coughing, or needed resuscitation, get emergency care even if they seem fine."
      ],
      no:[
        "Do not jump into the water unless you are trained.",
        "Do not press on the abdomen to force water out.",
        "Do not hold them upside down to drain water."
      ],
      note:"Whether rescue breaths come first in drowning resuscitation must be settled by a clinician against current Korean guidance. Do not use this summary as a complete drowning CPR algorithm.",
      src:"S03, S04"
    },
    lowsugar:{
      t:"Low blood sugar and other diabetic emergencies",
      m:"Diabetic, with cold sweat and shaking",
      sym:"Cold sweat, shaking, intense hunger, confusion, reduced consciousness.",
      call:"Call 119 immediately if consciousness drops, they cannot swallow, they have a seizure, or they do not improve or get worse.",
      s:[
        "Only if they are fully alert and can swallow safely, give 15 to 20g of a fast-acting carbohydrate such as glucose.",
        "After about 15 minutes, check blood sugar and symptoms. If still low or no better, repeat once.",
        "If they do not improve, call 119 for help. If they get worse, call at once rather than waiting out the 15 minutes.",
        "If they are unresponsive, give nothing by mouth and treat according to their breathing."
      ],
      no:[
        "Do not put sweets, drinks or honey into the mouth of an unconscious person.",
        "Do not give extra insulin when low blood sugar is suspected."
      ],
      note:"This covers low blood sugar. It does not include guidance on adjusting your own medication in a high blood sugar emergency.",
      src:"S03, S18"
    },
    fever:{
      t:"Fever",
      m:"Temperature rises, with chills and listlessness",
      sym:"38C or above. Chills, aching, poor appetite, more sluggish than usual.",
      call:"A baby under 3 months at 38C or above needs emergency care at once. Also call immediately if the person is limp or barely responds, is short of breath, has bluish lips or nails, has a seizure lasting over five minutes, or has a rash that does not fade when pressed.",
      s:[
          "Take the temperature and write it down with the time. You need the time to work out intervals later.",
          "Change to a single light layer, keep the room at 22 to 24C and air it out. Only cover briefly with a thin blanket while they are shivering.",
          "Give water or an oral rehydration drink in small, frequent sips. Do not give extra water to a baby under 6 months without medical advice.",
          "For fever medicine, follow the weight table on the product leaflet exactly. The dose goes by weight, not age. Ask a pharmacist if you are unsure.",
          "Write down the time and amount given. The next dose waits for the interval on the leaflet.",
          "Check again in one or two hours. Watch whether they drink, respond and breathe easily rather than the number.",
          "Seek care if the fever runs past three days or they get worse."
        ],
      no:[
          "No cold baths, ice packs or tepid sponging. They cause shivering, which can push the temperature higher.",
          "Never sponge with alcohol. It is absorbed through the skin and can poison.",
          "Do not pile on blankets to sweat it out. The heat cannot escape.",
          "Do not alternate two different fever medicines. The times and amounts are easy to confuse.",
          "Never give aspirin to a child. It risks Reye's syndrome.",
          "Do not split adult tablets for a child. Use a children's product.",
          "Give nothing by mouth if they are drowsy or confused."
        ],
      age:"A fever in a baby under three months needs care at once, whatever the number. Fever medicine is there to make the person comfortable, not to force the temperature back to normal.",
      src:"S04 · S19"
    }
  }
},

item:{
  water2l:{ n:"Bottled water, 2L", u:"bottles", d:"{wpd}L a day × {d} days = about {tot}L. Based on 3L per adult per day (2L drinking + 1L minimum hygiene)" },
  jerry:{ n:"Water container / jerrycan, 20L", u:"", d:"To fill the moment a cut is announced. With a bathtub this buys several days" },
  filter:{ n:"Portable water filter", u:"", d:"Straw or pump type. The last resort once stored water runs out" },
  bleach:{ n:"Purification tablets or unscented bleach", u:"bottle", d:"Bleach method: 2 drops of unscented 4–5% bleach per litre, wait 30 minutes" },
  food_rice:{ n:"Instant rice", u:"packs", d:"About {kcal} kcal each. {pct}% of total calories needed" },
  food_noodle:{ n:"Instant noodles", u:"packs", d:"About {kcal} kcal each. {pct}% of total calories needed" },
  food_can:{ n:"Tinned food (tuna, spam, fruit)", u:"tins", d:"About {kcal} kcal each. {pct}% of total calories needed" },
  food_snack:{ n:"Energy bars, hard biscuits, nuts", u:"", d:"About {kcal} kcal each. {pct}% of total calories needed" },
  food_powder:{ n:"Grain powder, instant soup", u:"servings", d:"About {kcal} kcal each. Needs only water" },
  salt:{ n:"Salt, sugar, cooking oil", u:"set", d:"Needed both for calories and for cooking" },
  opener:{ n:"Manual tin opener", u:"", d:"Electric ones are useless in a power cut" },
  stove:{ n:"Portable gas stove", u:"", d:"With the power out, there is no way to cook or boil water" },
  butane:{ n:"Butane canisters", u:"", d:"About one hour each. Use only where there is ventilation" },
  pot:{ n:"Pot, pan, cutlery", u:"set", d:"Water has to be boiled. Without a pot you can neither purify nor cook" },
  dispo:{ n:"Disposable plates, cups, foil", u:"", d:"Saves the water you would spend washing up" },
  torch:{ n:"LED torch", u:"", d:"Unlike candles it cannot start a fire. One per person" },
  head:{ n:"Head torch", u:"", d:"For anything that needs both hands free" },
  lantern:{ n:"LED lantern", u:"", d:"To light a whole room" },
  batt:{ n:"Spare batteries (AA, AAA)", u:"", d:"Standardising on one size makes them easier to manage" },
  candle:{ n:"Candles and lighter", u:"set", d:"Fire risk — keep them as a backup only" },
  pbank:{ n:"Power bank, 20,000mAh or more", u:"", d:"Four to five phone charges. Emergency alerts only reach a phone that still works" },
  solar:{ n:"Solar or hand-crank charger", u:"", d:"The only way to charge once an outage drags on" },
  carchg:{ n:"Car charger", u:"", d:"If you have a car, it is your most realistic generator" },
  cable:{ n:"Spare charging cables", u:"", d:"One broken cable makes a full power bank useless" },
  radio:{ n:"Battery or hand-crank radio", u:"", d:"May be your only channel for civil defence alerts and government instructions" },
  paperlist:{ n:"Contact list on paper", u:"copies", d:"Once the phone dies, only memorised numbers remain. Write it on the card tab" },
  map:{ n:"Paper map (your area and escape routes)", u:"", d:"With the phone dead there is no other way to navigate. Mark shelters and routes in advance" },
  whistle:{ n:"Whistle", u:"", d:"Sound carries if you are trapped under rubble" },
  anal:{ n:"Painkillers and fever reducers", u:"packs", d:"Both paracetamol and ibuprofen" },
  ors:{ n:"Anti-diarrhoeal and oral rehydration salts", u:"set", d:"Dehydration from diarrhoea really does kill" },
  stom:{ n:"Indigestion and antacid medicine", u:"set", d:"Emergency rations differ from your usual diet and upset the stomach easily" },
  anti:{ n:"Antihistamine", u:"pack", d:"For allergic reactions" },
  cold:{ n:"Cold and flu medicine", u:"pack", d:"Shelters are crowded, so infections spread fast" },
  rx:{ n:"One month of prescription medicine", u:"people", d:"{n} with chronic conditions. Arrange a long prescription in advance and keep a copy of it" },
  gauze:{ n:"Gauze, bandages, plasters", u:"set", d:"Even a small wound turns into an infection if left untreated" },
  anti2:{ n:"Antiseptic, saline, antibiotic ointment", u:"set", d:"For cleaning wounds when there is no clean water" },
  tq:{ n:"Tourniquet and haemostatic pads", u:"set", d:"Heavy bleeding turns fatal within minutes" },
  kit:{ n:"Medical scissors, tweezers, thermometer, gloves", u:"set", d:"Treating a wound bare-handed puts both the patient and you at risk" },
  splint:{ n:"Triangular bandage and splint", u:"set", d:"Immobilising a fracture alone prevents further injury" },
  wipes:{ n:"Wet wipes (80 sheets)", u:"packs", d:"Almost the only way to wash without water" },
  soap:{ n:"Soap, hand sanitiser, toothbrush", u:"people", d:"The scarcer water gets, the more hand hygiene is what stops infection" },
  tp:{ n:"Toilet paper", u:"rolls", d:"With no running water you cannot wash, so you get through far more than usual" },
  sani:{ n:"Menstrual supplies", u:"pieces", d:"{n} people x two months. The most commonly forgotten item" },
  mask:{ n:"KF94 / N95 masks", u:"", d:"Genuinely reduces how much fallout and dust you breathe in" },
  trash:{ n:"Heavy bin bags, 50L", u:"", d:"Rubbish collection stops. Sealing waste is what keeps the place sanitary" },
  toilet:{ n:"Emergency toilet bags and gelling powder", u:"uses", d:"Three uses per person per day. Flush toilets stop working in a water cut" },
  clorox:{ n:"Bleach and rubbing alcohol", u:"set", d:"Standing wastewater spreads disease quickly" },
  bag:{ n:"Backpack (one per person)", u:"", d:"15kg for an adult, under 10% of body weight for children and older people. Keep both hands free" },
  gowater:{ n:"500ml water for the bag", u:"bottles", d:"1.5L each. Keep this separate from your home stock" },
  gofood:{ n:"Energy bars and biscuits for the bag", u:"", d:"Three days' worth. Only things you can eat without cooking" },
  blanket:{ n:"Emergency foil blanket", u:"", d:"Takes almost no space and cuts heat loss sharply" },
  spare:{ n:"Spare underwear, socks, rain gear", u:"people", d:"Wet clothes drain body heat fast" },
  cash:{ n:"Cash in small notes", u:"KRW", d:"About {amt} won. Cards, ATMs and mobile payments all stop in a power cut" },
  docs:{ n:"ID and document copies", u:"sets", d:"ID, insurance papers, property deeds, bank details. In a waterproof bag" },
  usb:{ n:"USB stick with scanned documents", u:"", d:"The last copy left if the paper documents are lost" },
  photo:{ n:"Family photo", u:"", d:"Genuinely used to find people when a family is separated" },
  idcard:{ n:"Child ID card", u:"", d:"Name and guardian's number, attached to clothing or a bag" },
  multitool:{ n:"Multi-tool, lighter, paracord", u:"set", d:"The minimum kit when you cannot carry a whole toolbox" },
  sleep:{ n:"Sleeping bag (winter rated)", u:"", d:"Rated to -10°C or lower" },
  heatpack:{ n:"Heat packs", u:"", d:"Two per person per day through winter" },
  heatpack_off:{ n:"Heat packs", u:"", d:"Non-winter figure. Turn winter on in settings and this goes up" },
  thermal:{ n:"Thermals, thick socks, gloves, hat", u:"people", d:"Most body heat escapes through the head and feet" },
  shoes:{ n:"Sturdy trainers or hiking boots", u:"pairs", d:"You will be walking on glass and rubble. Just designate a pair each" },
  tarp:{ n:"Tarpaulin and ground mat", u:"", d:"A temporary cover for a broken window or a leaking roof" },
  plastic:{ n:"Heavy plastic sheeting and bubble wrap", u:"rolls", d:"For covering broken windows and sealing one room" },
  tape:{ n:"Duct tape and cloth tape", u:"rolls", d:"Seals a broken window and cuts down contaminated air getting in" },
  gloves:{ n:"Leather work gloves", u:"pairs", d:"You cannot clear broken glass and rubble bare-handed" },
  tools:{ n:"Hammer, pliers, screwdriver set", u:"set", d:"A jammed door or a burst pipe is yours to fix" },
  gaswrench:{ n:"Gas shut-off wrench", u:"", d:"Closing the valve is how you prevent explosion and fire" },
  fire:{ n:"Fire extinguisher", u:"", d:"During an earthquake or a blackout the fire service cannot come straight away" },
  prybar:{ n:"Folding shovel or pry bar", u:"", d:"For when a door is jammed in its frame" },
  dustmask:{ n:"Dust mask and safety goggles", u:"sets", d:"Collapse dust and asbestos get through an ordinary mask" },
  rope:{ n:"Paracord or rope, 20m", u:"", d:"Anchoring, hauling, tying things down — it covers a lot" },
  pen:{ n:"Notebook and permanent marker", u:"set", d:"For leaving a note of where you have gone" },
  formula:{ n:"Formula and baby food", u:"× 100g", d:"{n} infants × about 120g a day × {d} days. Bottles and a brush too" },
  diaper:{ n:"Nappies", u:"", d:"Eight a day" },
  babymed:{ n:"Infant fever medicine and thermometer", u:"set", d:"Note the dose for your child's weight and keep it with them" },
  carrier:{ n:"Baby carrier", u:"", d:"A pushchair is useless on rubble and stairs" },
  comfort:{ n:"Favourite toy or blanket", u:"", d:"It does real work in keeping a child calm" },
  bp:{ n:"Blood pressure and glucose monitor", u:"set", d:"Add a cool pack if anyone uses insulin" },
  glasses:{ n:"Spare glasses, hearing aid batteries, denture tablets", u:"people", d:"Lose one and you cannot replace it quickly, and daily life gets hard" },
  cane:{ n:"Walking stick or walking frame", u:"", d:"You may have to walk all the way to the shelter" },
  medcard:{ n:"Condition, medication and allergy card", u:"", d:"Carry it in a wallet. It decides your treatment if you are unconscious" },
  dogfood:{ n:"Dog food", u:"kg", d:"{n} dogs × about {g}g a day × {d} days" },
  pad:{ n:"Puppy pads", u:"", d:"While you are shut indoors there are no walks" },
  catfood:{ n:"Cat food", u:"kg", d:"{n} cats × about 70g a day × {d} days" },
  litter:{ n:"Cat litter", u:"kg", d:"Run out and the cat goes anywhere, and hygiene collapses" },
  kennel:{ n:"Carrier, lead, harness", u:"sets", d:"Many shelters do not take animals. Arrange somewhere in advance" },
  petdoc:{ n:"Vaccination record, registration copy, photo", u:"sets", d:"Shelters ask for it, and it is what proves the animal is yours if it goes missing" }
},
fb:{
  t:"Suggestions and problems",
  lead:"This is for fixing the app. <b>It is not a way to call for help.</b> In an emergency, phone 119.",
  priv:"Do not write anything sensitive, such as an address, phone number or medical condition. Your family card and contacts are never attached.",
  typeL:"What is this about?",
  ty1:"A suggestion",
  ty2:"Something broken",
  ty3:"A correction to the guidance",
  ty4:"Something else",
  textL:"Your message",
  ph:"Tell us what was awkward, or what you need the app to do.",
  count:"{n} / 1000 characters",
  saved:"What you write is kept on this device. On a shared device, clear it when you are done.",
  unsaved:"This device cannot save it. What you wrote may be lost when the app closes.",
  to:"Sent to",
  prev:"Preview what will be sent",
  note:"The button below opens your mail app. You still have to press send there. If no mail app opens, copy the text and send it yourself.",
  send:"Open mail app",
  copy:"Copy message",
  copyaddr:"Copy address",
  clear:"Clear what I wrote",
  clearAsk:"Press again to clear",
  cleared:"Cleared.",
  needText:"Please write a message first.",
  opening:"Your mail app was opened. If nothing happened, copy the message and address and send it yourself.",
  cantOpen:"No mail app could be opened. Please use the copy buttons.",
  copied:"Copied.",
  copyFail:"Could not copy. Please select the text on screen and copy it.",
  replyKo:"The team reads and replies in Korean. Write in your own language if that is easier — it will be translated."
},
sit:{
  siren:{ t:"The sirens have sounded", l:"Start by telling the tones apart",
    s:[
      ["Identify the tone","Alert warnings, CBRN warnings and all-clear messages carry no siren at all — only a voice broadcast. The siren sounds for just two warnings, air raid and nuclear attack: a cycle of 2 seconds rising, 3 seconds held at the top and 3 seconds falling, repeating every 8 seconds for one minute. The two sirens are identical, so the voice broadcast is what tells them apart, and either one means go underground now."],
      ["Turn on a radio or TV","Emergency broadcasts and civil defence instructions go out there. If your phone still works, check the alert messages in the 안전디딤돌 (Safety Dideemdol) app too."],
      ["Contact family once","Calls jam and rarely connect. Text messages get through better. Send your location and the agreed meeting point, then stop."],
      ["Take the go-bag and head underground","Go to the nearest civil defence shelter, subway station or basement car park. Do not use the lift."]
    ],
    d:["Never the lift","A power cut traps you inside. Always take the stairs."] },
  airraid:{ t:"Air raid — right now", l:"When there is no time to reach a shelter",
    s:[
      ["Lowest floor, furthest inside","A basement is best. If there is none, go to a windowless space in the centre of the building; failing that, a bathroom or corridor."],
      ["Get away from windows","Flying glass causes more civilian casualties than anything else in a blast. Put as much distance as you can between yourself and windows or outside walls."],
      ["Lie down and cover your head and neck","Lie flat, open your mouth to protect your eardrums, and cover the back of your head and neck with both hands. Get under solid furniture if there is any."],
      ["Do not go out when the noise stops","Second strikes and structural collapse are common. Wait for the all clear or official instructions."]
    ],
    d:["Do not look outside","More people are hurt going to the window to see what happened than by anything else."] },
  cbrn:{ t:"Chemical, biological or fallout", l:"Get inside, stay inside, stay tuned",
    s:[
      ["Get inside","The most effective protection is not expensive equipment but the inside of a concrete building, a basement, a room with no windows. The thicker the walls and the further from outside, the better."],
      ["If you were outdoors, take off your outer clothing","Seal it in a plastic bag and move it well away from where you are living. That alone removes most of the contamination. Then shower with soap, hair included."],
      ["Seal one room","Cover windows, vents and gaps around doors with plastic sheeting and duct tape. Switch off ventilation and air conditioning."],
      ["Stay put for at least 48 hours","Radioactive fallout loses intensity rapidly with time. Getting through the first 48 hours indoors matters more than anything else."],
      ["Keep the radio on","Do not go out until the authorities say it is safe. Take potassium iodide only if you are told to."]
    ],
    d:["Potassium iodide is not a cure-all","It protects the thyroid and nothing else. It does not stop other radioactive materials or external exposure. It can be dangerous for people with thyroid disease or an iodine allergy, so do not take it in advance."] },
  blackout:{ t:"Power cut", l:"Start with the fridge and your batteries",
    s:[
      ["Switch on a torch","Candles are a fire risk — keep them as a backup. A head torch leaves both hands free."],
      ["Keep the fridge closed","Left shut, a fridge holds about four hours and a full freezer about 48. Eat the chilled food first."],
      ["Put the phone in power saving","Dim the screen, turn off data and location. Get your power bank and car charger out."],
      ["Check the breaker box","See whether it is only your home. If the whole building is out, report it to KEPCO on 123."],
      ["Prepare for the power returning","Unplug heaters and appliances. Everything switching on at once risks overload and fire."]
    ],
    d:["Never burn charcoal, briquettes or a gas stove for heat indoors","Carbon monoxide kills people in their sleep. Use them for cooking only, always with ventilation."] },
  nowater:{ t:"Water cut", l:"Separate water by what it is for",
    s:[
      ["If you have warning, fill up now","Fill the bath, large pots, the washing machine, every empty container. One bathtub holds roughly 200L."],
      ["Separate by use","Drink only bottled water; use the water you stored for washing and the toilet. Mix them and your drinking water goes first."],
      ["Do not wash up","Use disposable plates and foil, and wipe with wet wipes. Washing is where water disappears fastest."],
      ["Line the toilet with a bag","Fit a plastic bag over the bowl, add gelling powder or newspaper, then seal it after use. Keep waste away from where you live."],
      ["Disinfect any doubtful water","Boiling for a full minute is the most reliable. If you cannot boil, add 2 drops of unscented bleach per litre and wait 30 minutes."]
    ],
    d:["Do not leave wastewater standing","Disease spreads fast from standing sewage. Always seal it."] },
  evac:{ t:"Leaving home", l:"The last 60 seconds before you go",
    s:[
      ["Close the gas valve and pull the breaker","This is the single most important thing for preventing fire and explosion. Shut the water valve too."],
      ["Take the go-bag, ID and cash","Don't forget document copies and prescription medicine. Do not delay trying to pack more."],
      ["Leave a note on the door","Time you left, where you are going, how many of you, a contact number. Family and rescuers who come looking need it."],
      ["Wear sturdy shoes and long clothing","You will be walking on rubble and glass. Put gloves and a mask on too."],
      ["Go to the agreed meeting point","No lifts. Walk if you can — roads block up quickly."]
    ],
    d:[] },
  separated:{ t:"Separated from family", l:"Don't wander — follow the plan",
    s:[
      ["Go to the agreed meeting point","The near one first, the far one second. Waiting at the meeting point reunites you faster than searching."],
      ["Send a text","Texts get through when calls don't. Keep it to where you are, how you are, and where you are going next."],
      ["Use the relay contact","If local networks fail, everyone contacts the agreed person abroad, who passes on each other's news."],
      ["Register your name at the shelter","Every shelter keeps a list. Registering is how your family finds you."],
      ["Use photos to find children","Family photos and ID cards really do get used. Show them to shelter staff and police."]
    ],
    d:[] },
  bleed:{ t:"Bleeding and injury", l:"Heavy bleeding turns fatal within minutes",
    s:[
      ["Press directly on it","Put clean cloth or gauze on the wound and press hard with your body weight. If blood soaks through, add more on top — never lift the first layer off."],
      ["If pressure doesn't stop it, use a tourniquet","For heavy bleeding from an arm or leg that pressure won't stop, apply a tourniquet above the wound, towards the heart, and tighten until the bleeding stops. Write the time it went on, on the skin or a piece of paper."],
      ["Lay them down and keep them warm","Raise the legs slightly and cover with a blanket. Shock drops body temperature."],
      ["Check breathing and responsiveness","If there is no response and no breathing, start chest compressions: 100 to 120 a minute, pressing 5cm deep, without stopping."],
      ["Keep trying 119","When you get through, give the location and the injury first."]
    ],
    d:["Do not pull out anything embedded","If glass or debris is lodged in the wound, leave it and pack around it. Pulling it out makes the bleeding far worse."] },
  fire:{ t:"Fire", l:"Smoke kills before flame does",
    s:[
      ["Shout and raise the alarm","Shout fire and hit the alarm. Give an extinguisher 30 seconds at most, then give up and get out."],
      ["Stay low","Toxic gas collects at the top. Cover your nose and mouth with a wet towel and move low, keeping a hand on the wall."],
      ["Feel the door first","Touch the handle with the back of your hand. If it is hot, do not open it. Find another way out or wait for rescue in the room."],
      ["If you are trapped","Block the gap under the door with wet cloth and wave something bright at the window. Blow a whistle if you have one."],
      ["Never use the lift","Stairs only. Once you are out, do not go back in."]
    ],
    d:[] },
  quake:{ t:"Earthquake", l:"Get down while it shakes, get out when it stops",
    s:[
      ["Get under a table","Protect your head and hold a table leg. With no table, cover your head with a cushion or bag and crouch beside a pillar."],
      ["Wait until the shaking stops","Running outside mid-shake gets you hit by falling objects. Move once it is over."],
      ["Shut off gas and electricity","The moment it stops, close the gas valve and pull the breaker. Fire causes most of the secondary damage."],
      ["Leave the building by the stairs","Put shoes on and open a door to keep an exit clear. Do not use the lift."],
      ["Head for a playing field or park","Get to open ground well away from buildings, walls and power poles. Expect aftershocks."]
    ],
    d:[] },
  cold:{ t:"Cold snap, no heating", l:"Heat one room, not the house",
    s:[
      ["Pick one small room","A small room with few windows is best. Trying to heat the whole house leaves everywhere cold."],
      ["Seal the windows and door gaps","Tape plastic sheeting or bubble wrap over the windows and stuff a towel under the door. Closing curtains cuts heat loss a lot."],
      ["Everyone in one room","Body heat alone raises the temperature. Put children and older people in the middle."],
      ["Layer your clothing","Cover head and feet first — a hat, thick socks and gloves, in that order of effect. If you start sweating, take a layer off so nothing gets damp."],
      ["Warm drinks, little and often","Raises body temperature and prevents dehydration. Avoid alcohol: it opens the blood vessels and drops your temperature further."]
    ],
    d:["Never burn fuel indoors for heat","Charcoal, briquettes or a gas stove left burning for warmth kills by carbon monoxide poisoning. Cooking only, with ventilation."] },
  purify:{ t:"How to disinfect drinking water", l:"When your stored water runs out",
    s:[
      ["Filter it first","Cloudy or muddy water goes through cloth, a coffee filter or kitchen roll to remove particles. Disinfection only works after that."],
      ["Boiling is the most reliable","Hold it at a rolling boil for at least one minute; three minutes above 1,000m."],
      ["If you cannot boil, use bleach","Add 2 drops of unscented household bleach (4–5%) per litre, stir well, and wait 30 minutes. A faint chlorine smell means it worked."],
      ["No smell? Repeat once","If there is no chlorine smell at all after 30 minutes, add 2 more drops and wait another 15."],
      ["Tablets work the same way","Follow the waiting time on the packet — usually 30 minutes."]
    ],
    d:["What this does not remove","Chemicals, heavy metals and radioactive material survive boiling and bleach. Boiling actually concentrates them. Do not drink water you suspect is contaminated."] }
}
};
