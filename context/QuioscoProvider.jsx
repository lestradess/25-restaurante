import axios from 'axios'
import { useRouter } from 'next/router'
import { useState, useEffect, createContext } from 'react'
import { toast } from 'react-toastify'


const QuioscoContex = createContext()

const QuioscoProvider = ({ children }) => {
    const router = useRouter();
    const [ categorias, setCategorias ] = useState([]);
    const [ categoriaActual, setCategoriaActual ] = useState({});
    const [ producto, setProducto ] = useState({});
    const [ modal, setModal ] = useState(false);
    const [ pedido, setPedido ] = useState([]);
    const [ nombre, setNombre ] = useState('');
    const [total, setTotal] = useState(0);

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
    useEffect(() => {
        const nuevoTotal = pedido.reduce((total, producto)=>(producto.precio * producto.cantidad)+ total, 0);
        setTotal(nuevoTotal);
    }, [pedido]);
    const handleClickCategoria = id => {
        const categoria = categorias.filter(cat => cat.id === id);
        setCategoriaActual(categoria[ 0 ]);
        router.push('/');
    }
    const handleSetProducto = producto => {
        setProducto(producto)
    }
    const handleChangeModal = () => {
        setModal(!modal);
    }
    // DEesta forma dejamos fuera categoriaId e imagen, solo se pasan los demás elementos.
    const handleAgregarPedido = ({ categoriaId, ...producto }) => {
        //con some retorna true o false si existe ese producto
        if (pedido.some(productoState => productoState.id === producto.id)) {
            const pedidoActualizado = pedido.map(productoState => productoState.id === producto.id ? producto : productoState);
            setPedido(pedidoActualizado);
            toast.success('Actualizado correctamente')
        } else {
            setPedido([ ...pedido, producto ])
            toast.success('Agregado al pedido')
        }
        setModal(false);
    }
    const handleEditarCantidades = id => {
        const productoActualizar = pedido.filter(producto => producto.id === id);
        setProducto(productoActualizar[ 0 ]);
        setModal(!modal)
    }
    const handleEliminarProducto = id => {
        const pedidoActualizado = pedido.filter(producto => producto.id !== id);
        setPedido(pedidoActualizado);
    }
    const colocarOrden = async (e)=>{
        e.preventDefault();

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
                handleEditarCantidades,
                handleEliminarProducto,
                nombre,
                setNombre,
                colocarOrden,
                total,
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