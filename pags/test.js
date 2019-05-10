var preguntas = [];
var marcadorpreg = document.getElementById("marcpreg");
var cont = document.getElementById("test");
var preg = document.getElementById("pregunta");
var r0 = document.getElementById("r0");
var r1 = document.getElementById("r1");
var r2 = document.getElementById("r2");
var r3 = document.getElementById("r3");
var rs = document.getElementsByClassName("respuesta");
var npreg = 0;
var respuesta;

class pregunta{
    constructor(id,p,r,c){
        this.id = id;
        this.p = p;
        this.r = r;
        this.c = c;
    }
}


preguntas[0] = new pregunta (1,'Cual es la respuesta correcta?',['ano se','que me importa','prueba prueba prueba','l s s ff s s f'],1);


var mostrarPregunta = function(id){
    marcadorpreg.innerHTML = 'pregunta ' + preguntas[id].id;
    preg.innerHTML = preguntas[id].p;
    r0.innerHTML = preguntas[id].r[0];
    r1.innerHTML = preguntas[id].r[1];
    r2.innerHTML = preguntas[id].r[2];
    r3.innerHTML = preguntas[id].r[3];

}

mostrarPregunta(npreg);

//agrega la funcion al clickear
for (var i = 0;i<4;i++) {
    rs[i].addEventListener("click",
        function(event){
            respuesta = this.innerHTML;
            console.log(respuesta);
            cont.innerHTML = respuesta == preguntas[npreg].r[preguntas[npreg].c] ? "CORRECTO" : "INCORRECTO";
    });
}
