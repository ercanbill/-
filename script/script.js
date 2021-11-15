function inputbWidth(){
    document.getElementById("searchbarinput").style.width = "90%";
    document.getElementById("searchbarinput").placeholder = "Şimdi arayabilirsin.";
    document.getElementById("logo").style.display = "none";
    document.getElementById("navbuttons").style.border = "5px solid #333";
    document.getElementById("navbuttonl").style.border = "5px solid #333";
}

function buttonsBorder(){
    document.getElementById("navbuttons").style.border = "5px solid #333";
    document.getElementById("navbuttonl").style.border = "5px solid #333";
}

function inputsWidth(){
    document.getElementById("searchbarinput").style.width = "40%";
    document.getElementById("searchbarinput").placeholder = "Ara.";
    document.getElementById("logo").style.display = "flex";
    document.getElementById("navbuttons").style.border = "2.8px solid #333";
    document.getElementById("navbuttonl").style.border = "2.8px solid #333";
}

function showTrailer(){
    document.getElementById("trailer").style.display = "flex";
    document.getElementById("infoproject").style.display = "none";
    document.getElementById("trailer").muted = false;
}

function hideTrailer(){
    document.getElementById("trailer").style.display = "none";
    document.getElementById("infoproject").style.display = "flex";
    document.getElementById("trailer").muted = true;

}

var trailer = document.getElementById("trailer");

function openVoice(){    
    document.getElementById("trailer").muted = true;
}



function closeVoice() { 
    document.getElementById("trailer").muted = false;
  } 