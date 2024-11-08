
import { list } from 'postcss';
import PropTypes from 'prop-types'

function Recipe({recipe,addRecipeToQueue}) {
    const {recipe_name,recipe_img,short_description,ingredients,preparing_time,calories} = recipe;
  return (
    <div className='border-2 rounded-2xl shadow-xl'>
      <img className='w-full rounded-t-2xl h-[300px] object-cover' src={recipe_img} alt="" />
      <h3 className='text-2xl font-bold mt-2 ml-2'>{recipe_name}</h3>
      <p className='text-slate-500 mt-2 ml-2'>{short_description}</p>

      <hr className='mt-3' />
      <h4 className='mt-3 text-2xl font-semibold ml-2'>Ingredients: {ingredients.length}</h4>
      
      <ul className='ml-8 mt-2 mb-3 text-slate-600'>
        {recipe.ingredients.map((item,index) => <li className='list-disc' key={index} > {item}</li>)}
      </ul>
      <hr className='mt-2 mb-2' />
      <div className='flex justify-around gap-12 mb-3'>
        <p><i className="fa-regular fa-clock"></i> {preparing_time}</p>
        <p> <i className="fa-solid fa-fire"></i> {calories} calories</p>
        
       
      </div>
      <button onClick={() =>addRecipeToQueue(recipe)} className='btn bg-[#0BE58A] mb-5 ml-6 px-4 py-2 rounded-2xl font-semibold'>Want to Cook</button>

    </div>
  )
}

Recipe.propTypes = {
 recipe: PropTypes.object
}

export default Recipe

