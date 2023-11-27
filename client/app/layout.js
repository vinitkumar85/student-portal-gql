import Providers  from "./providers";
import Header from "../components/header";
import Footer from "../components/footer";

export default function RootLayout({ children }) {
 return (
    <Providers>
      <html lang="en">
      <body>
        <header><Header/></header>
        <main>{children}</main>
        <footer><Footer/></footer>
      </body>
    </html>
  </Providers>
  )
}
