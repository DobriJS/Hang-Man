const wordEl = document.getElementById('word');
const wrongLetterEl = document.getElementById('wrong-letters');
const playAgainBtn = document.getElementById('play-button');
const popup = document.getElementById('popup-container');
const notification = document.getElementById('notification-container');
const finalMessage = document.getElementById('final-message');
const figureParts = document.querySelectorAll('.figure-part');

const words = ['javascript', 'framework', 'prototype', 'closure', 'hashtable', 'encapsulation'];

let selectedWord = words[Math.floor(Math.random() * words.length)];

console.log(selectedWord);