function MyRecipesComponent({label, image, calories, ingredients}) {
    return(<div>
        
        <div className="container">
        <h2>{label}</h2>
        </div>

        <div className="container">
        <img src={image} alt='food'/>
        </div>

        <div className="container">
        <ul className="list">
            {ingredients.map(ingredient => (
                <li><img src='https://img.icons8.com/fluency/2x/instagram-check-mark.png' className='icon' alt='mark'/>{ingredient}</li>
            ))}
        </ul>
        </div>

        <div className="container">
        <p>{calories.toFixed()} calories</p>
        </div>

    </div>)
}

export default MyRecipesComponent;