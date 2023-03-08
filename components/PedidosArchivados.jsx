import OrdenArchivada from './OrdenArchivada'
import useSWR from 'swr'
import axios from 'axios'


const PedidosArchivados = () => {
    const fetcher = () => axios('/api/ordenesArchivadas').then(datos => datos.data);
    const { data, error, isLoading } = useSWR('/api/ordenesArchivadas', fetcher, { refreshInterval: 100 });

    return (
        <>
            <p className='text-2xl my-10'>Pedidos Archivados:</p>
            {
                data && data.length ? data.map(orden =>
                    <OrdenArchivada
                        key={ orden.id }
                        orden={ orden }
                    />
                ) : <p>No hay ordenes archivadas</p>
            }
        </>

    )

}
export default PedidosArchivados