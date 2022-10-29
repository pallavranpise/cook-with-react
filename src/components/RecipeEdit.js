import React,{useContext} from 'react'
import RecipeIngredientEdit from './RecipeIngredientEdit';
import { RecipeContext } from './App';
import { v4 } from 'uuid';
export default function RecipeEdit({recipe}) {
  const {handleRecipeChange,handleRecipeSelect} = useContext(RecipeContext)

  const handleChanges=(changes)=>{
    handleRecipeChange(recipe.id,{...recipe,...changes})
  }

  const handleIngredientChange=(id, ingredient)=>{
    const newIngredients = [...recipe.ingredients]
    const index = newIngredients.findIndex(i=>i.id===id)
    newIngredients[index] = ingredient
    handleChanges({ingredients:newIngredients})

  }

  const handleIngredientAdd=()=>{
    const newIngredient={
      id:v4(),
      name:'',
      amount:''}
      handleChanges({ingredients:[...recipe.ingredients,newIngredient]})
    }


    const handleIngredientDelete=(id)=>{
      handleChanges({
        ingredients:recipe.ingredients.filter(each=>each.id !== id)})
      }
  



return (
  <div className="recipe-edit">
    <div className="recipe-edit__remove-button-container">
      <button
        onClick={() => handleRecipeSelect(undefined)}
        className="btn recipe-edit__remove-button"
      >
        &times;
      </button>
    </div>
    <div className="recipe-edit__details-grid">
      <label htmlFor="name" className="recipe-edit__label">
        Name
      </label>
      <input
        value={recipe.name}
        type="text"
        name="name"
        id="name"
        className="recipe-edit__input"
        onChange={(e) => handleChanges({ name: e.target.value })}
      />
      <label htmlFor="cookTime" className="recipe-edit__label">
        Cooking time
      </label>
      <input
        value={recipe.cookTime}
        type="text"
        name="cookTime"
        id="cookTime"
        className="recipe-edit__input"
        onChange={(e) => handleChanges({ cookTime: e.target.value || "" })}
      />
      <label htmlFor="servings" className="recipe-edit__label">
        Servings
      </label>
      <input
        value={recipe.servings}
        type="number"
        min="1"
        name="servings"
        id="servings"
        className="recipe-edit__input"
        onChange={(e) =>
          handleChanges({ servings: parseInt(e.target.value) || "" })
        }
      />
      <label htmlFor="instructions" className="recipe-edit__label">
        Instructions
      </label>
      <textarea
        value={recipe.instructions}
        name="instructions"
        id="instructions"
        className="recipe-edit__input"
        onChange={(e) => handleChanges({ instructions: e.target.value })}
      />
    </div>
    <br />
    <label className="recipe-edit__label">Ingredients</label>
    <div className="recipe-edit__ingredient-grid">
      <div>Name</div>
      <div>Amount</div>
      <div></div>
      {recipe.ingredients.map((ingredient) => (
        <RecipeIngredientEdit
          key={ingredient.id}
          ingredient={ingredient}
          handleIngredientChange={handleIngredientChange}
          handleIngredientDelete={handleIngredientDelete}
        />
      ))}
      <div className="recipe-edit__add-ingredient-btn-container">
        <button
          onClick={() => handleIngredientAdd()}
          className="btn btn--primary"
        >
          add Ingredient
        </button>
      </div>
    </div>
  </div>
);
}
