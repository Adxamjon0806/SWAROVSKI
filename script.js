const menuBtn = document.getElementById("menuBtn");
const closeMenuBtn = document.getElementById("closeMenuBtn");
const collectionsBtn = document.getElementById("collectionsBtn");
const searchBtn = document.getElementById("searchBtn");
const nav = document.getElementById("nav");
const SWAROVSKITitle = document.getElementById("SWAROVSKI-title");
const searchSvg = document.getElementById("searchSvg");
const heartSvg = document.getElementById("heartSvg");
const topDiv = document.getElementById("top-div").classList;
const botDiv = document.getElementById("bot-div").classList;
const searchBlock = document.getElementById("searchBlock").classList;
let count = 0;

menuBtn.addEventListener("click", () => {
  const menuClassList = document.getElementById("menu").classList;
  menuClassList.toggle("left-[-375px]");
  menuClassList.toggle("left-0");
  closeMenuBtn.classList.toggle("hidden");
});

closeMenuBtn.addEventListener("click", () => {
  const menuClassList = document.getElementById("menu").classList;
  menuClassList.toggle("left-[-375px]");
  menuClassList.toggle("left-0");
  closeMenuBtn.classList.toggle("hidden");
});

collectionsBtn.addEventListener("click", () => {
  const collections = document.getElementById("collections").classList;
  collections.toggle("hidden");
  collectionsBtn.classList.toggle("rotate-180");
});

searchBtn.addEventListener("click", () => {
  const menu = document.getElementById("menu").classList;
  menu.toggle("md:text-white");
  topDiv.toggle("bg-white");
  botDiv.toggle("bg-white");
  topDiv.toggle("bg-black");
  botDiv.toggle("bg-black");
  nav.classList.toggle("bg-white");
  nav.classList.toggle("from-black/30");
  SWAROVSKITitle.classList.toggle("text-white");
  if (count === 0) {
    searchSvg.setAttribute("fill", "black");
    heartSvg.setAttribute("fill", "black");
    count += 1;
  } else {
    searchSvg.setAttribute("fill", "white");
    heartSvg.setAttribute("fill", "white");
    count -= 1;
  }
  searchBlock.toggle("hidden");
});
