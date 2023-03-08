import Image from 'next/image'
import useQuiosco from '../hooks/useQuiosco'
import Categoria from './Categoria';

const SidebarAdmin = () => {
    const { pendientes, setPendientes } = useQuiosco();

    return (
        <>
            <div className="flex justify-center">
                <Image
                    width={ 300 } height={ 100 }
                    src='/assets/img/logo.svg'
                    alt='Imagen logotipo' />
            </div>
            <nav className='mt-10'>
                <button
                    className={ `${pendientes? 'bg-amber-400' : '' } flex items-center gap-4 w-full border p-4 hover:bg-amber-400 text-2xl font-bold hover: cursor-pointer` }
                    type='button'
                    onClick={ () => setPendientes(!pendientes) }
                >
                    Pedidos pendientes
                </button>
                <button
                    className={ `${ !pendientes ? 'bg-amber-400' : '' } flex items-center gap-4 w-full border p-4 hover:bg-amber-400 text-2xl font-bold hover: cursor-pointer` }
                    type='button'
                    onClick={ () => setPendientes(!pendientes) }
                >
                    Pedidos Archivados
                </button>
            </nav>
        </>

    )
}

export default SidebarAdmin