import React from 'react'

const Recipe = ({title, calories, image, ingredients}) => {
  return(
    <div className="Recipe">
      <h1>{title}</h1>
      <h4>Calories:{Math.floor(calories)}/kcal</h4>
      <img src={image} alt={title} />
      <ol>
        {ingredients.map(ingredient =>(
          <li key={Math.random() * ingredients.indexOf(ingredient)}>{ingredient.text}</li>
        ))}
      </ol>
    </div>
  );

};


export default Recipe;