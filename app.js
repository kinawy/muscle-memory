let str = 'string';
let num = 5;
let boo = true;
let favTeams = ['Red Sox', 'Patriots', 'Bruins', 'Liverpool', 'Celtics'];
let mySelf = {
    name: 'Sameh',
    age: 30,
    hobbies: ['gaming', 'coding', 'bbqing'],
    standing: true
};
console.log(str, num, boo, favTeams, mySelf);

let arrFunc = function(array) {
    for (let i =0; i<= array.length; i++) {
        return array[i];
    }
}


console.log(arrFunc(favTeams));

let callFunc2 = function(type) {
    if (typeof type === 5) {
        return type;
    }
    
}

let callFunc = function (callback) {
    if (callback === 5) {
        console.log('Great Success')
    }
}

callFunc(callFunc2(num))

let strFunc = function(string) {
    if (string === 'string') {
        return string.split(' ');
    }
}

strFunc(str);

let booFunc = function(boolean) {
    if (boolean == true) {
        console.log(('Yes, this is true'))
    }
}

booFunc(boo);

let ranFun = function(obj) {
    for (let i = 0; i<=obj.length;i++) {
        console.log(obj[i]);
    }
}

ranFun(mySelf);


const sectionOne = document.getElementById('section1');
const sectionTwo = document.getElementById('section2');
const sectionThree = document.querySelector('#section3');
const sectionFour = document.querySelector('#section4');
const sectionFive = document.querySelector('#section5');

sectionOne.textContent = 'This is Section One';
sectionTwo.textContent = 'This is Section Two';
sectionThree.textContent = 'This is Section Three';
sectionFour.textContent = 'This is Section Four';
sectionFive.textContent = 'This is Sectiono Five';

const paraOne = document.querySelector('.paragraph1');
paraOne.textContent = 'Sameh Kinawy';
const paraTwo = document.querySelector('.paragraph2');
paraTwo.textContent = 'Michael Jordan';
const paraThree = document.querySelector('.paragraph3');
paraThree.textContent = 'Kemba Walker';
const paraFour = document.querySelector('.paragraph4');
paraFour.textContent = 'Jaylen Brown';
const paraFive = document.querySelector('.paragraph5');
paraFive.textContent = 'Gordon Hayward';



