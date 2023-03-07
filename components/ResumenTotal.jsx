import { formatearDinero } from '../helpers'




const ResumenTotal = ({ producto }) => {

    return (
        <div className='shadow p-5 mb-3 flex gap-10 items-center'>
            
            <div className="md:w-full">
                <div className="flex ">
                    <p className="w-1/12 font-bold mr-2">{ producto.cantidad }</p>
                    <p className="w-10/12 font-bold mr-2">{ producto.nombre }</p>
                    <p className="w-1/12 font-bold text-amber-500">{ formatearDinero(producto.precio) }</p>
                </div>
                <p className="text-sm font-bold text-gray-400 mt-1">{ `Subtotal: ${ formatearDinero(producto.precio * producto.cantidad) }` }</p>
            </div>
        </div>
    )
}

export default ResumenTotal