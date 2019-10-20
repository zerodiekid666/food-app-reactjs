import React,{ useEffect, useState } from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () =>{

  const APP_ID = '3dd116e6';
  const APP_KEY = '167cdf43cbd7cccd7838f821990ba974';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }
  // const [counter, setCouter] = useState(0);
  useEffect(() => {
    console.log('Effect exist!');
    getRecipes();
  },[query]);


  const updateSearch = (e) =>{
    e.preventDefault()
    setSearch(e.target.value)
  }

  const getSearch = (e) => {
    e.preventDefault()
    setQuery(search)
    setSearch('')
  }



  return(
    <div className="App">
      <h1 id="title">Hello React App Food</h1>
      <form onSubmit={getSearch} className="search-form">
        <input className="search-input" type="text" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit">Search</button>
      </form>

      <div className='wrap-recipe'>
        {
          
          recipes.map(recipe => (
            
            <Recipe 
              key={recipe.recipe.label} 
              title={recipe.recipe.label} 
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
              />
          ))
        }
      </div>

    </div>
  );
}

export default App;
