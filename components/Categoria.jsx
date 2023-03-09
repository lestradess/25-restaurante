import Image from 'next/image';
import useQuiosco from '../hooks/useQuiosco';


const Categoria = ({ categoria }) => {
    const { categoriaActual, handleClickCategoria } = useQuiosco()
    const { nombre, icono, id } = categoria;
    return (
        <div className='flex'>
            <button
                className={ `${ categoriaActual?.id === id ? 'bg-amber-400' : '' } flex  md:w-full border p-4 hover:bg-amber-400 hover: cursor-pointer text-xs md:font-bold md:text-2xl md:gap-3` }
                type='button'
                onClick={ () => handleClickCategoria(id) }
            >
                <div className=''>
                    <Image
                        width={ 70 }
                        height={ 70 }
                        src={ `/assets/img/icono_${ icono }.svg` }
                        alt='Imagen icono'
                        className=''
                    />
                </div>
                <div className=''>
                    { nombre }
                </div>
            </button>
        </div>
    )
}

export default Categoria