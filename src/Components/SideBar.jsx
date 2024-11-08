

const SideBar = ({recipeQueue,handleRemove}) => {
    return (
        <div className="w-1/3 border-2 rounded-2xl shadow-lg px-10">
            <h2 className="text-2xl text-center font-bold mt-3">Want to Cook: {recipeQueue.length}</h2>
           <hr/>
            
            {/* Want to cook table */}
<div className="overflow-x-auto">
  <table className="table">

    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
        <th></th>
      </tr>
    </thead>

    <tbody>
      {
      recipeQueue.map((recipe,index) => (
        <tr className="hover" key={index}>
      <th>{index + 1}</th>
      <td>{recipe.recipe_name}</td>
      <td>{recipe.preparing_time}</td>
      <td>{recipe.calories}</td>
      <td>
        <button onClick = {() => handleRemove(recipe.recipe_id)}
      className=' btn bg-[#0BE58A]  rounded-2xl font-semibold'>
        Preparing
        </button>
        </td>
    </tr>))
      }
      
    </tbody>
  </table>
</div>

            {/* Currently cooking table */}


        </div>
    );
};

export default SideBar;