import Providers  from "./providers";

export default function RootLayout({ children }) {
 return (
    <Providers>
      <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  </Providers>
  )
}
