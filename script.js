

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
    //changes the audio clip to the right one
    document.getElementById('player').src='https://sizzoundbucket.s3.us-east-2.amazonaws.com/cmajoraminor.wav';
 }

function two(){
    if(window.innerWidth > 600){
    document.getElementById('piano').src='images/piano_gmajoreminor.png';
    document.getElementById('notebar').src='images/notebar_gmajoreminor.png';}
    else{
        document.getElementById('piano').src='images/piano_gmajoreminor_mobile.png';
        document.getElementById('notebar').src='images/notebar_gmajoreminor.png'; 
    }
    document.getElementById('player').src="https://sizzoundbucket.s3.us-east-2.amazonaws.com/gmajoreminor.wav";
 }
            

function three(){
    if(window.innerWidth > 600){
     document.getElementById('piano').src='images/piano_dmajorbminor.png';
     document.getElementById('notebar').src='images/notebar_dmajorbminor.png';}
     else{
        document.getElementById('piano').src='images/piano_dmajorbminor_mobile.png';
        document.getElementById('notebar').src='images/notebar_dmajorbminor.png';
     }
     document.getElementById('player').src='https://sizzoundbucket.s3.us-east-2.amazonaws.com/dmajorbminor.wav';
}

function four(){
    if(window.innerWidth > 600){
    document.getElementById('piano').src='images/piano_amajorfsharpminor.png';
    document.getElementById('notebar').src='images/notebar_amajorfsharpminor.png';}
    else{
        document.getElementById('piano').src='images/piano_amajorfsharpminor_mobile.png';
        document.getElementById('notebar').src='images/notebar_amajorfsharpminor.png'; 
    }
    document.getElementById('player').src='https://sizzoundbucket.s3.us-east-2.amazonaws.com/amajorfsharpminor.wav';
}

function five(){
    if(window.innerWidth > 600){
    document.getElementById('piano').src='images/piano_emajorcsharpminor.png';
    document.getElementById('notebar').src='images/notebar_emajorcsharpminor.png';}
    else{
        document.getElementById('piano').src='images/piano_emajorcsharpminor_mobile.png';
        document.getElementById('notebar').src='images/notebar_emajorcsharpminor.png';
    }
    document.getElementById('player').src='https://sizzoundbucket.s3.us-east-2.amazonaws.com/emajorcsharpminor.wav';
}

function six(){
    if(window.innerWidth > 600){
    document.getElementById('piano').src='images/piano_fmajordminor.png';
    document.getElementById('notebar').src='images/notebar_fmajordminor.png';}
    else{
        document.getElementById('piano').src='images/piano_fmajordminor_mobile.png';
        document.getElementById('notebar').src='images/notebar_fmajordminor.png';
    }
    document.getElementById('player').src='https://sizzoundbucket.s3.us-east-2.amazonaws.com/fmajordminor.wav';
}

function seven(){
    if(window.innerWidth > 600){
    document.getElementById('piano').src='images/piano_eflatmajorcminor.png';
    document.getElementById('notebar').src='images/notebar_eflatmajorcminor.png';}
    else{
        document.getElementById('piano').src='images/piano_eflatmajorcminor_mobile.png';
        document.getElementById('notebar').src='images/notebar_eflatmajorcminor.png';
    }
    document.getElementById('player').src='https://sizzoundbucket.s3.us-east-2.amazonaws.com/eflatmajorcminor.wav';
}

function eight(){
    if(window.innerWidth > 600){
    document.getElementById('piano').src='images/piano_bflatmajorgminor.png';
    document.getElementById('notebar').src='images/notebar_bflatmajorgminor.png';}
    else{
        document.getElementById('piano').src='images/piano_bflatmajorgminor_mobile.png';
        document.getElementById('notebar').src='images/notebar_bflatmajorgminor.png';
    }
    document.getElementById('player').src='https://sizzoundbucket.s3.us-east-2.amazonaws.com/bflatmajorgminor.wav';
}

