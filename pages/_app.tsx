// import '../styles/globals.css'
// import App from 'next/app';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/styles.scss'
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../lib/apolloClient";


export default function App({Component, pageProps}) {
    const apolloClient = useApollo(pageProps.initialApolloState);

    return (
      <>
        <Head>
          <title>User Service</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700;800&display=swap"
            rel="stylesheet"
          />
        </Head>
  
          <ApolloProvider client={apolloClient}>
            <Component {...pageProps} />
          </ApolloProvider>
      
      </>
    );
  
}
