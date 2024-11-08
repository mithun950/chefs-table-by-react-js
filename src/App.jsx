import { useState } from "react"
import Banner from "./Components/Banner"
import Header from "./Components/Header"
import OurRecipe from "./Components/OurRecipe"
import Recipes from "./Components/Recipes"
import SideBar from "./Components/SideBar"




function App() {

  const [recipeQueue,setRecipeQueue] = useState([])

  const [prepareRecipe,setPrepareRecipe] = useState([])

  

  const addRecipeToQueue = recipe =>{
    const isExist = recipeQueue.find(previousRecipe => previousRecipe.recipe_id === recipe.recipe_id )
    if( !isExist){
      setRecipeQueue([...recipeQueue,recipe])
    }
    else{
      alert('Recipe is already exists in the queue')
    }
  }

  const handleRemove = id => {
    // find which recipe remove
const deletedRecipe = recipeQueue.find(recipe => recipe.recipe_id === id )


// remove from want to cook table
const updatedQueue = recipeQueue.filter(recipe => recipe.recipe_id !== id)
 setPrepareRecipe(updatedQueue)
 setPrepareRecipe([...prepareRecipe,deletedRecipe])
}


  return (
    <>
    {/* header navbar */}
    <Header></Header>
    {/* banner section */}
    <Banner></Banner>

    {/* our resipe title */}
    <OurRecipe></OurRecipe>


    {/* cards and side bar section start */}

    <section className="flex flex-col md:flex-row gap-6">
    {/* recipe card section*/}

    <Recipes addRecipeToQueue={addRecipeToQueue} ></Recipes>


    {/* Side bar section */}

    <SideBar handleRemove={handleRemove} recipeQueue = {recipeQueue}  ></SideBar>
    </section>

    </>
  )
}

export default App
