import Image from 'next/image';
import useQuiosco from '../hooks/useQuiosco';


const Categoria = ({ categoria }) => {
    const { categoriaActual, handleClickCategoria } = useQuiosco()
    const { nombre, icono, id } = categoria;
    return (
        <button 
            className={ `${ categoriaActual?.id === id ? 'bg-amber-400' : '' } flex items-center gap-4 w-full border p-4 hover:bg-amber-400 text-2xl font-bold hover: cursor-pointer` }
            type='button'
            onClick={ () => handleClickCategoria(id) }
        >
            <Image
                width={ 70 }
                height={ 70 }
                src={ `/assets/img/icono_${ icono }.svg` }
                alt='Imagen icono'
            />
            { nombre }
            
        </button>
    )
}

export default Categoria