import React,{Component} from 'react';
import './Test.scss';


type PropsType = {
  text: string,
}


export  class TestComponent extends Component <PropsType,any> {

    render() {
      return  (
        <div className="TestComponent">
          {this.props.text}
        </div>
    );
    }
  }


export default TestComponent
