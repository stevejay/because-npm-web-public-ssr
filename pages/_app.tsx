import ApolloClient from "apollo-client";
import App, { Container, NextAppContext } from "next/app";
import "normalize.css";
import React from "react";
import { ApolloProvider } from "react-apollo";
import "what-input";
import { Footer } from "../src/modules/footer";
import { Header } from "../src/modules/header";
import { SearchBar } from "../src/modules/search";
import { AppBusProvider } from "../src/shared/app-bus";
import { NotFooter, Page } from "../src/shared/page";
import { ScrollListener } from "../src/shared/scroll";
import withApolloClient from "../src/apollo";
import "../styles/app.scss";

type Props = {
  apolloClient: ApolloClient<object>;
};

class MyApp extends App<Props> {
  static async getInitialProps({ Component, ctx }: NextAppContext) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, apolloClient } = this.props;
    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <AppBusProvider>
            <Page>
              <NotFooter>
                <ScrollListener />
                <Header />
                <SearchBar />
                <Component {...pageProps} />
              </NotFooter>
              <Footer />
            </Page>
          </AppBusProvider>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApolloClient(MyApp);
