let now = new Date();
let yesterday = new Date(2022,7,10,0,0,0);

let info = now - yesterday;

console.log(info / 1000 / 3600);