import './App.css';

import React from 'react';
import Header from './Components/Layout/Header';
import Main from './Components/Layout/Main';
// import Header from './Store/containers/header.container';
// import Main from './Store/containers/main.container';

function App(props) {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
