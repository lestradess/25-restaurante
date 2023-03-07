import { useEffect, useCallback } from 'react'
import Layout from "../layout/Layout"
import useQuiosco from '../hooks/useQuiosco'
import { formatearDinero } from "../helpers";
import ResumenTotal from '../components/ResumenTotal';

export default function Total () {
    const { pedido, nombre, setNombre, colocarOrden, total } = useQuiosco();
    const comprobarPedido = useCallback(() => {
        return pedido.length === 0 || nombre === "" || nombre.length < 3;
        
    }, [ pedido, nombre ]);

    useEffect(() => {
        comprobarPedido();
    }, [ pedido, comprobarPedido ]);

    return (
        <Layout pagina="Confirmar Pedido">
            <h1 className="text-4xl font-black">Confirmar Pedido</h1>
            <p className="text-2xl my-10"> Pon tu nombre y confirma tu Pedido a Continuación:</p>
            <div>
                { pedido.length === 0 ? (
                    <p className="text-center text-2xl">Aún no se ha pedido nada</p>
                ) : (
                    pedido.map(producto => (
                        <ResumenTotal
                            key={ producto.id }
                            producto={ producto }
                        />
                    ))
                ) }
            </div>
            <form onSubmit={ colocarOrden }>
                <div className="mt-10">
                    <p className="text-2xl">
                        Total a pagar: { "" }{ " " }
                        <span className="font-bold">{ formatearDinero(total) }</span>
                    </p>
                </div>
                <div>
                    <label
                        htmlFor="nombre"
                        className="block uppercase text-slate-800 font-bold text-xl mt-5"
                    >
                        Nombre cliente
                    </label>

                    <input
                        id="nombre"
                        type="text"
                        className="bg-gray-200 w-full lg:w-1/3 mt-3 p-2 rounded-md"
                        value={ nombre }
                        onChange={ (e) => setNombre(e.target.value) }
                    />
                </div>

                

                <div className="mt-5">
                    <input
                        type="submit"
                        className={ `${ comprobarPedido()
                                ? "bg-indigo-100"
                                : "bg-indigo-600 hover:bg-indigo-800"
                            }  w-full lg:w-auto px-5 py-2 rounded uppercase font-bold text-white text-center` }
                        value="Confirmar Pedido"
                        disabled={ comprobarPedido() }
                    />
                </div>
            </form>
        </Layout>
    );
}