// These Functions show the notes on the keyboard when the key is selected from the drop down menu
// If else statement included to show a larger picture of keyboard if users are on smaller screen (phones)
function one(){
    if(window.innerWidth > 600){
    document.getElementById('piano').src='images/piano_cmajoraminor.png';
    document.getElementById('notebar').src='images/notebar_cmajoraminor.png';}
    else {
      document.getElementById('piano').src='images/piano_cmajoraminor_mobile.png';
      document.getElementById('notebar').src='images/notebar_cmajoraminor.png';
    }
 }

function two(){
    if(window.innerWidth > 600){
    document.getElementById('piano').src='images/piano_gmajoreminor.png';
    document.getElementById('notebar').src='images/notebar_gmajoreminor.png';}
    else{
        document.getElementById('piano').src='images/piano_gmajoreminor_mobile.png';
        document.getElementById('notebar').src='images/notebar_gmajoreminor.png'; 
    }
            }

function three(){
    if(window.innerWidth > 600){
     document.getElementById('piano').src='images/piano_dmajorbminor.png';
     document.getElementById('notebar').src='images/notebar_dmajorbminor.png';}
     else{
        document.getElementById('piano').src='images/piano_dmajorbminor_mobile.png';
        document.getElementById('notebar').src='images/notebar_dmajorbminor.png';
     }
}

function four(){
    if(window.innerWidth > 600){
    document.getElementById('piano').src='images/piano_amajorfsharpminor.png';
    document.getElementById('notebar').src='images/notebar_amajorfsharpminor.png';}
    else{
        document.getElementById('piano').src='images/piano_amajorfsharpminor_mobile.png';
        document.getElementById('notebar').src='images/notebar_amajorfsharpminor.png'; 
    }
}

function five(){
    if(window.innerWidth > 600){
    document.getElementById('piano').src='images/piano_emajorcsharpminor.png';
    document.getElementById('notebar').src='images/notebar_emajorcsharpminor.png';}
    else{
        document.getElementById('piano').src='images/piano_emajorcsharpminor_mobile.png';
        document.getElementById('notebar').src='images/notebar_emajorcsharpminor.png';
    }
}

function six(){
    if(window.innerWidth > 600){
    document.getElementById('piano').src='images/piano_fmajordminor.png';
    document.getElementById('notebar').src='images/notebar_fmajordminor.png';}
    else{
        document.getElementById('piano').src='images/piano_fmajordminor_mobile.png';
        document.getElementById('notebar').src='images/notebar_fmajordminor.png';
    }
}

function seven(){
    if(window.innerWidth > 600){
    document.getElementById('piano').src='images/piano_eflatmajorcminor.png';
    document.getElementById('notebar').src='images/notebar_eflatmajorcminor.png';}
    else{
        document.getElementById('piano').src='images/piano_eflatmajorcminor_mobile.png';
        document.getElementById('notebar').src='images/notebar_eflatmajorcminor.png';
    }
}

function eight(){
    if(window.innerWidth > 600){
    document.getElementById('piano').src='images/piano_bflatmajorgminor.png';
    document.getElementById('notebar').src='images/notebar_bflatmajorgminor.png';}
    else{
        document.getElementById('piano').src='images/piano_bflatmajorgminor_mobile.png';
        document.getElementById('notebar').src='images/notebar_bflatmajorgminor.png';
    }
}

function nine(){
    if(window.innerWidth > 600){
    document.getElementById('piano').src='images/piano_aflatmajorfminor.png';
    document.getElementById('notebar').src='images/notebar_aflatmajorfminor.png';}
    else{
        document.getElementById('piano').src='images/piano_aflatmajorfminor_mobile.png';
        document.getElementById('notebar').src='images/notebar_aflatmajorfminor.png';
    }
}

function ten(){
    if(window.innerWidth > 600){
    document.getElementById('piano').src='images/piano_bmajorgsharpminor.png';
    document.getElementById('notebar').src='images/notebar_bmajorgsharpminor.png';}
    else{
        document.getElementById('piano').src='images/piano_bmajorgsharpminor_mobile.png';
        document.getElementById('notebar').src='images/notebar_bmajorgsharpminor.png'; 
    }
}

function eleven(){
    if(window.innerWidth > 600){
    document.getElementById('piano').src='images/piano_cflatmajoraflatminor.png';
    document.getElementById('notebar').src='images/notebar_cflatmajoraflatminor.png';}
    else{
        document.getElementById('piano').src='images/piano_cflatmajoraflatminor_mobile.png';
        document.getElementById('notebar').src='images/notebar_cflatmajoraflatminor.png';
    }
}

function twelve(){
    if(window.innerWidth > 600){
    document.getElementById('piano').src='images/piano_fsharpmajordsharpminor.png';
    document.getElementById('notebar').src='images/notebar_fsharpmajordsharpminor.png';}
    else{
        document.getElementById('piano').src='images/piano_fsharpmajordsharpminor_mobile.png';
        document.getElementById('notebar').src='images/notebar_fsharpmajordsharpminor.png'; 
    }
}

function thirteen(){
    if(window.innerWidth > 600){
    document.getElementById('piano').src='images/piano_gflatmajoreflatminor.png';
    document.getElementById('notebar').src='images/notebar_gflatmajoreflatminor.png';}
    else{
        document.getElementById('piano').src='images/piano_gflatmajoreflatminor_mobile.png';
        document.getElementById('notebar').src='images/notebar_gflatmajoreflatminor.png';
    }

}

function fourteen(){
    if(window.innerWidth > 600){
    document.getElementById('piano').src='images/piano_csharpmajorasharpminor.png';
    document.getElementById('notebar').src='images/notebar_csharpmajorasharpminor.png';}
    else{
        document.getElementById('piano').src='images/piano_csharpmajorasharpminor_mobile.png';
        document.getElementById('notebar').src='images/notebar_csharpmajorasharpminor.png';  
    }
}

function fifteen(){
    if(window.innerWidth > 600){
    document.getElementById('piano').src='images/piano_dflatmajorbflatminor.png';
    document.getElementById('notebar').src='images/notebar_dflatmajorbflatminor.png';}
    else{
        document.getElementById('piano').src='images/piano_dflatmajorbflatminor_mobile.png';
        document.getElementById('notebar').src='images/notebar_dflatmajorbflatminor.png';
    }
}



//changes the header. checks every half second
function responsiveHeader(){
	if (window.innerWidth < 658) {
		return document.querySelector('header').innerHTML = '<img src="images/Scalekey_Title.png" class="title_image" alt="ScaleKey">'
	} else
	{
		return document.querySelector('header').innerText = "ScaleKey"
	}
}
setInterval(responsiveHeader,500)