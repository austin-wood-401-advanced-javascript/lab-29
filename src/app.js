import React from 'react';
import Form from './components/form.js';
import Title from './components/title.js';
import List from './components/list.js';

import './styles.css';


class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      people:[],

    }
  }

  componentDidMount() {
    fetch('https://swapi.co/api/people/')
    .then(data => data.json())
    .then(jsonResult => {
      console.log(jsonResult)
      this.setState({people:jsonResult.results});
    })
    .catch(console.error);
  }
 
  addItem = (string) => {
    this.state.people.push({name:string});
    this.setState({people:this.state.people})
  }

  deleteItem = (idx) => {
    this.state.people.splice(idx,1);
    this.setState({people:this.state.people});
  }


  render() {
    return (
          <>
      <Title/>
      <List people= {this.state.people}
      deleteItem = {this.deleteItem}/>
      <Form addItem= {this.addItem}/>
      </>
    );
  }
}

export default App;
