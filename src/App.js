import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Resources from './Routing/Resources';
import ComponentOnChoice from './Routing/Id';
export class App extends Component {
  state = {
    selectedData: {},
  };
  selectedHandler = (element) => {
    console.log('selected data App', element);
    this.setState({ selectedData: element });
  };
  render() {
    return (
      <>
        <Router>
          <Routes>
            <Route
              path="/"
              element={<Resources selectedHandler={this.selectedHandler} />}
            />
            <Route
              path="/id"
              element={
                <ComponentOnChoice selectedData={this.state.selectedData} />
              }
            />
          </Routes>
        </Router>
      </>
    );
  }
}

export default App;
