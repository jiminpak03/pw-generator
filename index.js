const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pwdLength = 15

function setLength() {
    pwdLength = prompt("Please enter the desired number of characters: ")
}

function genPwds() {
    document.getElementById("pwd-1").textContent = ""
    document.getElementById("pwd-2").textContent = ""
    for (let i = 0; i < pwdLength; i++) {
        document.getElementById("pwd-1").textContent += characters[Math.floor(Math.random() * characters.length)]
    }
    for (let i = 0; i < pwdLength; i++) {
        document.getElementById("pwd-2").textContent += characters[Math.floor(Math.random() * characters.length)]
    }
}

function copyPwd1() {
    let copyText = document.getElementById("pwd-1")
    
    navigator.clipboard.writeText(copyText.value)
    alert("Copied!")
}

function copyPwd2() {
    let copyText = document.getElementById("pwd-1")
    
    navigator.clipboard.writeText(copyText.value)
    alert("Copied!")
}

window.setLength = setLength
window.genPwds = genPwds
window.copyPwd1 = copyPwd1
window.copyPwd2 = copyPwd2