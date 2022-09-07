let seconds = 0;

console.log("STEP 1");

setInterval(() => {
    seconds++
    console.log("COUNT " + seconds);
}, 1000);

console.log("STEP 2");

const api = async () =>{ // Chamar usando "AWAIT"
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve(200);
            // reject(-1)
        }, 2000);
    });
};

const callAWAIT = async () => {
    let info = await api("www.belluzzodev.com");
    console.log(info);
}

callAWAIT();

//Transformar esse codigo ASSINCONO
//Puxar STATUS do retorno e o Resultado
//Status do HTTP e a TELA.

const https = require("https");

const getGoogle = async () => {
    let info = await https.get("https://www.google.com");
    console.log(info);
}

getGoogle();