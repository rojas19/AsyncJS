'use strict';

(function(global){

    // const luis = {
    //     name: 'Luis',
    //     lastName: 'Perez',
    //     address : {
    //         street: '1st Avenue',
    //         city: 'NY'
    //     }
    // }   
    // const mario = {...luis, address:{...luis.address}};
    // mario.name = 'Mario';    
    // mario.address.street = '2nd Avenue';    
    // const Array1 = [1,2,3];
    // const Array2 = [...Array1];   
    // Array1.push(4);
    
    const stateGenerator = (initialState) => {
        const state = initialState;
        return {
            getState: () => ({...state}),
            addElement: (alumno) => state.alumnos.push(alumno)
        }
    }
    window.stateGenerator = stateGenerator;
})(window);