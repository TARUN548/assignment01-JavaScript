// Assignment 1 | COMP1073 Client-Side JavaScript
document.addEventListener("DOMContentLoaded", function () {
/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
const noun1Button = document.getElementById("noun1");
const verbButton = document.getElementById("verb");
const adjectiveButton = document.getElementById("adjective");
const noun2Button = document.getElementById("noun2");
const settingButton = document.getElementById("setting");

// Constants for p tag to display query selectors
const choosenNoun1Paragraph = document.getElementById("choosenNoun1");
const choosenVerbParagraph = document.getElementById("choosenVerb");
const choosenAdjectiveParagraph = document.getElementById("choosenAdjective");
const choosenNoun2Paragraph = document.getElementById("choosenNoun2");
const choosenSettingParagraph = document.getElementById("choosenSetting");

// Constants for final buttons and p tags
const playbackButton = document.getElementById("playback");
const randomButton = document.getElementById("random");
const storyParagraph = document.getElementById("story");

// Variables for pre-defined arrays
const nouns1 = ["The turkey", "Mom", "Dad", "The dog", "My teacher", "The elephant", "The cat"];
const verbs = ["sat on", "ate", "dance with", "saw", "doesn't like", "kissed"];
const adjectives = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
const nouns2 = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
const settings = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"];

// Variables to store selected words for each category
let selectedNoun1 = "";
let selectedVerb = "";
let selectedAdjective = "";
let selectedNoun2 = "";
let selectedSetting = "";

/* Functions */
function getRandomWord(wordArray) {
    const randomIndex = Math.floor(Math.random() * wordArray.length);
    return wordArray[randomIndex];
}

function noun1_on_click() {
    selectedNoun1 = getRandomWord(nouns1);
    choosenNoun1Paragraph.textContent = selectedNoun1;
}

function verb_on_click() {
    selectedVerb = getRandomWord(verbs);
    choosenVerbParagraph.textContent = selectedVerb;
}

function adjective_on_click() {
    selectedAdjective = getRandomWord(adjectives);
    choosenAdjectiveParagraph.textContent = selectedAdjective;
}

function noun2_on_click() {
    selectedNoun2 = getRandomWord(nouns2);
    choosenNoun2Paragraph.textContent = selectedNoun2;
}

function setting_on_click() {
    selectedSetting = getRandomWord(settings);
    choosenSettingParagraph.textContent = selectedSetting;
}

// Function to concatenate the user story and display it
function playback_on_click() {
    const story = `${selectedNoun1} ${selectedVerb} ${selectedAdjective} ${selectedNoun2} ${selectedSetting}`;
    storyParagraph.textContent = story;
}

// Function to generate a random story from the arrays
function random_on_click() {
    const randomStory = `${getRandomWord(nouns1)} ${getRandomWord(verbs)} ${getRandomWord(adjectives)} ${getRandomWord(nouns2)} ${getRandomWord(settings)}`;
    storyParagraph.textContent = randomStory;
}

/* Event Listeners */
// Add event listeners for each button
noun1Button.addEventListener("click", noun1_on_click);
verbButton.addEventListener("click", verb_on_click);
adjectiveButton.addEventListener("click", adjective_on_click);
noun2Button.addEventListener("click", noun2_on_click);
settingButton.addEventListener("click", setting_on_click);

// Event listener for the "Show Story" button
playbackButton.addEventListener("click", playback_on_click);

// Event listener for the "Random Story" button
randomButton.addEventListener("click", random_on_click);

// Event listener to add student id/name when the "Show Story" button is clicked
playbackButton.addEventListener("click", function () {
    const studentIdParagraph = document.getElementById("studentId");
    studentIdParagraph.textContent = "200542633"; 
});

});
/* Event Listeners
-------------------------------------------------- */




