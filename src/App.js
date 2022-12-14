import './App.css';
import { useEffect, useState } from 'react';
import video from './food.mp4'
import MyRecipesComponent from './MyRecipesComponent';


function App() {

  const MY_ID = '807e6c7b'
  const MY_KEY = 'b4d8899675fa0c99635c117c08e4ff91'

  const [mySearch, setMySearch] = useState('');
  const [myRecipes, setMyRecipes] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState('avocado')

  useEffect(() => {
    getRecipes()
  }, [wordSubmitted])

  const getRecipes = async () => {
    const responce = await fetch (`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=807e6c7b&app_key=b4d8899675fa0c99635c117c08e4ff91`);
    //const responce = await fetch (`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}b&app_key=${MY_KEY}`);
    const data = await responce.json();
    console.log(data.hits);
    setMyRecipes(data.hits);
  }

  const myRecipeSearch = (e) => {
    setMySearch(e.target.value)
  }

   const finalSearch = (e) => {
    e.preventDefault();
    setWordSubmitted(mySearch)
   }


  return (
    <div className='App'>
      <div className='container'>
      <video autoPlay muted loop>
      <source src={video} type='video/mp4'/>
      </video>

      <h1>Find a Recipe</h1>
    </div>

    <div className='container'>
      <form onSubmit={finalSearch}>
        <input className='search' placeholder='Search...' onChange={myRecipeSearch} value={mySearch}>
        </input>
      </form>
    </div>

    <div className='container'>
      <button>
        <img src='https://img.icons8.com/fluency/48/000000/fry.png' className='icons' alt='egg'/>
      </button>

    </div>

    <div>
    {myRecipes.map(element => (
      <MyRecipesComponent 
      label={element.recipe.label}
      image={element.recipe.image} 
      calories={element.recipe.calories}
      ingredients={element.recipe.ingredientLines}
      />
    ))}
    </div>

    </div>
  );
}

export default App;
