import Navigation from './Navigation'
import Head from "next/head"

function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>KOZANOSTRA</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navigation />
      <main>{children}</main>

      <footer>designed by mk</footer>
    </div>
  )
}

export default Layout
