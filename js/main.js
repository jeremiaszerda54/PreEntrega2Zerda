let n = Number(prompt("ingrese la cantidad de pacientes que tiene el consultorio"))
c=1;
class turno {
    constructor(fe,nom,ape,dni,doc)
    {
        this.fe= fe
        this.nom=nom
        this.ape=ape
        this.dni=dni
        this.doc=doc
    }
}

const turnos=[];
console.log
while(c<=n)
{
    //fecha del turno
    alert("Ingrese la fecha del paceinte numero " + c);
    let dia= Number(prompt("Ingrese el dia"))
    let mes= Number(prompt("Ingrese el mes"))
    let año= Number(prompt("Ingrese el año"))
    let fecha=new Date(año,(mes+1),dia)
    let nombre=prompt("Ingrese el nombre")
    let apellido=prompt("Ingrese el apellido")
    let DNI=prompt("Ingrese el documento")
    let doc=prompt("Ingrese a que doctor se quiere diriguir \n 1- Terapeuta 2-Doctor \n 3- Psicologo 4-Doctor2")
    turnos.push(new turno(fecha,nombre,apellido,DNI,doc))
    c++;
}
    for(const tur of turnos)
    {
        console.log(turnos);
    }
