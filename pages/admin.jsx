import AdminLayout from '../layout/AdminLayout'
import PedidosPendientes from '../components/PedidosPendientes'
import PedidosArchivados from '../components/PedidosArchivados'
import useQuiosco from '../hooks/useQuiosco'

export default function Admin () {
    const { pendientes } = useQuiosco();
    return (
        <AdminLayout pagina={ 'Admin' }>
            <h1 className="text-4xl font-black">Panel de administración</h1>
            {pendientes? <PedidosPendientes /> : <PedidosArchivados />}
        </AdminLayout>
    )
}