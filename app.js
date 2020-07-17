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
        let how = array[i]);
    }
}


console.log(arrFunc(favTeams));

let callFunc2 = function(type) {
    if (typeof type === 5) {
        return type;
    }
    
}

let callFunc = function (callback) {
    if (callback === true) {
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
        let two = obj[i];
    }
}

console.log(ranFun(mySelf));


