import Image from 'next/image'
import { formatearDinero, formatearFecha } from '../helpers'
import axios from 'axios';
import { toast } from 'react-toastify';



export default function OrdenArchivada ({ orden }) {
    const { id, nombre, total, pedido, fecha } = orden;
    const CompletarOrden = async () => {
        try {
            await axios.post(`/api/ordenesAr/${ id }`)
            
            toast.success('Orden enviada')
        } catch (error) {
            toast.error('hubo un error')
        }
    }
    return (
        <div className='border p-10 space-y-2'>
            
            <div className='flex justify-between border p-2'>
                <h3 className="text-2lg font-bold ">Orden: { id }</h3>
                <h3 className="text-xl font-bold "> { formatearFecha(fecha) }</h3>
            </div>
            <p className='text-xl font-bold border p-2'>Cliente: { nombre }</p>
            <div>
                { pedido.map(plato => (
                    <div
                        key={ plato.id }
                        className=' flex justify-between border p-2'
                    >
                        <h3 className="text-lg font-bold">{ plato.nombre }</h3>
                        <h3 className="text-lg font-bold">{ plato.cantidad }</h3>
                        
                    </div>
                )) }
            </div>
            <div className='flex items-center justify-between'>
                <p className='font-black text-lg text-amber-500'>
                    Total: { formatearDinero(total) }
                </p>
                <button
                    className='bg-indigo-600 hover:bg-indigo-800 text-white  px-5 uppercase font-bol rounded-lg py-1 mt-2'
                    type='button'
                    onClick={ CompletarOrden }
                >Volver orden a pedidos</button>
            </div>
        </div>
    )
}