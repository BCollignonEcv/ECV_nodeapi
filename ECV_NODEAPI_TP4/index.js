const axios = require('axios');

function executeThen(){
    try {
        //function 1
        const shouldBeHigherThanTwenty = ishigherThanTwenty("abcdefghijklmnopqrstuvwxyz");
        shouldBeHigherThanTwenty.then(successCallBack, failureCallBack)
        const shouldBelowerThanTwenty = ishigherThanTwenty("abcdefghijklmno");
        shouldBelowerThanTwenty.then(successCallBack, failureCallBack)

        //function 2
        const shouldGetGap = getGap(17,6);
        shouldGetGap.then(successCallBack, failureCallBack)
        const shouldNotGetGap = getGap(17,19);
        shouldNotGetGap.then(successCallBack, failureCallBack)

        //function 3
        const shouldBeToYoung = isToYoung("18/02/2005");
        shouldBeToYoung.then(successCallBack, failureCallBack)
        const shouldNotBeToYoung = isToYoung("18/02/2001");
        shouldNotBeToYoung.then(successCallBack, failureCallBack)
    } catch(e) {
        console.log(e)
    }
}

async function executeAwait(){
    try {
        //function 1
        const shouldBeHigherThanTwenty = await ishigherThanTwenty("abcdefghijklmnopqrstuvwxyz");
        console.log(shouldBeHigherThanTwenty)
        const shouldBelowerThanTwenty = await ishigherThanTwenty("abcdefghijklmno");
        console.log(shouldBelowerThanTwenty)

        //function 2
        const shouldGetGap = await getGap(17,6);
        console.log(shouldGetGap)
        const shouldNotGetGap = await getGap(17,19);
        console.log(shouldNotGetGap)

        //function 3
        const shouldBeToYoung = await isToYoung("18/02/2005");
        console.log(shouldBeToYoung)
        const shouldNotBeToYoung = await isToYoung("18/02/2001");
        console.log(shouldNotBeToYoung)
    } catch(e) {
        console.log(e)
    }
}

async function executeAxios(){
    try {
        const url = "https://swapi.py4e.com/api"
        const q1 = await axios.get(`${url}/starships/10`);
        console.log(q1.data)
        const q2 = await axios.get(`${url}/planets`);
        console.log(q2.data.count)
        const q3 = await axios.get(`${url}/people?name=Darth Vader`);
        console.log(q3.data.results[3].birth_year)
        const q4 = await axios.get(`${url}/people/13?format=wookiee`);
        console.log(q4.data)
        const q5_1 = await axios.get(`${url}/people/?name=R2-D2`);
        const q5_2 = await axios.get(`${q5_1.data.results[2].homeworld}`);
        console.log(q5_2)
    } catch (e){
        console.log(e)
    }
}

const ishigherThanTwenty = (myString) => {
    return new Promise((resolve, reject) => {
        if(myString.length > 20){
            resolve(myString.length) 
        }else{
            reject(myString.length)
        }
    })
}

const getGap = (firstNum, secondNum) => {
    return new Promise((resolve, reject) => {
        if(firstNum > secondNum){
            resolve(firstNum - secondNum) 
        }else{
            reject()
        }
    })
}

const isToYoung = (birthDateString) => {
    return new Promise((resolve, reject) => {
        if(getAge(birthDateString) < 18){
            resolve(true) 
        }else{
            reject()
        }
    })
}

function successCallBack(result){
    if(result){
        console.log("La promesse a réussi : " + result)
    }else{
        console.log("La promesse a réussi")
    }
}

function failureCallBack(error){
    if(error){
        console.log("La promesse a échoué : " + error)
    }else{
        console.log("La promesse a échoué")
    }
}

function getAge(birthDateString) {
    var today = new Date();
    var dateParts = birthDateString.split("/");
    var birthDate = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
    var d = today.getDay() - birthDate.getDay();
    var m = today.getMonth() - birthDate.getMonth();
    var age = today.getFullYear() - birthDate.getFullYear();
    if (d < 0) {
        m--;
    }
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

executeThen();
executeAwait();
executeAxios();