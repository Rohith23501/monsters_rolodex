// import {Component} from 'react';
import {useState, useEffect} from 'react';
// import logo from './logo.svg';
import './App.css';
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState([]);

  

  useEffect(()=>
  {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) =>  response.json())
    .then((users)=>  
      setMonsters(users));
  }, []);

  const onSearchChange = (event) =>{
    setSearchField(event.target.value.toLocaleLowerCase());
  }
  
  useEffect(()=>
  {setFilteredMonsters( monsters.filter((monster) =>{
    return monster.name.toLocaleLowerCase().includes(searchField);
  }));} , [monsters, searchField]);

  return (
    <div className="App">
      <h1 className="app-title"> Monsters Arena </h1>
      
      <SearchBox
        className={"monster-search-box"}
        placeholder={"search monsters"}
        onChangeHandler={onSearchChange}/>
        <CardList 
          monsters={filteredMonsters}/>
      
    </div>
  );
}
// class App extends Component {
//   constructor(){
//     super();
//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }


//   componentDidMount(){
    
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) =>  response.json())
//     .then((users)=>  
//       this.setState(
//         () =>
//         {
//           return {monsters:users,
//           };
//         },
  
//       ));
//   }


//   onSearchChange = (event) =>
//   {
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return {searchField};
//     });
//   }


//   render() {
//     const {monsters, searchField} = this.state;
//     const {onSearchChange} = this;
//     const LocalMonsters = monsters.filter((monster) => 
//     {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     })
//     return (
      
//       <div className="App">
//         <h1 className="app-title"> Monsters Arena </h1>
//         <SearchBox
//         className={"monster-search-box"}
//         placeholder={"search monsters"}
//         onSearchChange={onSearchChange}/>
        
//          <CardList
//          some_monsters={LocalMonsters}/>
        
//       </div>
//     );
//   }
// }

export default App;
