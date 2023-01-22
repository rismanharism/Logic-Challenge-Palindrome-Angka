let angka = 9;
angka++ 
let flag = false;
while(flag === false){
let angkaString = String(angka);
angkaReverse="";

for (let i = angkaString.length - 1; i >= 0; i--){
    angkaReverse += angkaString[i];

}
if (angkaString !== angkaReverse){
    flag = false
    angka++
}
else{
    flag = true
}
}

console.log(angka);