import { useRouter } from 'next/router'


const pasos = [
    { paso: 1, nombre: 'Menú', url: '/' },
    { paso: 2, nombre: 'Resumen', url: '/resumen' },
    { paso: 3, nombre: 'Total', url: '/total' }
]

const Pasos = () => {
    const router = useRouter();
    let fondo;
    const calcularProgreso = () => {
        let valor;
        
        if (router.pathname === "/") {
            valor = 5;
            fondo = 'bg-amber-500'
        } else if (router.pathname === "/resumen") {
            valor = 50;
        } else {
            valor = 100;
        }
        return valor;
    };

    return (
        <>
            <div className='flex justify-between mx-10 mt-10 border px-2'>{ pasos.map(paso => (
                <button className={ `text-2xl font-bold ${fondo}` } key={ paso.paso }
                    onClick={ () => {
                        router.push(paso.url);
                    } }>
                    { paso.nombre }
                </button>
            )) }</div>
            <div className='bg-gray-100 mx-10 mt-3'>
                <div className='rounded-full bg-amber-500 text-xs leading-none h-2 text-center'
                    style={ { width: `${ calcularProgreso() }%` } }>
                </div>
            </div>
        </>
    )
}

export default Pasos