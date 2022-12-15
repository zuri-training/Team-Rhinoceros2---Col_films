"use strict";
// prompt("hello world");
const menuIcon = document.querySelector(".menu-icon");
const navUlVisible = document.querySelector(".nav-ul-visible");
const notifiactionIcon = document.querySelector(".notification-icon");

const notificationContainer = document.querySelector(".notification-container");

const searchIcon = document.querySelector(".search-icon");
const navSearch = document.querySelector(".nav-search");
menuIcon.addEventListener("click", function () {
  if (navUlVisible.style.display === "none") {
    navUlVisible.style.display = "block";
  } else {
    navUlVisible.style.display = "none";
  }
});
notifiactionIcon.addEventListener("click", function () {
  console.log("i was clicked");
  if (notificationContainer.style.display === "none") {
    console.log("i was clicked");

    notificationContainer.style.display = "block";
  } else {
    notificationContainer.style.display = "none";
  }
});
searchIcon.addEventListener("click", function () {
  if (navSearch.style.display === "none") {
    navSearch.style.display = "inline";
  } else {
    navSearch.style.display = "none";
  }
});
