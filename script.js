
const searchTerm = document.querySelector("#blank")

const searchButton = document.querySelector("#search")
const displayMealList = document.querySelector(".food-list")
//const grabresultDiv = document.querySelector(".hidden-result-class")
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
  removeMeals();
  if (meals) {
    const messagetouser = document.createElement("h1")
    //const linebreak = document.createElement("br");
    messagetouser.innerText = "Here are some dishes you can make with " + searchTerm.value;
  
    displayMealList.appendChild(messagetouser)
   // displayMealList.appendChild(linebreak)
    messagetouser.classList.add("message-class")
    meals.forEach(element => {
      const mealDiv = document.createElement("div")
      mealDiv.addEventListener('click', () => {
        displayMealList.classList.toggle("hidden-result-class")
       console.log(element)
      
      })
 
      

      const mealname = document.createElement("h1")
      const mealImage = document.createElement("img")
      mealImage.classList.add('Image-class');
      const mealInstruction = document.createElement('p');
      const mealIngredients = document.createElement("p")
      const instructionHeading = document.createElement("h1")
      const ingredientheading = document.createElement("h2")
      mealname.innerText = element.strMeal
      mealImage.src = element.strMealThumb

      instructionHeading.innerText = "Instructions"
      ingredientheading.innerText = "Ingredients"
      mealInstruction.innerText = element.strInstructions
      const arryOfIngredients = []
      for (let i = 1; i < 30; i++){
        
       // console.log(element['strIngredient' + i])
        if (element['strIngredient' + i]) {
          arryOfIngredients.push(element["strMeasure" + i] + " "+ element["strIngredient" + i])
          
        }
        else
        {
          break;
          
          }
        


      }
     mealIngredients.innerText = arryOfIngredients
      console.log(arryOfIngredients)
     // mealIngredients[0].innerText =element.strIngredient1
      
      //add another class here for 
    // mealImage.addEventListener("click", GetMealInstruction)
      mealDiv.appendChild(mealname);
      mealDiv.appendChild(mealImage)
      //displayMealList.appendChild(mealname);
      displayMealList.appendChild(mealDiv);
     // displayMealList.appendChild(instructionHeading)
      //displayMealList.appendChild(mealInstruction)
      //displayMealList.appendChild(ingredientheading)
      //displayMealList.appendChild(mealIngredients);
      
    });

   
  }

  else {
    console.log("no item")
  }
    
}

function removeMeals() {
    
  const getMealsOnDisplay = document.querySelector(".food-list")

  while (getMealsOnDisplay.firstChild) {
    
    getMealsOnDisplay.firstChild.remove()


  }
  function GetMealInstruction(meal) {
      
  }
  
    

}