export const formatearDinero = (cantidad) =>{
    return cantidad.toLocaleString('es-ES',{
        style: 'currency',
        currency: 'EUR',
    });
}
export const formatearFecha = (milis)=>{
    const fechaEnMilisegundos = parseInt(milis); // fecha en milisegundos
    const fecha = new Date(fechaEnMilisegundos); // creamos un objeto Date a partir de la fecha en milisegundos
    const dia = fecha.getDate(); // día del mes (1-31)
    const mesNum = fecha.getMonth() + 1; // mes (0-11, por lo que se suma 1)
    const mes = fecha.toLocaleString('es-ES', { month: 'long' }); // nombre del mes
    const anio = fecha.getFullYear(); // año (4 dígitos)
    const hora = fecha.getHours(); // hora (0-23)
    let minutos = fecha.getMinutes(); 
    if(minutos<10)minutos= `0${minutos}`
    let segundos = fecha.getSeconds();
    if (segundos < 10) segundos = `0${ segundos }`
    //cambia el return según se necesite
    return (`${ dia } de ${ mes }, ${ hora }:${ minutos }`);
}