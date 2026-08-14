const items = [
  { name: "휴지", en: "Toilet Paper", emoji: "🧻" },
  { name: "변기", en: "Toilet", emoji: "🚽" },
  { name: "양말", en: "Socks", emoji: "🧦" },
  { name: "칫솔", en: "Toothbrush", emoji: "🪥" },
  { name: "우산", en: "Umbrella", emoji: "☂️" },
  { name: "뭐든지", en: "Anything", emoji: "❓" },
  { name: "의자", en: "Chair", emoji: "🪑" },
  { name: "프라이팬", en: "Frying Pan", emoji: "🍳" },
  { name: "쓰레기통", en: "Trash Can", emoji: "🗑️" },
  { name: "쇼핑카트", en: "Shopping Cart", emoji: "🛒" },
  { name: "욕조", en: "Bathtub", emoji: "🛁" },
  { name: "소화기", en: "Fire Extinguisher", emoji: "🧯" },
  { name: "사다리", en: "Ladder", emoji: "🪜" },
  { name: "문", en: "Door", emoji: "🚪" },
  { name: "관", en: "Coffin", emoji: "⚰️" },
  { name: "묘비", en: "Gravestone", emoji: "🪦" },
  { name: "모아이 석상", en: "Moai Statue", emoji: "🗿" },
  { name: "미러볼", en: "Disco Ball", emoji: "🪩" },
  { name: "여행가방", en: "Suitcase", emoji: "🧳" },
  { name: "자석", en: "Magnet", emoji: "🧲" },
  { name: "열쇠", en: "Key", emoji: "🔑" },
  { name: "망치", en: "Hammer", emoji: "🔨" },
  { name: "도끼", en: "Axe", emoji: "🪓" },
  { name: "뚫어뻥", en: "Plunger", emoji: "🪠" },
  { name: "빗자루", en: "Broom", emoji: "🧹" },
  { name: "양동이", en: "Bucket", emoji: "🪣" },
  { name: "확성기", en: "Megaphone", emoji: "📣" },
  { name: "트로피", en: "Trophy", emoji: "🏆" },
  { name: "왕관", en: "Crown", emoji: "👑" },
  { name: "다이아몬드", en: "Diamond", emoji: "💎" },
  { name: "돈다발", en: "Cash", emoji: "💵" },
  { name: "슬롯머신", en: "Slot Machine", emoji: "🎰" },
  { name: "쥐덫", en: "Mouse Trap", emoji: "🪤" },
  { name: "폭죽", en: "Firecracker", emoji: "🧨" },
  { name: "곰인형", en: "Teddy Bear", emoji: "🧸" },
  { name: "마술봉", en: "Magic Wand", emoji: "🪄" },
  { name: "피냐타", en: "Piñata", emoji: "🪅" },
  { name: "마트료시카", en: "Matryoshka Doll", emoji: "🪆" },
  { name: "부적", en: "Amulet", emoji: "🪬" },
  { name: "나자르", en: "Nazar Amulet", emoji: "🧿" },
  { name: "피자", en: "Pizza", emoji: "🍕" },
  { name: "바나나", en: "Banana", emoji: "🍌" },
  { name: "수박", en: "Watermelon", emoji: "🍉" },
  { name: "달걀", en: "Egg", emoji: "🥚" },
  { name: "라면", en: "Ramen", emoji: "🍜" },
  { name: "감자", en: "Potato", emoji: "🥔" },
  { name: "통닭", en: "Roast Chicken", emoji: "🍗" },
  { name: "케이크", en: "Cake", emoji: "🎂" },
  { name: "아이스크림", en: "Ice Cream", emoji: "🍦" },
  { name: "도넛", en: "Donut", emoji: "🍩" },
  { name: "자동차", en: "Car", emoji: "🚗" },
  { name: "스포츠카", en: "Sports Car", emoji: "🏎️" },
  { name: "버스", en: "Bus", emoji: "🚌" },
  { name: "기차", en: "Train", emoji: "🚆" },
  { name: "자전거", en: "Bicycle", emoji: "🚲" },
  { name: "오토바이", en: "Motorcycle", emoji: "🏍️" },
  { name: "헬리콥터", en: "Helicopter", emoji: "🚁" },
  { name: "카누", en: "Canoe", emoji: "🛶" },
  { name: "트랙터", en: "Tractor", emoji: "🚜" },
  { name: "구급차", en: "Ambulance", emoji: "🚑" },
  { name: "펭귄", en: "Penguin", emoji: "🐧" },
  { name: "카피바라", en: "Capybara", emoji: "🦫" },
  { name: "기린", en: "Giraffe", emoji: "🦒" },
  { name: "고릴라", en: "Gorilla", emoji: "🦍" },
  { name: "문어", en: "Octopus", emoji: "🐙" },
  { name: "소", en: "Cow", emoji: "🐄" },
  { name: "선인장", en: "Cactus", emoji: "🌵" },
  { name: "야자수", en: "Palm Tree", emoji: "🌴" },
  { name: "꽃다발", en: "Bouquet", emoji: "💐" },
  { name: "버섯", en: "Mushroom", emoji: "🍄" },
  { name: "돌멩이", en: "Rock", emoji: "🪨" },
  { name: "벽돌", en: "Brick", emoji: "🧱" },
  { name: "텐트", en: "Tent", emoji: "⛺" },
  { name: "집", en: "House", emoji: "🏠" },
  { name: "성", en: "Castle", emoji: "🏰" },
  { name: "자유의 여신상", en: "Statue of Liberty", emoji: "🗽" },
  { name: "대관람차", en: "Ferris Wheel", emoji: "🎡" },
  { name: "공룡", en: "Dinosaur", emoji: "🦖" },
  { name: "유령", en: "Ghost", emoji: "👻" },
  { name: "마법사", en: "Wizard", emoji: "🧙" },
  { name: "로봇", en: "Robot", emoji: "🤖" },
  { name: "외계인", en: "Alien", emoji: "👽" },
  { name: "UFO", en: "UFO", emoji: "🛸" },
  { name: "인공위성", en: "Satellite", emoji: "🛰️" },
  { name: "로켓", en: "Rocket", emoji: "🚀" },
  { name: "달", en: "Moon", emoji: "🌕" },
  { name: "지구", en: "Earth", emoji: "🌍" },
  { name: "태양", en: "Sun", emoji: "☀️" },
  { name: "무지개", en: "Rainbow", emoji: "🌈" },
  { name: "번개", en: "Lightning", emoji: "⚡" },
  { name: "토네이도", en: "Tornado", emoji: "🌪️" },
  { name: "화산", en: "Volcano", emoji: "🌋" },
  { name: "섬", en: "Island", emoji: "🏝️" },
  { name: "눈사람", en: "Snowman", emoji: "☃️" },
  { name: "눈송이", en: "Snowflake", emoji: "❄️" },
  { name: "닻", en: "Anchor", emoji: "⚓" },
  { name: "낙하산", en: "Parachute", emoji: "🪂" },
  { name: "풍선", en: "Balloon", emoji: "🎈" },
  { name: "축구공", en: "Soccer Ball", emoji: "⚽" },
  { name: "볼링공", en: "Bowling Ball", emoji: "🎳" }
];
const stateKey = "randomVendingCollectionV2";
const previousStateKey = "randomVendingCollectionV1";

