//creamos la promesa
const promise = new Promise((res, rej)=>{
    
    setTimeout(()=>res('acabo timeout'),5000)
    let cont = 0;
    for(let i=0; i<1000000; i++){
        cont++;
    }
    res(cont);
});

//creamos la promesa
const promise2 = new Promise((res, rej)=>{
    
    let cont = 0;
    for(let i=0; i<10000; i++){
        cont++;
    }
    res(cont);

});

//consume la promesa
promise.then((res)=>console.log(res));
promise2.then((res)=>console.log('promise2',res));
console.log('hola');

