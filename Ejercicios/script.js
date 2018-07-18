'use strict';
(() => {
    const reprobados = appendLI('reprobados');
    const asesorias = appendLI('asesorias');
    const becados = appendLI('becados');
    const calcular = document.getElementById('calcular');
    let alumnos;
    
    calcular.addEventListener('click',start);
    // start();

    function start(){
       
        document.getElementById('reprobados').innerText = "";
        document.getElementById('asesorias').innerText = "";
        document.getElementById('becados').innerText = "";

        fetch('/alumnos')
        .then((res)=>{                   
            return res.json();
        })
        .then((alumnos) => {
            imprimirAlumnos(alumnos);
        });

    }

    function start2(){
        
        fetch('/alumnos')
        .then((res)=>{                   
            return res.json();
        })
        .then((lista) => {
            alumnos = [...lista];
            
            alumnos.reduce
        });

        
    }

    function imprimirAlumnos(alumnos){
        
        let promR = 0, promA = 0, promB = 0;
        let c1 = 0, c2 = 0, c3 = 0;
        alumnos.forEach(alumno => {
            
            if(alumno.promedio < 30) {
                c1++;
                reprobados(alumno.nombre);
                promR += alumno.promedio;
            } else{
                if(alumno.promedio < 80){
                    c2++;
                    asesorias(alumno.nombre);
                    promA += alumno.promedio;
                }
                if(alumno.promedio >= 80 || alumno.destacado) {
                    c3++;
                    becados(alumno.nombre);
                    promB += alumno.promedio;
                }
            }   
        });
        reprobados("Promedio: "+(promR/c1));
        asesorias("Promedio: "+(promA/c2));
        becados("Promedio: "+(promB/c3));
    }

    function appendLI(id) {
        const list = document.getElementById(id);
        
        return (text) => {
            const listItem = document.createElement('li');
            listItem.appendChild(document.createTextNode(text));
            list.appendChild(listItem);
        }
    }
})();
