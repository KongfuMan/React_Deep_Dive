import React, { Component } from 'react';
import A from './components/A';
import Button from './components/Button'

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
    let mytag = Symbol('mytag');
    return (
        <div>
            <A/>
            <Button color={'red'} children={'button-text'}/>
            <h1>This a h1 tag</h1>
            <mytag/>
        </div>
    );
  }
}

export default App;
