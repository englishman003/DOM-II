// Your code goes here
const fluidImages = document.getElementsByClassName(`img-fluid`);
const paragraph = document.getElementsByTagName(`p`);
const button = document.getElementsByClassName(`btn`);
const bus = document.querySelector(`.intro img`);
let dragged;
const nav = document.getElementsByClassName(`main-navigation`)[0];
const destinations = document.getElementById(`destinations`);

bus.addEventListener(`dragstart`,(e) => {
    dragged = e.target;
    e.target.style.opacity = .5;
}, false);

bus.addEventListener(`dragend`, (e) => {
    dragged = e.target;
    e.target.style.opacity = 1;
}, false);

document.addEventListener("dragenter", function(event) {
    if (event.target.className == "main-navigation") {
      event.target.style.background = "gold";
      event.target.style.color = `white`;
      event.target.style.opacity = .75;
      event.target.style.borderBottom = `2px dashed white`;
      console.log(event.target.firstChild.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.childNodes);
      event.target.firstChild.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.style.color = `white`;
      event.target.firstChild.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.style.color = `white`;
      event.target.firstChild.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.style.color = `white`;
      event.target.firstChild.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.style.color = `white`;
    }
  
  }, false);

fluidImages[0].addEventListener(`mouseover`, () => {
    fluidImages[0].style.transform = `scale(.75)`;
    fluidImages[0].style.padding = `3rem`;
    fluidImages[0].style.border = `2rem solid skyblue`;
});

fluidImages[0].addEventListener(`mouseleave`, () => {
    fluidImages[0].style.transform = `scale(1)`;
    fluidImages[0].style.padding = `0rem`;
    fluidImages[0].style.border = `0rem solid skyblue`;
});

paragraph[0].addEventListener( `dblclick`, () => {
    paragraph[0].classList.toggle(`yellow`);
});
paragraph[1].addEventListener( `dblclick`, () => {
    paragraph[1].classList.toggle(`yellow`);
});
paragraph[2].addEventListener( `dblclick`, () => {
    paragraph[2].classList.toggle(`yellow`);
});
paragraph[3].addEventListener( `dblclick`, () => {
    paragraph[3].classList.toggle(`yellow`);
});
paragraph[4].addEventListener( `dblclick`, () => {
    paragraph[4].classList.toggle(`yellow`);
});
paragraph[5].addEventListener( `dblclick`, () => {
    paragraph[5].classList.toggle(`yellow`);
});
paragraph[6].addEventListener( `dblclick`, () => {
    paragraph[6].classList.toggle(`yellow`);
});
paragraph[7].addEventListener( `dblclick`, () => {
    paragraph[7].classList.toggle(`yellow`);
});
paragraph[8].addEventListener( `dblclick`, () => {
    paragraph[8].classList.toggle(`yellow`);
});

button[0].addEventListener(`click`, () => {
    alert(`Great Choice!`);
});
button[1].addEventListener(`click`, () => {
    alert(`Great Choice!`);
});
button[2].addEventListener(`click`, () => {
    alert(`Great Choice!`);
});

const greetings = document.addEventListener(`keydown`, (e) => {
    if(e.keyCode === 13){
        alert(`Greetings from your captain! Where would you like to go?`);
    }
});

const GREETINGS = document.addEventListener(`keyup`, (e) => {
    if(e.keyCode === 96){
        alert(`Ohhhhhhhhhhhhh!!...................SPONGEBOB SQUAREPANTS!!!`);
    }
});

nav.addEventListener(`click`, (e) => {
    e.preventDefault();
    alert(`I'm not refreshing!`);
})

window.addEventListener(`resize`, (e) => {
    e.preventDefault();
    alert(`Window Height = ${window.innerHeight} & Window Width = ${window.innerWidth}`);
});