function loadCollection(){
  try {
    const saved = JSON.parse(localStorage.getItem(stateKey) || "null");
    if(saved && typeof saved === "object") return saved;

    // V1(등급제)에서 한 번이라도 얻었던 물건은 새 보관함에서도 획득 처리.
    const previous = JSON.parse(localStorage.getItem(previousStateKey) || "null");
    if(previous && typeof previous === "object"){
      const migrated = {};
      Object.entries(previous).forEach(([key, count]) => {
        const itemIndex = Number(String(key).split(":")[0]);
        if(Number.isInteger(itemIndex) && itemIndex >= 0 && itemIndex < items.length && count > 0){
          migrated[itemIndex] = (migrated[itemIndex] || 0) + Number(count || 0);
        }
      });
      localStorage.setItem(stateKey, JSON.stringify(migrated));
      return migrated;
    }
  } catch(error){
    console.warn("Could not load vending collection.", error);
  }
  return {};
}

let collection = loadCollection();

const drawButton = document.getElementById("drawButton");
const machine = document.getElementById("machine");
const display = document.getElementById("display");
const mystery = document.getElementById("mystery");
const resultCard = document.getElementById("resultCard");
const rarityBadge = document.getElementById("rarityBadge");
const resultEmoji = document.getElementById("resultEmoji");
const resultName = document.getElementById("resultName");
const resultLine = document.getElementById("resultLine");
const newBadge = document.getElementById("newBadge");
const chuteItem = document.getElementById("chuteItem");
const collectionCount = document.getElementById("collectionCount");
const dialog = document.getElementById("collectionDialog");
const grid = document.getElementById("collectionGrid");
const summary = document.getElementById("raritySummary");
const legendFx = document.getElementById("legendFx");

// 현재 1.0에서 고유 연출을 가진 특별 아이템.
// 업데이트 때 여기에 이름을 추가하면서 특별 연출을 조금씩 늘리면 된다.
const specialItems = new Set([
  "태양", "로켓", "소", "돌멩이", "지구", "펭귄", "기린", "고릴라", "유령", "UFO"
]);

const specialLines = {
  "태양": { ko: "태양을 뽑아버렸다.", en: "You just pulled out the Sun." },
  "로켓": { ko: "목적지는 모른다.", en: "Destination unknown." },
  "소": { ko: "자판기 안에 어떻게 들어가 있었지?", en: "How was that inside the machine?" },
  "돌멩이": { ko: "평범해 보이는데... 뭔가 다르다.", en: "It looks ordinary... but something feels different." },
  "지구": { ko: "...이걸 가져도 되는 걸까?", en: "...Are you even allowed to keep this?" },
  "펭귄": { ko: "여기까지 미끄러져 왔다.", en: "It slid all the way here." },
  "기린": { ko: "출구보다 목이 먼저 나왔다.", en: "The neck came out first." },
  "고릴라": { ko: "자판기가 버티지 못했다.", en: "The vending machine couldn't handle it." },
  "유령": { ko: "보관함에 넣어도 될까?", en: "Can this even go in the collection?" },
  "UFO": { ko: "그쪽에서도 이 자판기를 알고 있었다.", en: "Apparently, they know about this machine too." }
};

const languageKey = "randomVendingLanguageV1";
let currentLanguage =
  localStorage.getItem(languageKey) ||
  (navigator.language && navigator.language.toLowerCase().startsWith("ko") ? "ko" : "en");

const uiText = {
  ko: {
    documentTitle: "뭐든 나오는 자판기",
    titleTop: "뭐든 나오는",
    titleMain: "자판기",
    machineLabel: "뭐든지 나와요!",
    noteLeft: "오늘은<br>뭘 뽑을까?",
    noteRight: "이 안에<br>모든 것이<br>있다?!",
    draw: "뽑기",
    luck: "행운을<br>빌어요!",
    collection: "보관함",
    dialogTitle: "보관함",
    discovered: "발견",
    resetConfirm: "보관함을 전부 초기화할까?",
    resetAria: "보관함 초기화",
    secretAria: "숨겨진 뭐든지 뽑기",
    prismTest: "PRISM 테스트"
  },
  en: {
    documentTitle: "Anything Vending Machine",
    titleTop: "ANYTHING VENDING",
    titleMain: "MACHINE",
    machineLabel: "ANYTHING CAN COME OUT!",
    noteLeft: "What will<br>come out today?",
    noteRight: "Everything<br>is in here?!",
    draw: "DRAW",
    luck: "GOOD<br>LUCK!",
    collection: "COLLECTION",
    dialogTitle: "Collection",
    discovered: "DISCOVERED",
    resetConfirm: "Reset the entire collection?",
    resetAria: "Reset collection",
    secretAria: "Draw the hidden Anything item",
    prismTest: "PRISM TEST"
  }
};

function itemDisplayName(item){
  return currentLanguage === "en" ? item.en : item.name;
}

function specialDisplayLine(name){
  const entry = specialLines[name];
  if(!entry) return "";
  return entry[currentLanguage] || "";
}

function applyLanguage(){
  const t = uiText[currentLanguage];

  document.documentElement.lang = currentLanguage === "ko" ? "ko" : "en";
  document.title = t.documentTitle;

  const titleTop = document.querySelector(".title-wrap h1 span");
  const titleMain = document.querySelector(".title-wrap h1 strong");
  const label = document.querySelector(".machine-label");
  const noteLeft = document.querySelector(".note-left");
  const noteRight = document.querySelector(".note-right");
  const drawText = drawButton?.querySelector("span");
  const luckTextEl = document.getElementById("luckText");
  const collectionText = document.querySelector("#collectionButton > span:not(.box-icon)");
  const dialogTitle = document.querySelector(".dialog-head h2");
  const resetButtonEl = document.getElementById("resetButton");

  if(titleTop) titleTop.textContent = t.titleTop;
  if(titleMain) {
    titleMain.textContent = t.titleMain;
    titleMain.classList.toggle("english-title-main", currentLanguage === "en");
  }
  if(label) label.textContent = t.machineLabel;
  if(noteLeft) noteLeft.innerHTML = t.noteLeft;
  if(noteRight) noteRight.innerHTML = t.noteRight;
  if(drawText) drawText.textContent = t.draw;
  if(luckTextEl) luckTextEl.innerHTML = t.luck;
  if(collectionText) collectionText.textContent = t.collection;
  if(dialogTitle) dialogTitle.textContent = t.dialogTitle;
  if(resetButtonEl) resetButtonEl.setAttribute("aria-label", t.resetAria);
  if(machineLabel) machineLabel.setAttribute("aria-label", t.secretAria);

  document.querySelectorAll(".language-button").forEach(button => {
    button.classList.toggle("active", button.dataset.language === currentLanguage);
  });

  // 현재 결과가 떠 있다면 언어만 즉시 바꾼다.
  const resultIndex = Number(resultCard?.dataset.itemIndex ?? -1);
  if(Number.isInteger(resultIndex) && resultIndex >= 0 && resultIndex < items.length){
    const item = items[resultIndex];
    resultName.textContent = itemDisplayName(item);
    const line = specialDisplayLine(item.name);
    resultLine.textContent = line;
    resultLine.classList.toggle("hidden", !line);
  }

  if(dialog?.open) renderCollection();
}

function setLanguage(language){
  currentLanguage = language === "en" ? "en" : "ko";
  localStorage.setItem(languageKey, currentLanguage);
  applyLanguage();
}

