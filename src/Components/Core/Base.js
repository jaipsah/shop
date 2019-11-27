import React from "react";

function Base(WrappedComponent) {
  return class Base extends React.Component {
    render() {
      return (
            <WrappedComponent {...this.props} />
      );
    }
  };
}

export default Base;
