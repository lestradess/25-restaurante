import Image from 'next/image'
import useQuiosco from '../hooks/useQuiosco'
import Categoria from './Categoria';



const Sidebar = () => {
    const { categorias } = useQuiosco();
    return (
        <>
            <div className="flex justify-center collapse md:visible">
                <Image
                    width={ 200 } height={ 50 }
                    src='/assets/img/logo.svg'
                    alt='Imagen logotipo' />
            </div>
            <nav className='md:mt-10 md:flex-none md:static md:flex-col flex top-28 absolute mb-5 h-5'>
                { categorias.map(categoria =>(
                    <Categoria 
                        key={categoria.id}
                        categoria={categoria}
                    />
            ))}
            </nav>
        </>
        
    )
}

export default Sidebar