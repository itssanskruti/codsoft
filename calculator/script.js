const display=document.getElementById("display")

function Display(value){
    display.value += value
}
function clearDisplay(){
    display.value = ""
}
function calculate(){
    try {
        if(display.value==="")
        {
            alert("insert values")
            return
        }
        const result = eval(display.value)
        display.value=result
    }
    catch (error){
        display.value= 'error'
    }
}

const body=document.querySelector("body")
const bttn=document.querySelector(".changebtn")
const div=document.querySelector("div")
const inpt=document.querySelector("input")
let isDark=true

bttn.addEventListener("click" , function(){
    if(isDark){
        body.classList.add("light");
        body.classList.remove("dark")
        div.classList.add("light1");
        div.classList.remove("dark1");
        inpt.classList.add("lightinp");
        inpt.classList.remove("darkinp");
        isDark=false
    }
    else{
        body.classList.add("dark")
        body.classList.remove("light")
        div.classList.add("dark1");
        div.classList.remove("light1");
        inpt.classList.add("darkinp");
        inpt.classList.remove("lightinp");
        isDark=true
    }
})
