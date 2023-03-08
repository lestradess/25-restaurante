import Head from 'next/head'
import Sidebar from '../components/Sidebar'
import Modal from 'react-modal'
import useQuiosco from '../hooks/useQuiosco';
import { ModalProducto } from '../components/ModalProducto';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Pasos from '../components/Pasos';
import { useRouter } from 'next/router';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};
Modal.setAppElement('#__next');

export default function Layout ({ children, pagina }) {
    const { modal } = useQuiosco();
    const router = useRouter();
    return (
        <>
            <Head>
                <title>Café - { pagina }</title>
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
                <meta name="description" conten="Quiosco Cafetería" />
            </Head>
            <div className='md:flex'>
                <aside className='md:w-4/12 xl:w-1/4 2xl:w-1/5 md:mt-10 '>
                    { router.pathname === '/' ? <Sidebar /> : ''}
                </aside>
                <main className='md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll'>
                    <div className='px-10 pt-10 md:pt-28'>{ children }</div>
                    <div className=' fixed top-0 w-full md:fixed md:w-8/12 xl:w-3/4 2xl:w-4/5 bg-white'>
                        <Pasos />
                    </div>
                </main>
            </div>
            {modal && (
                <Modal 
                isOpen={modal}
                style={customStyles}
                >
                    <ModalProducto />
                </Modal>
            )}
            <ToastContainer 
                position="bottom-right"
                autoClose={3000}
            />
        </>
    )
}