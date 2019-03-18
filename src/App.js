import React, { Component } from 'react';
import A from './components/A';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isParent:true,
      name:'app'
    };
  }

  componentDidMount(){
      console.log(this);
  }

  render() {
    return (
        <div>
            <A/>
            <h1>isParent:{this.state.isParent.toString()}</h1>
        </div>
    );
  }
}

export default App;
