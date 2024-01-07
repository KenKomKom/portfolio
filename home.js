
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
    // console.log(par);
    var i=1;
    for(var i =0; i<par.length; i++){
        /*Jarak container paralax dari atas layar client*/
        var elementTop = document.getElementById("parallax-container").getBoundingClientRect().top;
        /*Kalo jarak elemen dari atas layar client=0(full screen) baru activate paralax di div ini
         * dan aktivasi berhenti abis udh offscreen containernya
        */
    //    console.log(`elementTop:${elementTop}, ${window.innerHeight}`)
        if(-1*window.innerHeight<=elementTop && elementTop<=0){
            // console.log((scrollY-elementTop));
            if(i==0){
                /* Gerak sebanyak negatif dari top of container ke layar client == 
                   berubah sebanyak persentase container yang udh hilang
                */
                par[i].style.transform = "translateY("+(-1*elementTop) * 1.05 +"px)";
            }else if(i==1){
                par[i].style.transform = "translateY("+(-1*elementTop) * 0.30 +"px)";
            }else if(i==2){
                par[i].style.transform = "translateY("+(-1*elementTop) * 0.30 +"px)";
            }else if(i==3){
                par[i].style.transform = "translateY("+(-1*elementTop) * 0.1 +"px)";
            }
            // par[i].style.zIndex =-100;
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
    var ketikk = document.getElementById("trying-ketik");
    // console.log(ketik.innerHTML);
    if(ketikk.innerHTML.length>=1 && del){
        ketikk.innerHTML=ketikk.innerHTML.substring(0,ketikk.innerHTML.length-1);
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
        if(ketikk.innerHTML!=prior){
            ketikk.innerHTML = prior.substring(0,ketikk.innerHTML.length+1);
        }else{
            // console.log("selesai ketik");
            del=true;
            clearInterval(a);
        }
    }
}

function changeWidth(){
    var rot = document.querySelector("#rotating-1");
    var width = getComputedStyle(rot).width;
    // console.log(`width rot-1 =${width}`);

    var ratio = parseInt(width)/1165;
    // console.log(`ratio ${ratio}`);

    var h1 = 7690*ratio;
    // console.log(`height rot-1 =${h}`);

    document.documentElement.style.setProperty('--height-1',`${h1-((90)*ratio)}px`);

    rot=document.querySelector("#rotating-2");
    width=getComputedStyle(rot).width;
    // console.log(`width rot-2 =${width}`);
    var h = 7954*ratio;
    // console.log(`height rot-2 =${h}`);
    document.documentElement.style.setProperty('--height-2',`${h-((80)*ratio)}px`);
}

let carousel =  document.getElementsByClassName("carousel")[0];
console.log(carousel)
let isDragging = false;
let xPosStart=0;
function dragStart(){
    isDragging = true;

}
function dragStop(){
    isDragging = false;
    
}
function dragging(e){
    // console.log(carousel);
    if(isDragging){
        e.preventDefault();
        // let aa = carousel.carousel();
        // console.log(aa);
    }else {
        // console.log(isDragging);
        return isDragging;
    }
    
}
$('.carousel').on('touchstart', function(event){
    console.log("in")
    const xClick = event.originalEvent.touches[0].pageX;
    $(this).one('touchmove', function(event){
        const xMove = event.originalEvent.touches[0].pageX;
        const sensitivityInPx = 5;

        if( Math.floor(xClick - xMove) > sensitivityInPx ){
            $(this).carousel('next');
        }
        else if( Math.floor(xClick - xMove) < -sensitivityInPx ){
            $(this).carousel('prev');
        }
    });
    $(this).on('touchend', function(){
        $(this).off('touchmove');
    });
});
carousel.addEventListener("mousemove", dragging)
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mouseup", dragStop);

var words = ["WebDev", "GameDev", "DataScience", "CP", "UI/UX"]
var del = true;
var justFinishDel = false;
var prior = "WebDev"

setInterval(cursorBlink, 650);
setInterval(()=>{
    a = setInterval(ketik, 80);
}, 4000);

window.addEventListener("pageshow", revealHorBanner)
window.addEventListener("resize", changeWidth)
window.addEventListener("pageshow", changeWidth)

window.addEventListener("scroll", reveal)
window.addEventListener("scroll", whiteNoise)
window.addEventListener("scroll", parallaxHeader)