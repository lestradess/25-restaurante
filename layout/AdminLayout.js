import Head from "next/head";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SidebarAdmin from '../components/SidebarAdmin';

export default function AdminLayout ({ children, pagina }) {
    return (
        <>
            <Head>
                <title>Café - { pagina }</title>
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
                <meta name="description" conten="Quiosco Cafetería" />
            </Head>

            <div className='md:flex'>
                <aside className='md:w-4/12 xl:w-1/4 2xl:w-1/5 mt-8'>
                    <SidebarAdmin />
                </aside>
                <main className='md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll'>
                    <div className='p-10'>{ children }</div>
                </main>
            </div>
            
            <ToastContainer
                position="bottom-right"
                autoClose={ 3000 }
            />
        </>
    );
}