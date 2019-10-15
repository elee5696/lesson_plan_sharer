import React from 'react';
import Header from './header';
import Projectsubmit from './projectSubmit';
import SecondSubmit from './secondSubmitPage';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Projectsubmit/>
      </div>
    );
  }
}
