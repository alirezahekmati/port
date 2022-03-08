let isOpenend =false
function closeraa(){
    console.log("yo")
    if(isOpenend){
        document.querySelector(".side-bar").style.animation =" identifier2 .5s  forwards"
    }else{
        document.querySelector(".side-bar").style.animation =" identifier1 .5s  forwards"
    }
    isOpenend = !isOpenend
}
// document.body.addEventListener("click",close)