function installLanguageControls(){
  if(document.getElementById("languageControls")) return;

  const controls = document.createElement("div");
  controls.id = "languageControls";
  controls.className = "language-controls";
  controls.innerHTML = `
    <button class="language-button" type="button" data-language="ko">KR</button>
    <span>|</span>
    <button class="language-button" type="button" data-language="en">EN</button>
  `;

  document.querySelector(".app-shell")?.appendChild(controls);

  controls.querySelectorAll(".language-button").forEach(button => {
    button.addEventListener("click", () => setLanguage(button.dataset.language));
  });
}


function sleep(ms){ return new Promise(r=>setTimeout(r,ms)); }
function keyFor(itemIndex){ return String(itemIndex); }
function totalCollected(){ return Object.values(collection).filter(count => count > 0).length; }
function totalPossible(){ return items.length; }

function save(){
  try {
    localStorage.setItem(stateKey, JSON.stringify(collection));
  } catch(error){
    console.warn("Could not save vending collection.", error);
  }
  collectionCount.textContent = `${totalCollected()} / ${totalPossible()}`;
}

function clearMachineFx(){
  const machineClasses = [...machine.classList].filter(c => c.startsWith("fx-") || ["shake","rare","legendary"].includes(c));
  machineClasses.forEach(c => machine.classList.remove(c));
  machine.style.removeProperty("transform");

  [...document.body.classList]
    .filter(c => c.startsWith("fx-"))
    .forEach(c => document.body.classList.remove(c));

  [...display.classList]
    .filter(c => c.startsWith("rarity-"))
    .forEach(c => display.classList.remove(c));

  resultCard.classList.remove("rare-result", "legendary-result");
  legendFx.className = "legend-fx hidden";
  legendFx.innerHTML = "";
}

function addStars(n=18){
  for(let i=0;i<n;i++){
    const s=document.createElement("span");
    s.className="fx-star";
    s.textContent=i%2?"✦":"★";
    s.style.left="50%"; s.style.top="50%";
    const a=Math.random()*Math.PI*2;
    const d=70+Math.random()*150;
    s.style.setProperty("--x",`${Math.cos(a)*d}px`);
    s.style.setProperty("--y",`${Math.sin(a)*d}px`);
    legendFx.appendChild(s);
  }
}
function addSmoke(n=8){
  for(let i=0;i<n;i++){
    const s=document.createElement("span");
    s.className="fx-smoke";
    s.style.left=`${35+Math.random()*30}%`;
    s.style.top=`${45+Math.random()*25}%`;
    s.style.setProperty("--x",`${-45+Math.random()*90}px`);
    legendFx.appendChild(s);
  }
}
function addHearts(n=12){
  for(let i=0;i<n;i++){
    const h=document.createElement("span");
    h.className="fx-heart";
    h.textContent="♥";
    h.style.left=`${20+Math.random()*60}%`;
    h.style.top=`${55+Math.random()*25}%`;
    h.style.setProperty("--x",`${-60+Math.random()*120}px`);
    legendFx.appendChild(h);
  }
}
function addFeathers(n=14){
  for(let i=0;i<n;i++){
    const f=document.createElement("span");
    f.className="fx-feather";
    f.textContent="•";
    f.style.left=`${10+Math.random()*80}%`;
    f.style.top=`${5+Math.random()*20}%`;
    f.style.setProperty("--x",`${-70+Math.random()*140}px`);
    legendFx.appendChild(f);
  }
}
function fxItem(emoji, cls="", extra=""){
  const el=document.createElement("div");
  el.className=`fx-item ${cls} ${extra}`;
  el.textContent=emoji;
  legendFx.appendChild(el);
  return el;
}
function showFx(){
  legendFx.classList.remove("hidden");
}

async function baseImpact(ms=380){
  showFx();
  document.body.classList.add("fx-screen-shake");
  machine.classList.add("fx-machine-shake");
  await sleep(ms);
  document.body.classList.remove("fx-screen-shake");
  machine.classList.remove("fx-machine-shake");
}

