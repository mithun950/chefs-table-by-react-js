import PropTypes from "prop-types";
import { useState } from "react";
import { useEffect } from "react";
import Recipe from "./Recipe";


const Recipes = ({addRecipeToQueue}) => {

    const [recipes,setRecipes] = useState([]);

    useEffect(() => {
        fetch('recipes.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    },[])

        
    return (
        <div className="w-2/3 ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
             {
                recipes.map((recipe) =>
                   <Recipe addRecipeToQueue={addRecipeToQueue} key={recipe} recipe={recipe}></Recipe>
            
                )
             }
            </div>
        </div>
    );
};

Recipes.propTypes = {
   recipe:PropTypes.func
}
export default Recipes;