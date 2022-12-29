import logo from './logo.svg';
import './App.css';
import User from './User';
import { PureComponent } from 'react';

class App extends PureComponent{
constructor(){
  super();
  this.state={
    count:1
  }
}
  render()
  {
    console.warn("checking")
  return (
    <div className="App">
      <h1>Pure component {this.state.count}</h1>
      <button onClick={()=>this.setState({count:this.state.count})}>click</button>
    </div>


)
  }

}

export default App;
