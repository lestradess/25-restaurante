import '/styles/globals.css'
import { QuioscoProvider } from '../context/QuioscoProvider'

export default function MyApp ({ Component, pageProps }) {
  return (
    
    <QuioscoProvider>
      <Component{ ...pageProps } />
    </QuioscoProvider>
  )
}
