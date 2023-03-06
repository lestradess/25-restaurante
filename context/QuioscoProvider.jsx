import axios from 'axios'
import { useState, useEffect, createContext } from 'react'
import { toast } from 'react-toastify'


const QuioscoContex = createContext()

const QuioscoProvider = ({ children }) => {
    const [ categorias, setCategorias ] = useState([]);
    const [ categoriaActual, setCategoriaActual ] = useState({});
    const [ producto, setProducto ] = useState({});
    const [ modal, setModal ] = useState(false);
    const [ pedido, setPedido ] = useState([]);

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
    const handleChangeModal = () => {
        setModal(!modal);
    }
    // DEesta forma dejamos fuera categoriaId e imagen, solo se pasan los demás elementos.
    const handleAgregarPedido = ({ categoriaId, imagen, ...producto }) => {
        //con some retorna true o false si existe ese producto
        if (pedido.some(productoState => productoState.id === producto.id)) {
            const pedidoActualizado = pedido.map(productoState => productoState.id === producto.id ? producto : productoState);
            setPedido(pedidoActualizado);
            toast.success('Actualizado correctamente')
        } else {
            setPedido([ ...pedido, producto ])
            toast.success('Agredago al pedido')
        }
        setModal(false);
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
                handleAgregarPedido,
                pedido,
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