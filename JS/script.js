let theme_switcher=document.querySelector("#btndarkmode");
let storageValue=localStorage.getItem("theme_state");

if(storageValue===null){
    localStorage.setItem("theme_state","disabled_state")
}else if(storageValue==="enabled_state"){
    darkMode()
}
function darkMode(){
    localStorage.setItem("theme_state","enabled_state")
    document.body.classList.add("dark-mode")
    // theme_switcher.setAttribute("src","./sun.png")
}

function lightMode(){
    document.body.classList.remove("dark-mode")
    localStorage.setItem("theme_state","disabled_state")
    // theme_switcher.setAttribute("src","./moon.png")
}

theme_switcher.addEventListener("click",()=>{
    storageValue=localStorage.getItem("theme_state")
    if(storageValue==="disabled_state"){
        darkMode()
    }else{
        lightMode()
    }
})
