import React from 'react'

export default function RecipeIngredientEdit(props) {
  const {
    ingredient,
    handleIngredientChange,
    handleIngredientDelete
  } = props
  const handleChanges=(changes)=>{
    handleIngredientChange(ingredient.id,{...ingredient,...changes})
  }
  return (
    <>
      <input
        value={ingredient.name}
        type="text"
        className="recipe-edit__input"
        onChange={(e) => handleChanges({ name: e.target.value })}
      />
      <input
        value={ingredient.amount}
        type="text"
        className="recipe-edit__input"
        onChange={(e) => handleChanges({ amount: e.target.value })}
      />
      <button
        onClick={() => {
          handleIngredientDelete(ingredient.id);
        }}
        className="btn btn--danger"
      >
        &times;
      </button>
    </>
  );
}
