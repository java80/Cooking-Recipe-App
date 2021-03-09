
const searchTerm = document.querySelector("#blank")

const searchButton = document.querySelector("#search")
const displayMealList = document.querySelector(".food-list")
//const messageToUserClass = document.querySelector(".message")
searchButton.addEventListener("click", getRecipe)

async function getRecipe(event) {
  
  try {
     
    let response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm.value}`)
    
   console.log(response.data.meals);
    
    showListofMeals(response.data.meals)
    
  }catch (err) {
    console.log(err);
}
    
}

function showListofMeals(meals) {
  
  if (meals) {
    const messagetouser = document.createElement("h1")
    messagetouser.innerText = "Here are some dishes you can make with " + searchTerm.value;
    displayMealList.appendChild(messagetouser)
    
    meals.forEach(element => {
      const mealname = document.createElement("h1")
      const mealImage = document.createElement("img")
      mealname.innerText = element.strMeal
      mealImage.src = element.strMealThumb
      //add another class here for 
  

      displayMealList.appendChild(mealname);
      displayMealList.appendChild(mealImage);
      //console.log(element.strMeal)
      
    });
  }

  else {
    console.log("no item")
  }
    
}

function removeMeals() {
    
  const getMealsOnDisplay = document.querySelectorAll(".food-list")

  getMealsOnDisplay.forEach(meal =>meal.remove());
    

}