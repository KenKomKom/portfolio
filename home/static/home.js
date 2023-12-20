
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
window.addEventListener("scroll", reveal)
window.addEventListener("scroll", parallaxHeader)
