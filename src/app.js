/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
  const suits = ["♥", "♦", "♠", "♣"];
  const values = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];

  const randomSuit = suits[Math.floor(Math.random() * suits.length)];
  const randomValue = values[Math.floor(Math.random() * values.length)];

  const card = document.getElementById("card");

  const suitColor = randomSuit === "♥" || randomSuit === "♦" ? "red" : "black";
  card.innerHTML = `
    <div class="corner-icon top-left" style="font-size: 3rem;">
      <span style="color: ${suitColor};">${randomSuit}</span>
    </div>
    <div class="corner-icon bottom-right" style="font-size: 3rem;">
      <span style="color: ${suitColor};">${randomSuit}</span>
    </div>
    <div class="d-flex justify-content-center align-items-center" style="font-size: 5rem;">
      ${randomValue}
    </div>
  `;
};
