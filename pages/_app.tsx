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
import withApolloClient from "../with-apollo-client";
import ApolloClient from "apollo-client";

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