const legendaryEffects = {
  "휴지": async e=>{
    await baseImpact(300); fxItem(e,"fx-paper");
    for(let i=0;i<7;i++){
      const line=document.createElement("div");
      line.className="fx-line";
      line.style.left=`${10+i*9}%`; line.style.top=`${20+i*8}%`;
      line.style.width=`${80+i*8}px`; line.style.transform=`rotate(${i*28}deg)`;
      legendFx.appendChild(line);
    }
    await sleep(1450);
  },
  "변기": async e=>{
    await baseImpact(330); legendFx.innerHTML+='<div class="fx-water"></div>';
    fxItem(e,"fx-toilet"); await sleep(1350);
  },
  "양말": async e=>{
    await baseImpact(250); fxItem(e,"fx-socks");
    const e2=fxItem("🧦","fx-socks fx-mini"); e2.style.left="72%"; e2.style.top="40%";
    await sleep(1250);
  },
  "칫솔": async e=>{
    showFx(); machine.classList.add("fx-machine-shake");
    fxItem(e,"fx-brush"); await sleep(1250); machine.classList.remove("fx-machine-shake");
  },
  "우산": async e=>{
    await baseImpact(300); machine.classList.add("fx-machine-wide"); fxItem(e,"fx-umbrella"); await sleep(1150);
  },
  "베개": async e=>{
    showFx(); machine.classList.add("fx-machine-squash"); fxItem(e,"fx-pillow"); addSmoke(6); await sleep(1150);
  },
  "의자": async e=>{
    await baseImpact(430); fxItem(e,"fx-chair"); await sleep(1250);
  },
  "프라이팬": async e=>{
    showFx(); document.body.classList.add("fx-screen-shake"); fxItem(e,"fx-pan"); await sleep(1150); document.body.classList.remove("fx-screen-shake");
  },
  "쓰레기통": async e=>{
    showFx(); fxItem(e,"fx-bin");
    for(let i=0;i<8;i++){ const x=fxItem(["🔩","⚙️","🔧"][i%3],"fx-mini"); x.style.left=`${15+Math.random()*70}%`; x.style.top=`${15+Math.random()*70}%`; x.style.animation="heartUp .9s ease-out forwards"; }
    await sleep(1150);
  },
  "리모컨": async e=>{
    showFx(); fxItem(e,"fx-remote"); await sleep(450); machine.classList.add("fx-machine-off"); await sleep(650); machine.classList.remove("fx-machine-off"); await sleep(250);
  },
  "쇼핑카트": async e=>{
    await baseImpact(300); fxItem(e,"fx-cart"); await sleep(1100);
  },
  "태양": async e=>{
    showFx(); document.body.classList.add("fx-hot"); machine.classList.add("fx-machine-melt");
    const dark=document.createElement("div"); dark.className="fx-dark"; legendFx.appendChild(dark);
    await sleep(550); fxItem(e,"fx-sun fx-big"); await sleep(1450);
  },
  "소": async e=>{
    await baseImpact(520); machine.classList.add("fx-machine-wide"); fxItem(e,"fx-cow"); await sleep(1250);
  },
  "닭": async e=>{
    showFx(); addFeathers(18); await sleep(350); fxItem(e,"fx-chicken"); await sleep(1150);
  },
  "마법사": async e=>{
    showFx(); const m=document.createElement("div"); m.className="fx-magic"; legendFx.appendChild(m); addStars(18); await sleep(450); fxItem(e,"fx-wizard"); await sleep(1250);
  },
  "고양이": async e=>{
    showFx(); await sleep(650); fxItem(e,"fx-cat"); await sleep(1250);
  },
  "강아지": async e=>{
    await baseImpact(250); fxItem(e,"fx-dog"); await sleep(1250);
  },
  "돼지": async e=>{
    showFx(); machine.classList.add("fx-machine-squash"); fxItem(e,"fx-pig"); await sleep(1200);
  },
  "카피바라": async e=>{
    showFx(); machine.classList.add("fx-machine-shake"); await sleep(500); machine.classList.remove("fx-machine-shake"); fxItem(e,"fx-capybara"); await sleep(1450);
  },
  "펭귄": async e=>{
    showFx(); machine.classList.add("fx-machine-freeze"); legendFx.innerHTML+='<div class="fx-ice"></div>'; await sleep(400); fxItem(e,"fx-penguin"); await sleep(1250);
  },
  "기린": async e=>{
    showFx(); machine.classList.add("fx-machine-stretch"); fxItem(e,"fx-giraffe fx-big"); await sleep(1350);
  },
  "고릴라": async e=>{
    await baseImpact(500); legendFx.innerHTML+='<div class="fx-crack"></div>'; fxItem(e,"fx-gorilla fx-big"); await sleep(1300);
  },
  "문어": async e=>{
    showFx(); fxItem(e,"fx-octopus");
    ["🐙","🐙","🐙"].forEach((x,i)=>{ const a=fxItem(x,"fx-mini"); a.style.left=`${20+i*30}%`; a.style.top=`${20+(i%2)*55}%`; a.style.opacity=".55";});
    await sleep(1250);
  },
  "금붕어": async e=>{
    showFx(); legendFx.innerHTML+='<div class="fx-water"></div>'; await sleep(500); fxItem(e,"fx-fish"); await sleep(1250);
  },
  "감자": async e=>{
    showFx(); const d=document.createElement("div"); d.className="fx-dark"; legendFx.appendChild(d);
    const g=document.createElement("div"); g.className="fx-glow"; legendFx.appendChild(g);
    await sleep(500); fxItem(e,"fx-potato"); await sleep(1450);
  },
  "바나나": async e=>{
    showFx(); fxItem(e,"fx-banana"); await sleep(550); machine.classList.add("fx-machine-tilt"); await sleep(900);
  },
  "수박": async e=>{
    await baseImpact(300); fxItem(e,"fx-watermelon"); await sleep(1200);
  },
  "계란": async e=>{
    showFx(); machine.classList.add("fx-machine-blackout"); await sleep(350); machine.classList.remove("fx-machine-blackout"); fxItem(e,"fx-egg"); await sleep(1500);
  },
  "라면": async e=>{
    showFx(); for(let i=0;i<6;i++){ const l=document.createElement("div"); l.className="fx-line"; l.style.left=`${18+i*10}%`; l.style.top=`${55+i*2}%`; l.style.width="130px"; l.style.height="5px"; l.style.background="#f2d169"; l.style.transform=`rotate(${75+i*8}deg)`; legendFx.appendChild(l);}
    fxItem(e,"fx-noodle"); await sleep(1350);
  },
  "피자": async e=>{
    showFx(); document.body.classList.add("fx-hot"); machine.classList.add("fx-machine-glow"); fxItem(e,"fx-pizza"); await sleep(1200);
  },
  "치킨": async e=>{
    showFx(); addSmoke(10); fxItem(e,"fx-chickenfood"); await sleep(1250);
  },
  "자전거": async e=>{
    await baseImpact(350); fxItem(e,"fx-bike"); await sleep(1200);
  },
  "오토바이": async e=>{
    await baseImpact(400); legendFx.innerHTML+='<div class="fx-crack"></div>'; fxItem(e,"fx-motorcycle"); await sleep(1050);
  },
  "경차": async e=>{
    showFx(); machine.classList.add("fx-machine-wide"); await sleep(300); fxItem(e,"fx-car"); await sleep(1250);
  },
  "스포츠카": async e=>{
    showFx(); const ray=document.createElement("div"); ray.className="fx-ray"; legendFx.appendChild(ray); await sleep(300); fxItem(e,"fx-sportscar"); await sleep(1000);
  },
  "버스": async e=>{
    await baseImpact(350); const crack=document.createElement("div"); crack.className="fx-crack"; legendFx.appendChild(crack); fxItem(e,"fx-bus fx-big"); await sleep(1300);
  },
  "기차": async e=>{
    await baseImpact(400); fxItem(e,"fx-train fx-big"); await sleep(1500);
  },
  "헬리콥터": async e=>{
    showFx(); machine.classList.add("fx-machine-lift"); fxItem(e,"fx-heli"); await sleep(1350);
  },
  "로켓": async e=>{
    showFx(); addSmoke(12); await baseImpact(500); legendFx.innerHTML+='<div class="fx-crack"></div>'; fxItem(e,"fx-rocket"); await sleep(1400);
  },
  "신호등": async e=>{
    showFx(); machine.classList.add("fx-machine-glow"); fxItem(e,"fx-light"); await sleep(1450);
  },
  "맨홀 뚜껑": async e=>{
    await baseImpact(500); fxItem(e,"fx-manhole"); await sleep(1100); machine.classList.add("fx-machine-collapse"); await sleep(300);
  },
  "공사장 콘": async e=>{
    showFx(); for(let i=0;i<5;i++){ const c=fxItem("🚧","fx-mini fx-cone"); c.style.left=`${18+i*16}%`; c.style.top=`${30+(i%2)*38}%`; c.style.animationDelay=`${i*.08}s`; } await sleep(1300);
  },
  "가로등": async e=>{
    showFx(); machine.classList.add("fx-machine-stretch"); fxItem(e,"fx-lamp fx-big"); await sleep(1300);
  },
  "돌멩이": async e=>{
    await baseImpact(950); addStars(16); await sleep(450); fxItem(e,"fx-stone"); await sleep(1150);
  },
  "선인장": async e=>{
    showFx(); for(let i=0;i<8;i++){ const l=document.createElement("div"); l.className="fx-line"; l.style.left="50%";l.style.top="50%";l.style.width="120px";l.style.height="4px";l.style.background="#69b36b";l.style.transform=`rotate(${i*45}deg)`;legendFx.appendChild(l);}
    fxItem(e,"fx-cactus"); await sleep(1250);
  },
  "해바라기": async e=>{
    showFx(); document.body.classList.add("fx-hot"); fxItem(e,"fx-flower"); await sleep(1300);
  },
  "야자수": async e=>{
    showFx(); machine.classList.add("fx-machine-stretch"); fxItem(e,"fx-palm fx-big"); await sleep(1350);
  },
  "무지개": async e=>{
    showFx(); const r=document.createElement("div"); r.className="fx-rainbow"; legendFx.appendChild(r); await sleep(500); fxItem(e,"fx-big"); await sleep(1000);
  },
  "금괴": async e=>{
    showFx(); fxItem(e,"fx-gold"); await sleep(650); machine.classList.add("fx-machine-collapse"); await sleep(800);
  },
  "왕관": async e=>{
    showFx(); machine.classList.add("fx-machine-squash"); fxItem(e,"fx-crown"); await sleep(1350);
  },
  "다이아몬드": async e=>{
    showFx(); addStars(24); fxItem(e,"fx-diamond"); await sleep(1350);
  },
  "공룡": async e=>{
    await baseImpact(520); legendFx.innerHTML+='<div class="fx-crack"></div>'; machine.classList.add("fx-machine-squash"); fxItem(e,"fx-dino fx-huge"); await sleep(1450);
  },
  "유령": async e=>{
    showFx(); fxItem(e,"fx-ghost"); await sleep(1300);
  },
  "UFO": async e=>{
    showFx(); document.body.classList.add("fx-space"); const ray=document.createElement("div"); ray.className="fx-ray"; legendFx.appendChild(ray); machine.classList.add("fx-machine-lift"); await sleep(450); fxItem(e,"fx-ufo"); await sleep(1300);
  },
  "작은 섬": async e=>{
    showFx(); legendFx.innerHTML+='<div class="fx-water"></div>'; machine.classList.add("fx-machine-lift"); await sleep(450); fxItem(e,"fx-island fx-big"); await sleep(1350);
  },
  "달": async e=>{
    showFx(); document.body.classList.add("fx-night"); machine.classList.add("fx-machine-blackout"); await sleep(450); fxItem(e,"fx-moon fx-huge"); await sleep(1450);
  },
  "지구": async e=>{
    showFx(); document.body.classList.add("fx-space"); fxItem(e,"fx-earth fx-huge"); await sleep(700); machine.classList.add("fx-machine-slide-left"); await sleep(950);
  },
  "무선 이어폰": async e=>{
    showFx();
    const a=fxItem("🎧","fx-earbuds"); addStars(12);
    const b=fxItem("•","fx-mini"); b.style.left="35%"; b.style.top="45%";
    const c=fxItem("•","fx-mini"); c.style.left="65%"; c.style.top="45%";
    await sleep(1350);
  },
  "애인": async e=>{
    showFx(); addHearts(16); fxItem(e,"fx-lover"); await sleep(1400);
  },
  "자판기": async e=>{
    showFx(); await baseImpact(350); const mini=fxItem(e,"fx-vending"); await sleep(800);
    const tiny=fxItem("🥤","fx-mini"); tiny.style.left="50%"; tiny.style.top="70%"; tiny.style.animation="vendingMini .7s ease both"; await sleep(700);
  }
};


