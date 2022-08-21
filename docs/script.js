const inputtext = document.querySelector(".input-text");
const outputtext = document.querySelector(".output-text")

document.querySelector(".copy").style.display = "none"


function enButton(){

    const inputText = encriptar(inputtext.value);

    if (inputText != ""){
        outputtext.value = inputText;
        outputtext.style.backgroundImage = "none";
        inputtext.value = "";
        document.querySelector(".copy").style.display = ""
    }else{
        outputtext.style.backgroundImage = "";
        outputtext.value = "";
        document.querySelector(".copy").style.display = "none"
    }

   
}

function desButton(){
    const inputText = desencriptar(inputtext.value);
    if (inputText != ""){
        outputtext.value = inputText;
        outputtext.style.backgroundImage = "none";
        inputtext.value = "";
    }else{
        outputtext.style.backgroundImage = "";
        outputtext.value = "";
        document.querySelector(".copy").style.display = "none"
    }
  
}

function encriptar(textEncriptar){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "over"], ["u", "ufat"]];

    textEncriptar = textEncriptar.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if(textEncriptar.includes(matrizCodigo[i][0])){
            textEncriptar = textEncriptar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
        
    }

    return textEncriptar;
    
}

function desencriptar(textDesencriptar){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "over"], ["u", "ufat"]];

    textDesencriptar = textDesencriptar.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if(textDesencriptar.includes(matrizCodigo[i][1])){
            textDesencriptar = textDesencriptar.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
        
    }

    return textDesencriptar;
    
}

function copiar(){
    outputtext.select();
    navigator.clipboard.writeText(outputtext.value)
    outputtext.value = "";
    
}