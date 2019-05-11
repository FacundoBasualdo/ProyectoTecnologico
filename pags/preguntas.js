var preguntas = [];

class pregunta{
    constructor(id,p,r,c){ //numero de pregunta, pregunta (?), respuestas[array], respuesta correcta(int)
        this.id = id;
        this.p = p;
        this.r = r;
        this.c = c;
    }
}

//aca irían las preguntas
preguntas[0] = new pregunta (1,'Cual es la respuesta correcta?',['ano se','que me importa','prueba prusssssssssssssssssssssseba prueba','l s s ff s s f'],1);
preguntas[1] = new pregunta (2,'Como es el que se o?',['ase','asa','asi','todas'],2);