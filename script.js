function normalizeName(raw) {
  if (!raw) return "";
  let s = raw.trim().toLowerCase().replace(/\s+/g, " ");

  const map = { "ә":"а","ғ":"г","қ":"к","ң":"н","ө":"о","ұ":"у","ү":"у","һ":"х","і":"и" };
  s = s.replace(/[әғқңөұүһі]/g, ch => map[ch] || ch);

  return s;
}

const messages = {
  "болатик": " ",  // чтобы прошло проверку messages[key]
  "амины": "этот бро действительно угадал секретное слово номер 3, ты реально крут черт тебя за ногу, дракон тебя за ношку и асхат за ножку",
  "алдияр": "The goat 100%",
  "даша": "Даша, с 8 Марта! 💐\nПусть этой весной у тебя будет много радостных моментов, нежных улыбок и тёплых людей рядом. Сияй ярко!",
  "дина": "Дина, с 8 Марта! 💐\nПусть этой весной у тебя будет много радостных моментов, больше нормальных подруг , нежных улыбок и тёплых людей рядом. Сияй ярко!",
  "асхат": "Асхат, с 8 Марта! 💐\nПусть этой весной у тебя будет много Аян моментов, нежных Аян и Аян людей рядом. Сияй с Аяной ярко!",
  "ернур": "Ернур, он такой добрый, умный, смелый, честный, внимательный, заботливый, ответственный, надёжный, искренний, харизматичный, весёлый, трудолюбивый, целеустремлённый, справедливый, открытый, терпеливый, креативный, талантливый, благородный, щедрый, понимающий, уверенный, спокойный, энергичный, позитивный, сильный, преданный, мудрый, обаятельный и вдохновляющий.",
  "лана": "Лана, с 8 Марта! 💐\nПусть этой весной у тебя больше ничего не ломается и будет много радостных моментов, нежных улыбок и тёплых людей рядом. Сияй ярко!",
  "нурай": "Нурай, с 8 Марта! 🌷\nПусть мечты становятся планами, планы — победами, а каждый день приносит спокойствие и счастье!",
  "леян": "Леян, атраМ 8 с! ✨\nПусть в твоей жизни будет больше красивых событий, вдохновения и уютных моментов!",
  "аяна": "Аяна, с 8 Марта! 💖\nЖелаем улыбок, уверенности и самых добрых сюрпризов. Пусть весна подарит Асхата!",
  "аружан": "Аружан, с 8 Марта! 🌸\nПусть будет много любви, тепла и ярких моментов. Пусть твои цели достигаются легко!",
  "саным": "Саным, с 8 Марта! 🌺\nПусть каждый день будет нежным, как весна, и сильным, как ты. Счастья и вдохновения и меньше поправок в конституцию!",
  "сийлар": "Сийлар, с 8 Марта! 💐\nПусть рядом будут искренние люди, классные идеи и приятные сюрпризы!",
  "анель": "Анель, с 8 Марта! 🌷\nПусть всё, что ты задумала, получается легко. Много улыбок и тепла!",
  "дарья": "Дарья, с 8 Марта! ✨\nПусть будет больше радости, спокойствия и уверенности в себе. Удачи во всём!",
  "айсулу": "Айсулу, с 8 Марта! 🌸\nПусть твоя доброта возвращается вдвойне, а каждый день радует чем-то светлым! Но к сожалению светлее твоей улыбки ничего нет...",
  "аяулым": "Аяулым, с 8 Марта! 💖\nПусть глаза сияют, настроение будет лёгким, а задние парты всегда свободны, также поддержка и забота рядом!",
  "айли": "Айли, с 8 Марта! 🌷\nПусть будет много вдохновения, меньше жен у Болатов и ярких эмоций и спокойной уверенности! ",
  "жансая": "Dear Zhansaya, I congratulate you on this bright spring day✨☄️\n I sincerely wish you to achieve all your goals (get into Nazarbayev University, learn Spanish, transfer to a COOL(я крутой 😎 )department in the art school, подкинуть маленького ребенка похлопать и поймать🧘🏻‍♀️), happiness, and health🌸\n I hope it will be warm this year, but not +40, and we could survive💫🌺. Хомяк, пылесос, Зачем?🐹💨 \n Also wish that your loverboy (me) will close all your gestalts.n\ Most importantly, NEVA EVA doubt yourself and in your decisions, be happy, my deer 🦌.",
  "рахметова мадина": "Madina, we congratulate you with international women's day🌸\n We wish this last school spring to be warmer than all the previous ones. We know you're always locked in and you will achieve all ur goals (whether it's to travel, find ambitious surrounding, visit Australia, then leave this country, pull minji and kill everyone or anything like that)🐶\n No matter where life takes you after graduation, never doubt yourself and never forget how smart and strong you are, you matter. Keep standing out with your beauty and fire fits. You’re LOWKEY niche and goated.",
  "нигина": "Нигина, с 8 Марта! 🌸\nПусть будет много нежности, уважения, любви и вдохновения. Улыбок тебе!",
  "майя": "Майя, с 8 Марта! ✨\nПусть будет больше счастья, приятных и 'дорогих' людей вокруг и крутых возможностей! С тобой даже близкая зима не страшна ",
  "умбетжанова мадина": "Мадина Умбетжанова, с 8 Марта! 🌷\nПусть будут лёгкие дни, сильные победы в дотке и много тепла!",
  "толганай": "Толганай, с 8 Марта! 💖\nПусть мечты сбываются красиво и вовремя. Весеннего настроения! Если тебе что то не понравилось в нашем поздравлений просто скажи tell me why "
};

const mainPage = document.getElementById("mainPage");
const greetPage = document.getElementById("greetPage");
const form = document.getElementById("nameForm");
const input = document.getElementById("nameInput");
const error = document.getElementById("error");
const title = document.getElementById("title");
const messageEl = document.getElementById("message");
const backBtn = document.getElementById("backBtn");
const copyBtn = document.getElementById("copyBtn");
const copied = document.getElementById("copied");
const bolatikImg = document.getElementById("bolatikImg");
const wallpaper = document.getElementById("wallpaper");

function showGreet(nameKey) {
  wallpaper.classList.add("hidden");
  const msg = messages[nameKey];

  if (nameKey === "болатик") {
    title.textContent = "Поздравление 💐";
    messageEl.textContent = "";
    bolatikImg.classList.remove("hidden");

    mainPage.classList.add("hidden");
    greetPage.classList.remove("hidden");
    return;
  }

  bolatikImg.classList.add("hidden");

  title.textContent = "Поздравление 💐";
  messageEl.textContent = msg;

  mainPage.classList.add("hidden");
  greetPage.classList.remove("hidden");
}

function showMain() {
  wallpaper.classList.remove("hidden");
  greetPage.classList.add("hidden");
  mainPage.classList.remove("hidden");
  copied.textContent = "";
  error.textContent = "";
  bolatikImg.classList.add("hidden");
  input.focus();
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  error.textContent = "";

  const key = normalizeName(input.value);

  if (!key) {
    error.textContent = "Введите имя 🙂";
    return;
  }

  if (!messages[key]) {
    error.textContent = "такого шпендика у меня в списках нету, бро.";
    return;
  }

  showGreet(key);
});

backBtn.addEventListener("click", showMain);

copyBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(messageEl.textContent);
    copied.textContent = "Скопировано! 💌";
    setTimeout(() => copied.textContent = "", 1800);
  } catch {
    copied.textContent = "Не получилось скопировать 😅 (попробуй вручную)";
  }
});

input.focus();