function addDebris(n=10, originTop=25){
  for(let i=0;i<n;i++){
    const d=document.createElement("div");
    d.className="fx-debris";
    d.style.left=`${22+Math.random()*56}%`;
    d.style.top=`${originTop+Math.random()*30}%`;
    d.style.setProperty("--dx",`${-180+Math.random()*360}px`);
    d.style.setProperty("--dy",`${-190+Math.random()*300}px`);
    d.style.setProperty("--rot",`${-500+Math.random()*1000}deg`);
    legendFx.appendChild(d);
  }
}
function addMetalPieces(n=4){
  for(let i=0;i<n;i++){
    const p=document.createElement("div");
    p.className="fx-metal-piece fx-debris";
    p.style.left=`${18+Math.random()*60}%`;
    p.style.top=`${8+Math.random()*55}%`;
    p.style.setProperty("--dx",`${-220+Math.random()*440}px`);
    p.style.setProperty("--dy",`${-260+Math.random()*340}px`);
    p.style.setProperty("--rot",`${-650+Math.random()*1300}deg`);
    legendFx.appendChild(p);
  }
}

// v6: slower, heavier benchmark legendary sequences.
// No narration/text: anticipation -> accident -> reveal -> aftermath.
Object.assign(legendaryEffects, {
  "태양": async e=>{
    showFx();
    document.body.classList.add("fx-hot");
    machine.classList.add("fx-machine-glow");

    // 1. Something is heating up.
    await sleep(700);
    const glow=document.createElement("div");
    glow.className="fx-glow";
    glow.style.top="62%";
    legendFx.appendChild(glow);
    await sleep(850);

    // 2. Heat becomes unbearable, then the machine slowly melts.
    document.body.classList.add("fx-screen-shake");
    machine.classList.add("fx-machine-melt");
    for(let i=0;i<9;i++){
      const drip=document.createElement("div");
      drip.className="fx-heat-drip";
      drip.style.left=`${10+i*10}%`;
      drip.style.animationDelay=`${i*.09}s`;
      legendFx.appendChild(drip);
    }
    await sleep(1450);
    document.body.classList.remove("fx-screen-shake");

    // 3. The sun rises out of the ruined machine.
    const sun=fxItem(e,"fx-sun-v6");
    await sleep(1800);

    // 4. Let the destruction sit on screen.
    await sleep(850);
  },

  "로켓": async e=>{
    showFx();

    // 1. Quiet mechanical vibration.
    machine.classList.add("fx-machine-rumble-slow");
    await sleep(850);

    // 2. Smoke starts leaking out.
    addSmoke(7);
    await sleep(850);

    // 3. Engine ignition builds.
    const fire=document.createElement("div");
    fire.className="fx-rocket-fire";
    legendFx.appendChild(fire);
    machine.classList.remove("fx-machine-rumble-slow");
    machine.classList.add("fx-machine-shake");
    document.body.classList.add("fx-screen-shake");
    await sleep(1050);

    // 4. Tiny pause before launch.
    machine.classList.remove("fx-machine-shake");
    document.body.classList.remove("fx-screen-shake");
    await sleep(380);

    // 5. Roof blows open and rocket exits the screen.
    const roof=document.createElement("div");
    roof.className="fx-roof-piece";
    legendFx.appendChild(roof);
    const rocket=fxItem(e,"fx-rocket-v6");
    addSmoke(14);
    document.body.classList.add("fx-screen-shake");
    await sleep(1250);
    document.body.classList.remove("fx-screen-shake");

    // 6. Smoke remains after it is gone.
    addSmoke(8);
    await sleep(1000);
  },

  "소": async e=>{
    showFx();

    // 1. Weight shifting inside.
    machine.classList.add("fx-machine-cow-bump");
    await sleep(1100);

    // 2. Hooves / face tease the reveal.
    const peek=fxItem("🐄","fx-cow-peek");
    await sleep(850);

    // 3. Machine walls are forced apart.
    machine.classList.remove("fx-machine-cow-bump");
    machine.classList.add("fx-machine-wide-v6");
    document.body.classList.add("fx-screen-shake");
    const crack=document.createElement("div");
    crack.className="fx-crack fx-crack-wide";
    legendFx.appendChild(crack);
    await sleep(850);

    // 4. Cow pushes all the way out.
    peek.remove();
    fxItem(e,"fx-cow-v6 fx-big");
    await sleep(1450);
    document.body.classList.remove("fx-screen-shake");

    // 5. Cow just stands there after all that.
    await sleep(850);
  },

  "돌멩이": async e=>{
    showFx();

    // Intentionally absurd buildup for the least impressive object.
    machine.classList.add("fx-machine-rumble-slow");
    await sleep(850);

    const ring1=document.createElement("div");
    ring1.className="fx-ring fx-ring-v6";
    legendFx.appendChild(ring1);
    await sleep(700);

    document.body.classList.add("fx-screen-shake");
    machine.classList.remove("fx-machine-rumble-slow");
    machine.classList.add("fx-machine-shake");
    addStars(30);
    await sleep(1000);

    const flash=document.createElement("div");
    flash.className="fx-white-flash";
    legendFx.appendChild(flash);
    await sleep(600);

    // Sudden complete calm.
    document.body.classList.remove("fx-screen-shake");
    machine.classList.remove("fx-machine-shake");
    legendFx.innerHTML="";
    await sleep(650);

    // ...just a stone.
    fxItem(e,"fx-stone-v6");
    await sleep(1800);
  },

  "지구": async e=>{
    showFx();
    document.body.classList.add("fx-space");

    // 1. Space slowly takes over.
    const dark=document.createElement("div");
    dark.className="fx-space-dark";
    legendFx.appendChild(dark);
    await sleep(900);
    addStars(26);
    await sleep(650);

    // 2. A tiny Earth appears.
    const earth=fxItem(e,"fx-earth-v6");
    await sleep(900);

    // 3. It becomes impossibly large.
    earth.classList.add("fx-earth-grow-v6");
    machine.classList.add("fx-machine-pushed-v6");
    document.body.classList.add("fx-screen-shake");
    await sleep(1600);
    document.body.classList.remove("fx-screen-shake");

    // 4. Hold the huge planet for readability.
    await sleep(900);
  }
});

