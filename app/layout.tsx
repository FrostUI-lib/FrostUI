import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head, Search } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import './globals.css'
 
export const metadata = {
  title: 'My Cool Docs site',
}
 
const banner = <Banner storageKey="some-key">this is beta version 4.0 is released 🎉</Banner>
const navbar = (
  <Navbar
    logo={<b>frost ui 😎</b>}
    chatLink='https://discord.gg/'
  />
)
const footer = <Footer>MIT {new Date().getFullYear()} my frost-ui library</Footer>

const search = <Search placeholder='Search Docs...'></Search>
 
export default async function RootLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
      // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/frost-ui/frost-ui"
          footer={footer}
          search={search}
          // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}