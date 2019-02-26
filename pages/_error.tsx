import React from "react";
import { default as Error, DefaultErrorIProps } from "next/error";

class CustomError extends React.Component<DefaultErrorIProps> {
  static getInitialProps({ res, err }: any) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
  }

  render() {
    return <Error statusCode={this.props.statusCode} />;
  }
}

export default CustomError;
