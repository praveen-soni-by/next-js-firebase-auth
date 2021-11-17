import { AppProps } from 'next/dist/shared/lib/router/router'
import 'tailwindcss/tailwind.css'
import Navbar from '../components/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }:AppProps) {
  return (
  <>
  <Navbar/>
  <Component {...pageProps} />
  </>
  )
}

export default MyApp
