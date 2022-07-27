export default function GetRecipesData(ingredients:string[], callback:(json:JSON)=>void){
    let url = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=7031be6c03604978bcc55b5609002c6e' 
              + '&includeIngredients=' + ingredients.join() 
              + '&addRecipeInformation=true'
              + '&number=1'
    return (
        fetch(url)
        .catch((error) =>  console.warn(error))
        .then((response) => response && response.json())
        .then((json) => callback(json))
    )
}

// https://api.spoonacular.com/recipes/complexSearch?apiKey=7031be6c03604978bcc55b5609002c6e&includeIngredients=Pâtes,Beurre,Pesto&number=1&fillIngredients=true