// v7 final benchmark: slower buildup, bigger destruction, longer aftermath.
Object.assign(legendaryEffects, {
  "태양": async e=>{
    showFx();
    document.body.classList.add("fx-hot");
    machine.classList.add("fx-machine-glow");
    await sleep(850);

    const glow=document.createElement("div");
    glow.className="fx-glow"; glow.style.top="60%"; legendFx.appendChild(glow);
    await sleep(900);

    // Heat leaks out before the body gives up.
    for(let i=0;i<13;i++){
      const drip=document.createElement("div");
      drip.className="fx-heat-drip";
      drip.style.left=`${4+i*7.5}%`;
      drip.style.animationDelay=`${i*.07}s`;
      legendFx.appendChild(drip);
    }
    document.body.classList.add("fx-mega-shake");
    machine.classList.add("fx-sun-collapse");
    await sleep(1450);

    // Machine is now basically a puddle.
    document.body.classList.remove("fx-mega-shake");
    const scorch=document.createElement("div"); scorch.className="fx-scorch"; legendFx.appendChild(scorch);
    await sleep(450);

    fxItem(e,"fx-sun-v7");
    await sleep(1050);
    document.body.classList.add("fx-whiteout");
    await sleep(700);
    document.body.classList.remove("fx-whiteout");
    await sleep(950);
  },

  "로켓": async e=>{
    showFx();
    machine.classList.add("fx-machine-rumble-slow");
    await sleep(900);

    addSmoke(8);
    await sleep(850);

    const fire=document.createElement("div");
    fire.className="fx-rocket-fire";
    fire.style.height="150px";
    legendFx.appendChild(fire);
    machine.classList.remove("fx-machine-rumble-slow");
    machine.classList.add("fx-rocket-recoil");
    document.body.classList.add("fx-mega-shake");
    await sleep(1200);

    // Suspicious calm before launch.
    machine.classList.remove("fx-rocket-recoil");
    document.body.classList.remove("fx-mega-shake");
    await sleep(500);

    // Roof and body fragments are actually thrown away.
    addMetalPieces(5);
    addDebris(12,8);
    const rocket=fxItem(e,"fx-rocket-v7");
    document.body.classList.add("fx-mega-shake");
    addSmoke(16);
    await sleep(1500);
    document.body.classList.remove("fx-mega-shake");

    // Aftermath: empty smoke and debris.
    addSmoke(10);
    await sleep(1200);
  },

  "소": async e=>{
    showFx();
    machine.classList.add("fx-machine-cow-bump");
    await sleep(1200);

    // First just a face.
    const peek=fxItem("🐄","fx-cow-peek");
    peek.style.fontSize="70px";
    await sleep(900);

    // Then the whole machine starts spreading apart.
    machine.classList.remove("fx-machine-cow-bump");
    machine.classList.add("fx-cow-crush");
    document.body.classList.add("fx-mega-shake");
    addDebris(7,30);
    await sleep(900);

    peek.remove();
    addMetalPieces(3);
    fxItem(e,"fx-cow-v7");
    await sleep(1550);
    document.body.classList.remove("fx-mega-shake");

    // Hold the ridiculous result.
    await sleep(1050);
  },

  "돌멩이": async e=>{
    showFx();

    // Deliberately the most ridiculous buildup.
    machine.classList.add("fx-machine-rumble-slow");
    await sleep(900);

    for(let i=0;i<3;i++){
      const ring=document.createElement("div");
      ring.className="fx-ring fx-ring-v6";
      ring.style.animationDelay=`${i*.16}s`;
      legendFx.appendChild(ring);
    }
    await sleep(850);

    document.body.classList.add("fx-mega-shake");
    machine.classList.remove("fx-machine-rumble-slow");
    machine.classList.add("fx-rocket-recoil");
    addStars(38);
    addDebris(9,25);
    await sleep(1150);

    document.body.classList.add("fx-whiteout");
    await sleep(650);
    document.body.classList.remove("fx-whiteout");

    // Everything suddenly stops.
    document.body.classList.remove("fx-mega-shake");
    machine.classList.remove("fx-rocket-recoil");
    legendFx.innerHTML="";
    await sleep(900);

    fxItem(e,"fx-stone-v7");
    await sleep(2200);
  },

  "지구": async e=>{
    showFx();
    document.body.classList.add("fx-space");

    const dark=document.createElement("div");
    dark.className="fx-space-dark";
    legendFx.appendChild(dark);
    await sleep(950);

    addStars(34);
    await sleep(750);

    const earth=fxItem(e,"fx-earth-v7");
    await sleep(900);

    // Earth grows until the vending machine is simply pushed out of existence.
    machine.classList.add("fx-earth-eject");
    document.body.classList.add("fx-mega-shake");
    await sleep(1850);
    document.body.classList.remove("fx-mega-shake");

    // Hold on the enormous Earth.
    await sleep(1150);
  }
});

