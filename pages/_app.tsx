import '../styles/globals.css'
import App from 'next/app';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/styles.scss'


export default class UserService extends App {
  render() {
    const { Component, pageProps } = this.props;

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
        <>
          <Component {...pageProps} />
        </>
      </>
    );
  }
}
