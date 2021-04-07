import React, { Component } from 'react'
import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      monsters:[],
      searchField:""
    };
  }
  

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(res=>
      res.json())
    .then(users=> this.setState({monsters:users}))
  };

  changeHandler=(e)=>{
    this.setState({
      searchField: e.target.value
    });
  }


  render() {
    const { monsters,searchField}=this.state;
    const filterMonster=monsters.filter(monster=>monster.name.toLowerCase().includes(searchField.toLowerCase()));
    
    return (
      <div className="App">
        <h1 className="logo">Monsters Rolodex</h1>
        <SearchBox changeHandler={this.changeHandler} placeholder="search for the monster"/>
        <CardList monsters= {filterMonster}/>
      </div>
    )
  }
}




export default App;