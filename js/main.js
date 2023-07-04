let n = Number(prompt("ingrese la cantidad de pacientes que tiene el consultorio"))
c=1;
class turno {
    constructor(fe,nom,ape,dni,docc)
    {
        this.fe= fe
        this.nom=nom
        this.ape=ape
        this.dni=dni
        this.docc=docc
    }
}
const doc1=(doc11,precio1)=>{return precio1*doc11}
const doc2=(doc12,precio2)=>{return precio2*doc12}
const doc3=(doc13,precio3)=>{return precio3*doc13}
let precio1=1000
doc11=0;
let precio2=1500
doc12=0;
let precio3=3000
doc13=0;
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
    let doc=Number(prompt("ingresar a que medico quiere solicitar el turno;\n 1-terapeuta 2-psicologo \n 3-cardiologo"))
    if (doc==1)
    {
        doc11=doc11+1
    }
    else
    {
        if(doc==2)
        {
            doc12=doc12+1
        }    
        else
        if(doc==3)
        {
            doc13=doc13+1
        }
        else
        {
            alert("no se ingreso ningun doctor")
        }
    }
    turnos.push(new turno(fecha,nombre,apellido,DNI,doc))
    c++;
}
for(const tur of turnos)
{
    console.log(turnos);
}
alert("terminado el cargado de los datos");
alert("Se decia ingresar algunas de estas cosas como: \n 1-eliminar un turno \n 2-encontrar el turno de un paciente por su apellido \n 3-Ordenar los turnos por :\n edad - alfabeticamente \n 4-Determina la ganancia total de los medicos")
let algomas=Number(prompt("Ingrese la opcion deseado (no, para cancelar alguna opcion"))
if( algomas!="no"){
    switch(algomas)
    { 
        case 1
            :
            console.log("Elimar turno")
            let nombreBuscado = prompt("Ingrese el nombre que desea buscar:");
            let indicesAEliminar = [];
            for (let i = 0; i < turnos.length; i++) {
            if (turnos[i].nom === nombreBuscado) {
                indicesAEliminar.push(i);
            }
            }
            for (let i = indicesAEliminar.length - 1; i >= 0; i--) {
            turnos.splice(indicesAEliminar[i], 1);
            }
            console.log("Turnos restantes:");
            for (const tur of turnos) {
            console.log(tur);
            }
            break;
            ;
        case 2
            :
            console.log("El turno con el apellido es:")
            let enco=prompt("Ingrese el apellido que decia encontrar y mostraremos su turno")
            const resultado=turnos.find((el)=>el.ape===enco)
            console.log(resultado)
            break
            ;
        case 3
            :
            let orde=prompt("Ingrese: \n 1 si quiere ordenar por edad de mayor a menos \n - 2 si quiere ordenar alfabeticamente")
            if(orde=1)
            {
                console.log("los turnos seran ordenas por edad desde la mas chica a la mas grande")
                turnos.sort((a,b)=>a-b);
                console.log(turnos)
            }
            else
            {
                if(orde=2)
                {
                    console.log("Ordenar los turnos alfabeticamente")
                    turnos.sort((a,b)=>{
                        if (a.nom > b.nom){
                            return 1;
                        }
                        if (a.nom < b.nom){
                            return -1;
                        }
                        return 0;
                        })
                    console.log(turnos)
                }
                else
                {
                    alert("No se ingreso nada")
                    console.log("No se ingreso nada")
                }
            }
            break
            ;
            case 4
                :
                let caulm=Number(prompt("ingrese el numero del doctor a saber la ganancia total"))
                if(caulm==1)
                {
                    alert("El total ganado por el doc 1 es: " + doc1(doc11,precio1));
                    console.log("El total ganado por el doc 1 es: " + doc1(doc11,precio1))
                }
                else
                {
                    if(caulm==2)
                    {
                        alert("El total ganado por el doc 2 es: " + doc2(doc12,precio2));
                        console.log("El total ganado por el doc 2 es: " +  doc2(doc12,precio2))
                    }
                    else
                    {
                        if(caulm==3)
                        {
                            alert("El total ganado por el doc 3 es: " + doc3(doc13,precio3));
                            console.log("El total ganado por el doc 2 es:" + doc3(doc13,precio3))
                        }                        
                    }
                }
                ;
            
    }
}