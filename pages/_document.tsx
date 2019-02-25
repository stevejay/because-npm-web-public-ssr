import Document, { Head } from "next/document";

export default class MyDocument extends Document {
  render() {
    const { html } = this.props;
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <link rel="shortcut icon" href="/static/favicon.png" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#e38337" />
          <link
            href="https://fonts.googleapis.com/css?family=Rokkitt:800|Raleway:300,500"
            rel="stylesheet"
          />
        </Head>
        <body>
          <div id="__next" dangerouslySetInnerHTML={{ __html: html! }} />
        </body>
      </html>
    );
  }
}
