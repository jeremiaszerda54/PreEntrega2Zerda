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
let doc1=0;//doctor con mayor paciente
let doc2=0;
let doc3=0;
let doc4=0;
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
    switch (doc)
    {
        case 1
            :
            doc1=doc1+1;
            break
            ;
            case 2
            :
            doc2=doc2+1;
            break
            ;
            case 3
            :
            doc3=doc3+1;
            break
            ;
            case 4
            :
            doc4=doc4+1;
            break
            ;
        default
            :
            do
            {
                alert("Debe de ingresar uno de los 4 doctores")
                doc=prompt("Ingrese a que doctor se quiere diriguir \n 1- Terapeuta 2-Doctor \n 3- Psicologo 4-Doctor2")
            }while(doc<1 && doc>4);
            ;
    }
    turnos.push(new turno(fecha,nombre,apellido,DNI,doc))
    c++;
}
for(const tur of turnos)
{
    console.log(turnos);
}
alert("terminado el cargado de los datos");
alert("Se decia ingresar algunas de estas cosas como: \n 1-encontrar el doctor con mas pacientes \n 2-eliminar un turno \n 3-encontrar el turno de un paciente por su DNI \n 4-Ordenar alfabeticamente los turnos")
let algomas=Number(prompt("Ingrese la opcion deseado (no, para cancelar alguna opcion"))
if( algomas!="no"){
    switch(algomas)
    {
        case 1:
        
        break    
        ;
    }
}