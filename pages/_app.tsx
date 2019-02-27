import React from "react";
import App, { Container, NextAppContext } from "next/app";
import { ApolloProvider } from "react-apollo";
import "normalize.css";
import "what-input";
import "../styles/app.scss";
import { AppBusProvider } from "../shared/app-bus";
import { Page, NotFooter } from "../shared/page";
import { Header } from "../modules/header";
import { Footer } from "../modules/footer";
import { ScrollListener } from "../shared/scroll";
import { SearchBar } from "../modules/search";
import apolloClient from "../apollo-client";

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
      <ApolloProvider client={apolloClient}>
        <AppBusProvider>
          <Container>
            <Page>
              <NotFooter>
                <ScrollListener />
                <Header />
                <SearchBar />
                <Component {...pageProps} />
              </NotFooter>
              <Footer />
            </Page>
          </Container>
        </AppBusProvider>
      </ApolloProvider>
    );
  }
}

export default MyApp;
