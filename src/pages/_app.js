import Layout from "@/components/Layout";
import "@/styles/globals.css";
import { AppProvider } from "../../context/AppContext";
export default function App({ Component, pageProps, router }) {
  if (router.pathname ==="/404" || router.pathname ==="/signup" || router.pathname === "/login"){
    return(
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    )
  }
  return(
    <Layout>
     <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </Layout>

  ) 
}
