var i = 0;
var txt1 = "Nice to meet you!";

var txt2 = "I have a quick question...";

var txt3 = "Do you want to know the different festivities in Philippines?";

var txt4R = "That's nice, I would love to show you it.";

var txt5 = "That's if you want to see it?";

var txt6 = "Commencing Festy Program Protocol..... Done";
var count = 0;
var speed = 10;

var canContinue = true;

function link(){
    setTimeout(function(){
    window.location.href = 'loading.html';
    }, 100);
}

function Write() {
    if (i == 0) {
        document.getElementById("One").innerHTML = "";
    }
    if (count == 0) {
        if (i < txt1.length) {
            document.getElementById("One").innerHTML += txt1.charAt(i);
            i++;
            setTimeout(Write,speed)
        } else {
            var audio = document.getElementById("audio");
            audio.src = 'festyvoicelines/first.mp3'
            audio.play();
            document.getElementById("change").innerHTML = "Nice to meet you too";
            i = 0;
            count++
            return
        }
    } else if (count == 1) {
        if (i < txt2.length) {
            document.getElementById("One").innerHTML += txt2.charAt(i);
            i++;
            setTimeout(Write,speed)
        } else {
            var audio = document.getElementById("audio");
            audio.src = 'festyvoicelines/second.mp3'
            audio.play();
            document.getElementById("change").innerHTML = "Oh? What is it?";
            document.getElementById("festy").src = "festyserious.png";
            i = 0;
            count++;
            return
        }
    } else if (count == 2) {
        if (i < txt3.length) {
            document.getElementById("One").innerHTML += txt3.charAt(i);
            i++;
            setTimeout(Write,speed)
        } else {
            var audio = document.getElementById("audio");
            audio.src = 'festyvoicelines/third.mp3'
            audio.play();
            document.getElementById("change").innerHTML = "Yes.....";
            document.getElementById("festy").src = "festyquestion.png";
            i = 0;
            count++;
            return
        }
    } else if (count == 3) {
        if (i < txt4R.length) {
            document.getElementById("One").innerHTML += txt4R.charAt(i);
            i++;
            setTimeout(Write,speed)
        } else {
            var audio = document.getElementById("audio");
            audio.src = 'festyvoicelines/fourth.mp3'
            audio.play();
            document.getElementById("change").innerHTML = "Oooooo!";
            document.getElementById("festy").src = "festyorig.png";
            i = 0;
            count++;
            return
        }
    } else if (count == 4) {
        if (i < txt5.length) {
            document.getElementById("One").innerHTML += txt5.charAt(i);
            i++;
            setTimeout(Write,speed)
        } else {
            var audio = document.getElementById("audio");
            audio.src = 'festyvoicelines/fifth.mp3'
            audio.play();
            document.getElementById("change").innerHTML = "Yep";
            document.getElementById("festy").src = "festyquestion.png";
            i = 0;
            count++;
            return
        }
    }  else if (count == 5) {
        if (i < txt6.length) {
            document.getElementById("One").innerHTML += txt6.charAt(i);
            i++;
            setTimeout(Write,speed)
        } else {
            var audio = document.getElementById("audio");
            audio.src = 'festyvoicelines/final.mp3'
            audio.play();
            document.getElementById("festy").src = "festyorig.png";
            document.getElementById("change").remove();
            document.getElementById("cweb").style.opacity = "1";
            document.getElementById("cweb").style.marginTop = "60px";
            i = 0;
            count++;
            return
        }
    } 
}