// v8: revised Earth + seven more fully staged legendary sequences.
Object.assign(legendaryEffects, {
  "지구": async e=>{
    showFx();
    document.body.classList.add("fx-space");
    const dark=document.createElement("div"); dark.className="fx-space-dark"; legendFx.appendChild(dark);
    await sleep(900);
    addStars(30);
    await sleep(650);

    const earth=fxItem(e,"fx-earth-v8");
    await sleep(700);

    // The Earth only grows to a readable size. The machine takes the punishment.
    machine.classList.add("fx-earth-pressure");
    document.body.classList.add("fx-screen-shake");
    await sleep(1150);
    document.body.classList.remove("fx-screen-shake");

    await sleep(350);
    machine.classList.remove("fx-earth-pressure");
    machine.classList.add("fx-earth-fling");
    addDebris(8,25);
    document.body.classList.add("fx-mega-shake");
    await sleep(900);
    document.body.classList.remove("fx-mega-shake");

    // Earth remains calmly floating after ejecting the machine.
    await sleep(1250);
  },

  "고양이": async e=>{
    showFx();
    // Nothing happens for suspiciously long.
    await sleep(1050);
    machine.classList.add("fx-machine-rumble-slow");
    await sleep(500);
    machine.classList.remove("fx-machine-rumble-slow");
    await sleep(450);

    // It was on top the whole time.
    fxItem(e,"fx-cat-v8");
    await sleep(1800);
  },

  "펭귄": async e=>{
    showFx();
    machine.classList.add("fx-machine-freeze");
    const ice=document.createElement("div"); ice.className="fx-ice"; legendFx.appendChild(ice);
    await sleep(900);
    const frost=document.createElement("div"); frost.className="fx-frost-crack"; legendFx.appendChild(frost);
    await sleep(650);

    document.body.classList.add("fx-screen-shake");
    addDebris(10,30);
    await sleep(450);
    document.body.classList.remove("fx-screen-shake");
    fxItem(e,"fx-penguin-v8");
    await sleep(1600);
  },

  "기린": async e=>{
    showFx();
    machine.classList.add("fx-machine-rumble-slow");
    await sleep(700);

    // Neck keeps going upward until the roof cannot cope.
    fxItem(e,"fx-giraffe-v8");
    await sleep(850);
    addMetalPieces(4);
    machine.classList.add("fx-machine-stretch");
    document.body.classList.add("fx-screen-shake");
    await sleep(950);
    document.body.classList.remove("fx-screen-shake");
    await sleep(1050);
  },

  "고릴라": async e=>{
    showFx();
    machine.classList.add("fx-machine-cow-bump");
    await sleep(900);
    document.body.classList.add("fx-mega-shake");
    await sleep(700);

    const door=document.createElement("div"); door.className="fx-door-piece"; legendFx.appendChild(door);
    addMetalPieces(5); addDebris(12,20);
    machine.classList.remove("fx-machine-cow-bump");
    machine.classList.add("fx-cow-crush");
    fxItem(e,"fx-gorilla-v8");
    await sleep(1500);
    document.body.classList.remove("fx-mega-shake");
    await sleep(950);
  },

  "유령": async e=>{
    showFx();
    machine.classList.add("fx-machine-blackout");
    await sleep(900);

    const portal=document.createElement("div"); portal.className="fx-portal"; legendFx.appendChild(portal);
    await sleep(700);

    // No damage at all — it simply ignores the vending machine.
    fxItem(e,"fx-ghost-v8");
    await sleep(1650);
    machine.classList.remove("fx-machine-blackout");
    await sleep(650);
  },

  "UFO": async e=>{
    showFx();
    document.body.classList.add("fx-space");
    await sleep(700);

    const beam=document.createElement("div"); beam.className="fx-beam-v8"; legendFx.appendChild(beam);
    await sleep(650);

    machine.classList.add("fx-machine-lift");
    document.body.classList.add("fx-screen-shake");
    await sleep(1150);
    document.body.classList.remove("fx-screen-shake");

    fxItem(e,"fx-ufo-v8");
    await sleep(900);

    // The machine gets tugged even higher before being released.
    machine.style.transform="translateY(-130px) rotate(5deg)";
    await sleep(700);
    await sleep(650);
  },

  "자판기": async e=>{
    showFx();
    machine.classList.add("fx-machine-rumble-slow");
    await sleep(850);
    machine.classList.remove("fx-machine-rumble-slow");

    const mini=fxItem(e,"fx-vending-v8");
    await sleep(900);

    // The tiny vending machine activates itself.
    const btn=document.createElement("div"); btn.className="fx-mini-button"; legendFx.appendChild(btn);
    await sleep(650);
    addStars(10);

    // And then it produces an even tinier vending machine.
    const tiny=fxItem("🥤","fx-mini");
    tiny.style.left="50%"; tiny.style.top="72%";
    tiny.style.animation="v8MiniMachine .8s ease both";
    await sleep(1350);
  }
});

async function runLegendaryEffect(name, emoji){
  clearMachineFx();
  showFx();
  const fn = legendaryEffects[name];
  if(fn) await fn(emoji);
  else { await baseImpact(400); fxItem(emoji,"fx-big"); await sleep(1200); }
}

async function runStandardEffect(rarity){
  display.classList.add(`rarity-${rarity.key}`);

  if(rarity.key === "common"){
    machine.classList.add("shake");
    await sleep(420);
    machine.classList.remove("shake");
    return;
  }

  if(rarity.key === "normal"){
    machine.classList.add("fx-machine-rumble-slow");
    await sleep(520);
    machine.classList.remove("fx-machine-rumble-slow");
    await sleep(120);
    return;
  }

  if(rarity.key === "rare"){
    showFx();
    machine.classList.add("rare", "fx-machine-rumble-slow");
    addStars(16);
    await sleep(500);
    machine.classList.remove("fx-machine-rumble-slow");
    document.body.classList.add("fx-screen-shake");
    await sleep(320);
    document.body.classList.remove("fx-screen-shake");
    await sleep(260);
  }
}

async function runBasicDrawEffect(){
  machine.classList.add("shake");
  await sleep(430);
  machine.classList.remove("shake");
  await sleep(120);
}

async function draw(forcedName = null){
  if(drawButton.disabled) return;

  drawButton.disabled = true;
  clearMachineFx();

  resultCard.classList.add("hidden");
  mystery.classList.remove("hidden");
  newBadge.classList.add("hidden");
  chuteItem.classList.remove("drop");
  chuteItem.textContent = "";

  let itemIndex;

  if(forcedName){
    itemIndex = items.findIndex(item => item.name === forcedName);
  } else {
    // "뭐든지"는 일반 뽑기에서는 절대 나오지 않는 숨겨진 아이템.
    const normalIndexes = items
      .map((item, index) => ({ item, index }))
      .filter(({ item }) => item.name !== "뭐든지")
      .map(({ index }) => index);

    itemIndex = normalIndexes[Math.floor(Math.random() * normalIndexes.length)];
  }

  if(itemIndex < 0){
    drawButton.disabled = false;
    return;
  }

  const item = items[itemIndex];
  const { name, emoji } = item;
  const key = keyFor(itemIndex);
  const previousCount = Number(collection[key] || 0);
  const isNew = previousCount === 0;

  try {
    if(specialItems.has(name) && legendaryEffects[name]){
      await runLegendaryEffect(name, emoji);
    } else {
      await runBasicDrawEffect();
    }

    clearMachineFx();

    chuteItem.textContent = emoji;
    void chuteItem.offsetWidth;
    chuteItem.classList.add("drop");
    await sleep(520);

    mystery.classList.add("hidden");
    resultCard.classList.remove("hidden");
    resultEmoji.className = "result-emoji motion-wobble";
    resultEmoji.textContent = emoji;

    rarityBadge.classList.add("hidden");
    resultCard.dataset.itemIndex = String(itemIndex);
    resultName.textContent = itemDisplayName(item);

    const specialLine = specialDisplayLine(name);
    resultLine.textContent = specialLine || "";
    resultLine.classList.toggle("hidden", !specialLine);
    newBadge.classList.toggle("hidden", !isNew);

    collection[key] = previousCount + 1;
    save();
  } catch(error){
    console.error("Vending draw failed.", error);
    clearMachineFx();
  } finally {
    drawButton.disabled = false;
  }
}


function isGoldItem(count) {
  return Number(count || 0) >= 10;
}

function getGoldCount() {
  return items.reduce((total, item) => {
    return total + (isGoldItem(collection[item.name]) ? 1 : 0);
  }, 0);
}

function renderCollection(){
  grid.innerHTML = "";

  for(let i=0;i<items.length;i++){
    const item = items[i];
    const owned = collection[keyFor(i)] || 0;
    const card = document.createElement("div");
    card.className = `collection-item${owned ? "" : " locked"}${owned >= 100 ? " prism" : owned >= 10 ? " gold" : ""}`;
    card.innerHTML = owned
      ? `<div><div class="emoji">${item.emoji}</div><div class="name">${itemDisplayName(item)}<br><span class="owned-count">×${owned}</span></div></div>`
      : `<div><div class="emoji">❓</div><div class="name">???</div></div>`;
    grid.appendChild(card);
  }

  summary.innerHTML = `<div style="grid-column:1/-1"><strong>${uiText[currentLanguage].discovered}</strong><br>${totalCollected()} / ${totalPossible()}</div>`;
}

