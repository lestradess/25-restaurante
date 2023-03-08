import Orden from './Orden'
import useSWR from 'swr'
import axios from 'axios'

const PedidosPendientes = ()=>{
    const fetcher = () => axios('/api/ordenes').then(datos => datos.data);
    const { data, error, isLoading } = useSWR('/api/ordenes', fetcher, { refreshInterval: 100 });

    return(
        <>
            <p className='text-2xl my-10'>Pedidos Pendientes:</p>
            {
                data && data.length ? data.map(orden =>
                    <Orden
                        key={ orden.id }
                        orden={ orden }
                    />
                ) : <p>No hay ordenes pendientes</p>
            }
        </>
        
    )
    
}
export default PedidosPendientes