const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
const char= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let generateBtn = document.getElementById("generate-btn");
let pswd1 = document.getElementById("pass-1");
let pswd2 = document.getElementById("pass-2");

//main function which creates passwords and displays them in selected areas 
generateBtn.addEventListener("click",function(){
    let lengthEl = document.getElementById("length-in").value
    let checkboxN = document.getElementById("if-numbers").checked;
    let checkboxS = document.getElementById("if-special").checked;
    let password1 = ""
    let password2 = ""

    if(checkboxN===true && checkboxS===true){
        for(let i=0; i < lengthEl; i++){
            let x = Math.floor(Math.random()*characters.length)
            let y = Math.floor(Math.random()*characters.length)
            password1 += characters[x]
            password2 += characters[y]
        }
    }
    else if(checkboxN === true && checkboxS === false){
        for(let i=0; i < lengthEl; i++){
            let x = Math.floor(Math.random()*(characters.length-29))
            let y = Math.floor(Math.random()*(characters.length-29))
            password1 += characters[x]
            password2 += characters[y]
        }
    }
    else if(checkboxN === false && checkboxS === true){
        for(let i=0; i < lengthEl; i++){
            let x = Math.floor(Math.random()*char.length)
            let y = Math.floor(Math.random()*char.length)
            password1 += char[x]
            password2 += char[y]
        }
    }
    else {
        for(let i=0; i < lengthEl; i++){
            let x = Math.floor(Math.random()*(characters.length-39))
            let y = Math.floor(Math.random()*(characters.length-39))
            password1 += characters[x]
            password2 += characters[y]
        }
    }

    pswd1.textContent = password1;
    pswd2.textContent = password2;
})

//adding copy to clipboard onclick
pswd1.addEventListener("click", function(){
    let x = pswd1.textContent;
    navigator.clipboard.writeText(x);
    let y = document.getElementById("cp1")
    y.classList.toggle("visible")
})

pswd2.addEventListener("click", function(){
    let x = pswd2.textContent;
    navigator.clipboard.writeText(x);
})