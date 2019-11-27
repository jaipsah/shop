import React from "react";

function WithContext(WrappedComponent) {
  return class WithContext extends React.Component {
    constructor() {
      super();
      this.state = {
        list: null,
        selected: 0,
        total: 0,
        setSelected: this.setSelected
      };
      this.getList = this.getList.bind(this);
      this.setSelected = this.setSelected.bind(this);
    }

    componentDidMount() {
      let data = this.getList();
      data
        .then(picz => picz.json())
        .then(pics => this.setState({ list: pics }));
    }

    async getList() {
      let data = await fetch(
        "https://jsonplaceholder.typicode.com/albums/1/photos"
      );
      return data;
    }

    setSelected(){
      this.selected += 1;
    }

    render() {
      let { list, ...otherProps } = this.state;
      if (!list) {
        return <em>Loading...</em>;
      }
      return <WrappedComponent list={this.state.list} {...otherProps} />;
    }
  };
}

export default WithContext;
