import React from "react";
import App, { Container, NextAppContext } from "next/app";
import "normalize.css";
import "what-input";
import "../styles/app.scss";
import { Page, NotFooter } from "../shared/page";
import { Header } from "../modules/header";
import { Footer } from "../modules/footer";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }: NextAppContext) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Page>
          <NotFooter>
            {/* <ScrollListener /> */}
            <Header />
            {/* <SearchBar /> */}
            <Component {...pageProps} />
          </NotFooter>
          <Footer />
        </Page>
      </Container>
    );
  }
}

export default MyApp;
