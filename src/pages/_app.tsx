import { AppProps } from "next/app"
import { globalStyles } from "../styles/global"
import logoImg from "../assets/logo.svg"
import { Container, Header } from "../styles/pages/app"

import Image from "next/image"
import Link from "next/link"
import { Cart } from "@/components/Cart"
import { CartContextProvider } from "@/contexts/CartContext"

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartContextProvider>
      <Container>
        <Header>
          <Link href='/'>
            <Image src={logoImg} alt="" />
          </Link>
          <Cart />
        </Header>
        <Component {...pageProps} />
        </Container>
    </CartContextProvider>
   
  )
}
