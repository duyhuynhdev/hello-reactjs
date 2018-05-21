import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const list  = [
  {
    title: 'React',
    url: 'https://facebook.github.io/react/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0
  },
  {
    title: 'Redux',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1
  }
];
const user = {
  fistname: " Duy",
  lastname: "Huynh"
};
const isSearched = (searchTerm) => (item) => item.title.toLowerCase().includes(searchTerm.toLowerCase())
class App extends Component {
  constructor(props){
      super(props);
      this.state = {
        list: list,
        user: user,
        searchTerm: ''
      } ;
      this.onDismiss = this.onDismiss.bind(this);
      this.onSearchChange = this.onSearchChange.bind(this);
      
  }
  onDismiss(id){
       const isNotId = item => item.objectID !== id;
       const updatedList = this.state.list.filter(isNotId); 
       this.setState({list:updatedList});
  }
  onSearchChange(event){
    this.setState({ searchTerm: event.target.value });
 }
  render() {
    
    return (
      <div className="App"> 
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React, {this.state.user.fistname + " "+ this.state.user.lastname}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div >
          <h3>Load list and event first approaching</h3>
          { this.state.list.map( item => (
                <div key={item.objectID}>
                  <h3><a href={item.url}>{item.title}</a></h3>
                  <span>{item.author}</span>
                  <span>{item.num_comments}</span>
                  <span>{item.points}</span><br></br>
                  <span>
                    <button onClick = {()=> this.onDismiss(item.objectID)} type = "button">
                    Dismiss
                    </button>
                  </span>
                </div>)
          )}
        </div>
        <div>
          <h3>More events and form interaction in ReactJS</h3>
          <form>
            <input type="text" onChange={this.onSearchChange}/>
          </form>
          <h4>Search term: {this.state.searchTerm}</h4>
          { this.state.list.filter(isSearched(this.state.searchTerm)).map( item => (
                <div key={item.objectID}>
                  <h3><a href={item.url}>{item.title}</a></h3>
                  <span>{item.author}</span>
                  <span>{item.num_comments}</span>
                  <span>{item.points}</span>
                </div>)
          )}
        </div>
        
      </div>
    );
  }
}

export default App;
