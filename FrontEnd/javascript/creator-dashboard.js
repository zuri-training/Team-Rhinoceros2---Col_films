"use stric";
const creatorMenuIcon = document.querySelector(".creator-menu-icon");
const sideBar = document.querySelector(".side-bar    ");
const settingLink = document.querySelector(".setting");
const hiddenSettings = document.querySelector(".settings");
console.log(settingLink);
creatorMenuIcon.addEventListener("click", function () {
  if (sideBar.style.display === "none") {
    sideBar.style.display = "inline";
  } else {
    sideBar.style.display = "none";
  }
});
settingLink.addEventListener("onmouseover", function () {
  hiddenSettings.style.display = "inline";
  console.log("hello");
});
