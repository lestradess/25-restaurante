import axios from 'axios'
import { useState, useEffect, createContext } from 'react'


const QuioscoContex = createContext()

const QuioscoProvider = ({ children }) => {
    const [ categorias, setCategorias ] = useState([]);
    const [ categoriaActual, setCategoriaActual ] = useState({});
    const [ producto, setProducto ] = useState({});
    const [ modal, setModal ] = useState(false);
    const obtenerCategorias = async () => {
        const { data } = await axios('/api/categorias')
        setCategorias(data);
    }
    useEffect(() => {
        obtenerCategorias();
    }, []);
    //Se carga la primera categoria por defecto.
    useEffect(() => {
        setCategoriaActual(categorias[ 0 ])

    }, [ categorias ]);
    const handleClickCategoria = id => {
        const categoria = categorias.filter(cat => cat.id === id)
        setCategoriaActual(categoria[ 0 ])
    }
    const handleSetProducto = producto => {
        setProducto(producto)
    }
    const handleChangeModal =()=>{
        setModal(!modal);
    } 

    return (
        <QuioscoContex.Provider
            value={ {
                categorias,
                categoriaActual,
                handleClickCategoria,
                producto,
                handleSetProducto,
                modal,
                handleChangeModal,
            } }
        >
            { children }
        </QuioscoContex.Provider>
    )
}
export {
    QuioscoProvider
}
export default QuioscoContex;