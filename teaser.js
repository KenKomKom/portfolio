// function numIn(sender){
//     var target=sender.toElement;
//     if(target.innerHTML.trim()=="<p>01</p>" && !target.classList.contains("active")){
//         angka = document.getElementById("1");
//         target.style.outlineStyle="solid";
//     }
//     if(target.innerHTML.trim()=="<p>02</p>" && !target.classList.contains("active")){
//         angka = document.getElementById("2");
//         target.style.outlineStyle="solid";
//     }
//     if(target.innerHTML.trim()=="<p>03</p>" && !target.classList.contains("active")){
//         angka = document.getElementById("3");
//         target.style.outlineStyle="solid";
//     }
// }

// function numOut(sender){
//     var target=sender.toElement;
//     console.log("numout");
//     console.log(target.innerHTML.trim());
//     if(target.innerHTML.trim()=="<p>01</p>" && !target.classList.contains("active")){
//         console.log("numout1");
//         angka = document.getElementById("1");
//         target.style.outlineStyle="inset";
//     }
//     if(target.innerHTML.trim()=="<p>02</p>" && !target.classList.contains("active")){
//         console.log("numout2");
//         angka = document.getElementById("2");
//         target.style.outlineStyle="inset";
//     }
//     if(target.innerHTML.trim()=="<p>03</p>" && !target.classList.contains("active")){
//         console.log("numout3");
//         angka = document.getElementById("3");
//         target.style.outlineStyle="inset";
//     }
// }
function numClick(sender){
    var target=sender.target;
    picBig = document.getElementById("pic-big");

    if(target.innerText=="01" && !target.classList.contains("active")){
        picBig.style.backgroundImage = "url('../../img/img1.png')";
        document.getElementById("pic-1").style.backgroundImage = "url('../../img/img1-2.png')";
        document.getElementById("pic-2").style.backgroundImage = "url('../../img/img1-3.png')";
        document.getElementById("1").classList.add("active");
        document.getElementById("2").classList.remove("active");
        document.getElementById("3").classList.remove("active");
        document.getElementById("created").innerHTML="Art created by Euge_ from Civitai";
        clearInterval(a);
        a = setInterval(numChange,3000);
        prior=1

    }
    if(target.innerText=="02" && !target.classList.contains("active")){
        picBig.style.backgroundImage = "url('../../img/img2.png')";
        document.getElementById("pic-1").style.backgroundImage = "url('../../img/img2-2.png')";
        document.getElementById("pic-2").style.backgroundImage = "url('../../img/img2-3.png')";
        document.getElementById("1").classList.remove("active");
        document.getElementById("2").classList.add("active");
        document.getElementById("3").classList.remove("active");
        document.getElementById("created").innerHTML="Art taken from Civitai";
        clearInterval(a);
        a = setInterval(numChange,3000);
        prior=2
    }
    if(target.innerText=="03" && !target.classList.contains("active")){
        picBig.style.backgroundImage = "url('../../img/img3.png')";
        document.getElementById("pic-1").style.backgroundImage = "url('../../img/img3-2.png')";
        document.getElementById("pic-2").style.backgroundImage = "url('../../img/img3-3.png')";
        document.getElementById("1").classList.remove("active");
        document.getElementById("2").classList.remove("active");
        document.getElementById("3").classList.add("active");
        document.getElementById("created").innerHTML="Art taken from Civitai";
        clearInterval(a);
        a = setInterval(numChange,3000);
        prior=3
    }
}

function numChange(){
    console.log("numclick");
    picBig = document.getElementById("pic-big");

    if(prior==3){
        picBig.style.backgroundImage = "url('../../img/img1.png')";
        document.getElementById("pic-1").style.backgroundImage = "url('../../img/img1-2.png')";
        document.getElementById("pic-2").style.backgroundImage = "url('../../img/img1-3.png')";
        document.getElementById("1").classList.add("active");
        document.getElementById("2").classList.remove("active");
        document.getElementById("3").classList.remove("active");
        document.getElementById("created").innerHTML="Art created by Euge_ from Civitai";
        prior=1;
    }
    else if(prior==1){
        picBig.style.backgroundImage = "url('../../img/img2.png')";
        document.getElementById("pic-1").style.backgroundImage = "url('../../img/img2-2.png')";
        document.getElementById("pic-2").style.backgroundImage = "url('../../img/img2-3.png')";
        document.getElementById("1").classList.remove("active");
        document.getElementById("2").classList.add("active");
        document.getElementById("3").classList.remove("active");
        document.getElementById("created").innerHTML="Art taken from Civitai";
        prior=2;
    }
    else if(prior==2){
        picBig.style.backgroundImage = "url('../../img/img3.png')";
        document.getElementById("pic-1").style.backgroundImage = "url('../../img/img3-2.png')";
        document.getElementById("pic-2").style.backgroundImage = "url('../../img/img3-3.png')";
        document.getElementById("1").classList.remove("active");
        document.getElementById("2").classList.remove("active");
        document.getElementById("3").classList.add("active");
        document.getElementById("created").innerHTML="Art created by MaggotBrother from Civitai";
        prior=3
    }
}
angka = document.getElementsByClassName("number");
for(var i=0; i<angka.length;i++){
    console.log(angka[i]);
    angka[i].addEventListener("click", numClick)
}
var prior = 1
a = setInterval(numChange, 3000);