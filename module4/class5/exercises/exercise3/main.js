const api = async() => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(200)
        }, 2000);
    })
}

//console.log("Step 01")
//testAsync()
//   .then((codigo) => {
//       console.log("Code SUCESS" + codigo);
//   })
//  .catch((codigo) => {
//      console.log("CODE ERROR = " + codigo);
//  })
//console.log("Step 02");
//console.log("Step 03");

const startConnection = async () => {
    console.log("Iniciou uma CONEXAO // STEP 1")
    let info = await api("https://www.google.com");
    console.log("Finalizou uma CONEXAO // STEP 2")
    console.log(info);

    if(info.status === 200){
        console.log("SUCESS CONNECTION");
    } else {
        console.log("ERROR CONNECTION");
    }
}

//api("https://www.google.com")
//.then(() =>{
//    console.log("Iniciou uma CONEXAO // STEP 1")
//})
//.catch(() =>{
//    console.log("Finalizou uma CONEXAO // STEP 2")
//})

console.log("STEP 1");
startConnection();

console.log("STEP 2");
console.log("STEP 3");











