// obtiene los objetos html
var opTest = document.getElementById("test");
var inTest = document.getElementById("testinfo");
var opInfo = document.getElementById("info");
var inInfo = document.getElementById("infoinfo");
var opMapas = document.getElementById("mapas");
var inMapas = document.getElementById("mapasinfo");
var opContacto = document.getElementById("contacto");
var inContacto = document.getElementById("contactoinfo");
var opYoutube = document.getElementById("youtube");
var inYoutube = document.getElementById("youtubeinfo");

//funcion para mostrar texto
opTest.addEventListener("mouseover", function(){
    inTest.style.display="inline";
});
opTest.addEventListener("mouseout", function(){
    inTest.style.display="none";
});

opInfo.addEventListener("mouseover", function(){
    inInfo.style.display="inline";
});
opInfo.addEventListener("mouseout", function(){
    inInfo.style.display="none";
});

opMapas.addEventListener("mouseover", function(){
    inMapas.style.display="inline";
});
opMapas.addEventListener("mouseout", function(){
    inMapas.style.display="none";
});

opContacto.addEventListener("mouseover", function(){
    inContacto.style.display="inline";
});
opContacto.addEventListener("mouseout", function(){
    inContacto.style.display="none";
});

opYoutube.addEventListener("mouseover", function(){
    inYoutube.style.display="inline";
});
opYoutube.addEventListener("mouseout", function(){
    inYoutube.style.display="none";
});