function nine(){
    if(window.innerWidth > 600){
    document.getElementById('piano').src='images/piano_aflatmajorfminor.png';
    document.getElementById('notebar').src='images/notebar_aflatmajorfminor.png';}
    else{
        document.getElementById('piano').src='images/piano_aflatmajorfminor_mobile.png';
        document.getElementById('notebar').src='images/notebar_aflatmajorfminor.png';
    }
    document.getElementById('player').src='https://sizzoundbucket.s3.us-east-2.amazonaws.com/aflatmajorfminor.wav';
    
}

function ten(){
    if(window.innerWidth > 600){
    document.getElementById('piano').src='images/piano_bmajorgsharpminor.png';
    document.getElementById('notebar').src='images/notebar_bmajorgsharpminor.png';}
    else{
        document.getElementById('piano').src='images/piano_bmajorgsharpminor_mobile.png';
        document.getElementById('notebar').src='images/notebar_bmajorgsharpminor.png'; 
    }
    document.getElementById('player').src='https://sizzoundbucket.s3.us-east-2.amazonaws.com/bmajorgsharpminor.wav';
}

function eleven(){
    if(window.innerWidth > 600){
    document.getElementById('piano').src='images/piano_cflatmajoraflatminor.png';
    document.getElementById('notebar').src='images/notebar_cflatmajoraflatminor.png';}
    else{
        document.getElementById('piano').src='images/piano_cflatmajoraflatminor_mobile.png';
        document.getElementById('notebar').src='images/notebar_cflatmajoraflatminor.png';
    }
    document.getElementById('player').src='https://sizzoundbucket.s3.us-east-2.amazonaws.com/cflatmajoraflatminor.wav';
}

function twelve(){
    if(window.innerWidth > 600){
    document.getElementById('piano').src='images/piano_fsharpmajordsharpminor.png';
    document.getElementById('notebar').src='images/notebar_fsharpmajordsharpminor.png';}
    else{
        document.getElementById('piano').src='images/piano_fsharpmajordsharpminor_mobile.png';
        document.getElementById('notebar').src='images/notebar_fsharpmajordsharpminor.png'; 
    }
    document.getElementById('player').src='https://sizzoundbucket.s3.us-east-2.amazonaws.com/fsharpmajordsharpminor.wav';
}

function thirteen(){
    if(window.innerWidth > 600){
    document.getElementById('piano').src='images/piano_gflatmajoreflatminor.png';
    document.getElementById('notebar').src='images/notebar_gflatmajoreflatminor.png';}
    else{
        document.getElementById('piano').src='images/piano_gflatmajoreflatminor_mobile.png';
        document.getElementById('notebar').src='images/notebar_gflatmajoreflatminor.png';
    }
    document.getElementById('player').src='https://sizzoundbucket.s3.us-east-2.amazonaws.com/gflatmajoreflatminor.wav';
}

function fourteen(){
    if(window.innerWidth > 600){
    document.getElementById('piano').src='images/piano_csharpmajorasharpminor.png';
    document.getElementById('notebar').src='images/notebar_csharpmajorasharpminor.png';}
    else{
        document.getElementById('piano').src='images/piano_csharpmajorasharpminor_mobile.png';
        document.getElementById('notebar').src='images/notebar_csharpmajorasharpminor.png';  
    }
    document.getElementById('player').src='https://sizzoundbucket.s3.us-east-2.amazonaws.com/csharpmajorasharpminor.wav';
}

function fifteen(){
    if(window.innerWidth > 600){
    document.getElementById('piano').src='images/piano_dflatmajorbflatminor.png';
    document.getElementById('notebar').src='images/notebar_dflatmajorbflatminor.png';}
    else{
        document.getElementById('piano').src='images/piano_dflatmajorbflatminor_mobile.png';
        document.getElementById('notebar').src='images/notebar_dflatmajorbflatminor.png';
    }
    document.getElementById('player').src='https://sizzoundbucket.s3.us-east-2.amazonaws.com/dflatmajorbflatminor.wav';
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