
function reveal(){
    var reveals = document.querySelectorAll(".reveal");
    // console.log("reveals:"+reveals)
    for(var i=0; i<reveals.length; i++){
        // console.log(element)
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        
        var whenToShow = 150;
        // console.log(reveals[i]+" "+windowHeight+" "+elementTop+" "+whenToShow)
        if(elementTop<windowHeight-whenToShow){
            reveals[i].classList.add("active");
            // console.log(reveals[i].classList)
        }
    };
}

function whiteNoise(){
    var reveals = document.getElementById("trying-animate");

    var windowHeight = window.innerHeight;
    var elementTop = reveals.getBoundingClientRect().top;
    
    var whenToShow = 150;
    if(elementTop<windowHeight-whenToShow){
        reveals.classList.add("animate");
        document.getElementById("trying-padding-container").classList.add("reveal");
    }else{
        document.getElementById("trying-padding-container").classList.remove("reveal");
        reveals.classList.remove("animate");
    }
}

function revealHorBanner(){
    var reveals = document.getElementById("first-animate");
    
    // console.log(element)
    var windowHeight = window.innerHeight;
    var elementTop = reveals.getBoundingClientRect().top;
    
    var whenToShow = 10;
    // console.log(reveals[i]+" "+windowHeight+" "+elementTop+" "+whenToShow)
    if(elementTop<windowHeight-whenToShow){
        reveals.classList.add("active");
        // console.log(reveals[i].classList)
    }
}

/*
Parallax with js
Do not question this code
*/
function parallaxHeader(){
    let scrollY = window.scrollY;

    var par = document.getElementsByClassName("layer");
    var i=1;
    for(var i =0; i<par.length; i++){
        /*Jarak container paralax dari atas layar client*/
        var elementTop = document.getElementById("parallax-container").getBoundingClientRect().top;
        /*Kalo jarak elemen dari atas layar client=0(full screen) baru activate paralax di div ini
         * dan aktivasi berhenti abis udh offscreen containernya
        */
        if(-1*window.innerHeight<=elementTop && elementTop<=0){
            console.log((scrollY-elementTop));
            if(i==0){
                /* Gerak sebanyak negatif dari top of container ke layar client == 
                   berubah sebanyak persentase container yang udh hilang
                */
                par[i].style.transform = "translateY("+(-1*elementTop) * 1.05 +"px)";
            }else if(i==1){
                par[i].style.transform = "translateY("+(-1*elementTop) * 0.75 +"px)";
            }
            par[i].style.zIndex =-100;
        }
    }
}

function cursorBlink(){
    var cursor = document.getElementById("trying-cursor");
    // console.log(cursor);
    if(cursor.style.visibility == "visible"){
        cursor.style.visibility = "hidden";
    }else{
        cursor.style.visibility="visible";
    }
}

function ketik(){
    var ketik = document.getElementById("trying-ketik");
    // console.log(ketik.innerHTML);
    if(ketik.innerHTML.length>=1 && del){
        ketik.innerHTML=ketik.innerHTML.substring(0,ketik.innerHTML.length-1);
    }else if(del){
        del=false;
        justFinishDel = true;
    }
    if(!del && justFinishDel){
        var temp = words[Math.floor(Math.random() * words.length)];
        while(temp==prior){
            temp = words[Math.floor(Math.random() * words.length)];
        }
        prior=temp;
        justFinishDel=false;
    }else if(!del){
        if(ketik.innerHTML!=prior){
            ketik.innerHTML = prior.substring(0,ketik.innerHTML.length+1);
        }else{
            // console.log("selesai ketik");
            del=true;
            clearInterval(a);
        }
    }
}

function movePicsUp(){
    var belt=document.getElementById("rotating-1");
    console.log(belt.children);
    console.log(belt.children.item(0));
    a = belt.children.item(0);
    // belt.remove(a);
    belt.removeChild(a);
    console.log(belt.children)
}
function movePicsDown(){

}

var words = ["WebDev", "GameDev", "DataScience", "CP", "UI/UX"]
var del = true;
var justFinishDel = false;
var prior = "WebDev"

setInterval(cursorBlink, 650);
setInterval(()=>{
    a= setInterval(ketik, 90);
}, 4000);

// setInterval(()=>{
//     b = setInterval(movePicsUp,100)
// },100)

window.addEventListener("pageshow", revealHorBanner)

window.addEventListener("scroll", reveal)
window.addEventListener("scroll", whiteNoise)
window.addEventListener("scroll", parallaxHeader)
