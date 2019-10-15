import React from 'react';
import Header from './header';
import Projectsubmit from './projectSubmit';
import ProjectList from './project-list';
// import ProjectDetails from './project-details';
import SecondSubmit from './secondSubmitPage';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   view: {
    //     name: 'list',
    //     params: {}
    //   }
    // // };
    // this.setView = this.setView.bind(this);
  }

// setView(name, params) {
//   this.setState({
//     view: {
//       name: name,
//       params: params
//     }
//   });
//  }

  render() {
    // if (this.state.view.name === 'details') {
    //   return (
    //     <div>
    //       <Header/>
    //       <Projectsubmit/>
    //       <ProjectDetails
    //       params={this.state.view.params.id}
    //       view={this.setView}
    //       />
    //     </div>
    //   );
    // } else if (this.state.view.name === 'list') {
      return (
        <div>
          <Header/>
          <Projectsubmit/>
          <ProjectList
          // view={this.setView}
          />

        </div>
      );
    }
  }
// }