drawButton.addEventListener("click", () => draw());

const machineLabel = document.querySelector(".machine-label");
if(machineLabel){
  machineLabel.setAttribute("role", "button");
  machineLabel.setAttribute("tabindex", "0");
  machineLabel.setAttribute("aria-label", uiText[currentLanguage].secretAria);
  machineLabel.addEventListener("click", () => draw("뭐든지"));
  machineLabel.addEventListener("keydown", event => {
    if(event.key === "Enter" || event.key === " "){
      event.preventDefault();
      draw("뭐든지");
    }
  });
}
document.getElementById("collectionButton").addEventListener("click", ()=>{
  renderCollection();
  dialog.showModal();
});
document.getElementById("closeCollection").addEventListener("click", ()=>dialog.close());
document.getElementById("resetButton").addEventListener("click", ()=>{
  if(confirm(uiText[currentLanguage].resetConfirm)){
    collection={}; save(); renderCollection();
  }
});

save();
installLanguageControls();
applyLanguage();


(function installGoldCollectionStyles() {
  if (document.getElementById("goldCollectionStyles")) return;
  const style = document.createElement("style");
  style.id = "goldCollectionStyles";
  style.textContent = `
    .collection-item.gold {
      border-color: #d5a928 !important;
      background:
        radial-gradient(circle at 30% 15%, rgba(255,255,255,.52), transparent 22%),
        linear-gradient(145deg, #fff1a8, #e3b83d 48%, #b98412) !important;
      box-shadow: 0 0 0 2px rgba(255,215,90,.22), 0 8px 20px rgba(138,96,0,.24);
      position: relative;
      overflow: hidden;
    }
    .collection-item.gold::after {
      content: "GOLD";
      position: absolute;
      top: 5px;
      right: 6px;
      font-size: 6px;
      font-weight: 900;
      letter-spacing: .04em;
      color: #6f4a00;
      background: rgba(255,255,255,.62);
      border: 1px solid rgba(111,74,0,.22);
      border-radius: 999px;
      padding: 1px 4px;
    }
    .collection-item.gold .emoji {
      filter: drop-shadow(0 2px 5px rgba(105,69,0,.25));
    }
    .gold-label {
      margin-left: 4px;
      font-size: .72em;
      font-weight: 900;
    }
    .collection-item.prism {
      border-color: rgba(255,255,255,.95) !important;
      background:
        radial-gradient(circle at 18% 18%, rgba(255,255,255,.95), transparent 20%),
        linear-gradient(135deg,
          rgba(255,190,220,.92),
          rgba(190,225,255,.95) 28%,
          rgba(215,255,225,.95) 52%,
          rgba(255,238,180,.95) 74%,
          rgba(220,195,255,.95)
        ) !important;
      box-shadow:
        0 0 0 2px rgba(255,255,255,.58),
        0 8px 22px rgba(95,110,160,.28);
      position: relative;
      overflow: hidden;
    }
    .collection-item.prism::before {
      content: "";
      position: absolute;
      inset: -45%;
      background: linear-gradient(
        110deg,
        transparent 38%,
        rgba(255,255,255,.72) 48%,
        transparent 58%
      );
      transform: translateX(-45%) rotate(8deg);
      animation: prismShine 3.2s ease-in-out infinite;
      pointer-events: none;
    }
    .collection-item.prism::after {
      content: "PRISM";
      position: absolute;
      top: 5px;
      right: 6px;
      font-size: 6px;
      font-weight: 900;
      letter-spacing: .04em;
      color: #4c4f72;
      background: rgba(255,255,255,.68);
      border: 1px solid rgba(76,79,114,.18);
      border-radius: 999px;
      padding: 1px 4px;
    }
    .collection-item.prism .emoji {
      filter: drop-shadow(0 2px 6px rgba(70,75,120,.24));
      position: relative;
      z-index: 1;
    }
    @keyframes prismShine {
      0%, 18% { transform: translateX(-70%) rotate(8deg); opacity: 0; }
      35% { opacity: 1; }
      55%, 100% { transform: translateX(70%) rotate(8deg); opacity: 0; }
    }
    @keyframes goldUnlockFlash {
      0% { transform: scale(.9); opacity: 0; }
      35% { transform: scale(1.08); opacity: 1; }
      100% { transform: scale(1); opacity: 1; }
    }
    .gold-unlock {
      animation: goldUnlockFlash .55s ease-out;
    }
  `;
  document.head.appendChild(style);
})();



(function installLanguageAndTestStyles() {
  if(document.getElementById("languageAndTestStyles")) return;
  const style = document.createElement("style");
  style.id = "languageAndTestStyles";
  style.textContent = `
    .language-controls {
      position: absolute;
      top: max(8px, env(safe-area-inset-top));
      right: 12px;
      z-index: 80;
      display: flex;
      align-items: center;
      gap: 4px;
      font-size: 10px;
      font-weight: 900;
      color: rgba(255,255,255,.48);
    }
    .language-button,
    .prism-test-button {
      border: 0;
      background: transparent;
      color: rgba(255,255,255,.5);
      font-weight: 900;
      cursor: pointer;
      padding: 4px 3px;
    }
    .language-button.active {
      color: #fff;
      text-decoration: underline;
      text-underline-offset: 3px;
    }

    .english-title-main {
      font-size: 34px !important;
      letter-spacing: -1.5px;
      line-height: .88 !important;
      white-space: nowrap;
    }
    @media(max-width:520px){
      .language-controls {
        top: max(5px, env(safe-area-inset-top));
        right: 8px;
        font-size: 9px;
        gap: 3px;
      }
      .english-title-main {
        font-size: 30px !important;
        -webkit-text-stroke: 3px #111 !important;
        letter-spacing: -1px !important;
      }
      html[lang="en"] .title-wrap h1 span {
        font-size: 13px !important;
        line-height: 1 !important;
        white-space: nowrap;
      }
      html[lang="en"] .draw-button {
        font-size: 20px !important;
        letter-spacing: -1px !important;
        white-space: nowrap;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        text-align: center !important;
      }

      html[lang="en"] .draw-button span {
        display: block !important;
        width: 100% !important;
        text-align: center !important;
        transform: translateX(-2px);
      }

      /* English collection names are longer, so give the grid a little
         more usable room on the right without changing Korean layout. */
      html[lang="en"] .collection-grid {
        padding-left: 8px !important;
        padding-right: 2px !important;
        margin-right: -6px !important;
      }

      html[lang="en"] .collection-item {
        min-width: 0 !important;
      }

      html[lang="en"] .collection-item .item-name,
      html[lang="en"] .collection-item strong {
        font-size: 11px !important;
        line-height: 1.08 !important;
        overflow-wrap: anywhere;
      }
    }
  `;
  document.head.appendChild(style);
})();

(function installSecretAnythingLabelStyles() {
  if (document.getElementById("secretAnythingLabelStyles")) return;
  const style = document.createElement("style");
  style.id = "secretAnythingLabelStyles";
  style.textContent = `
    .machine-label {
      cursor: pointer;
      user-select: none;
      -webkit-tap-highlight-color: transparent;
    }
    .machine-label:active {
      transform: translateY(1px) scale(.98);
    }
  `;
  document.head.appendChild(style);
})();