//variables
var marcadorpreg = document.getElementById("marcpreg");
var cont = document.getElementById("test");
var preg = document.getElementById("pregunta");
var rs = document.getElementsByClassName("respuesta");
var npreg = 0;
var respuesta;

//debería crear una función para crear el html de las preguntas


//cambia los valores a los de la pregunta
var mostrarPregunta = function(id){
    marcadorpreg.innerHTML = 'pregunta ' + preguntas[id].id;
    preg.innerHTML = preguntas[id].p;
    for (var i = 0;i<4;i++) {
        rs[i].innerHTML = preguntas[id].r[i];
    }
}

mostrarPregunta(npreg);

//agrega la funcion al clickear
for (var i = 0;i<4;i++) {
    rs[i].addEventListener("click",
        function(event){
            respuesta = this.innerHTML;
            console.log(respuesta);
            cont.innerHTML = respuesta == preguntas[npreg].r[preguntas[npreg].c] ? "CORRECTO " : "INCORRECTO ";
            var botsig = document.createElement("button");
            botsig.innerHTML = "siguiente pregunta"
            cont.appendChild(botsig);
            botsig.addEventListener("click",function(){
                npreg +=1
                mostrarPregunta(npreg);
            });
    });
}
