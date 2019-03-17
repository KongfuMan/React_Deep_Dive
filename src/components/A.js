import React,{Component} from 'react';


class A extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    componentDidMount(){
        console.log(this);
    }

    render(){
        return(
            <div>This is Component A</div>
        );
    }

}

export default A;
