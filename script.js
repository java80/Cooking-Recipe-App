const searchTerm = document.querySelector("#blank");
const searchButton = document.querySelector("#search");
const searchRandom = document.querySelector("#search-random");
const displayMealList = document.querySelector(".food-list");
const singleMeal = document.querySelector(".single-meal");
const messagetouser = document.querySelector(".message-class");
searchButton.addEventListener("click", getRecipe);
searchRandom.addEventListener("click", getRandomDish);

async function getRandomDish(event) {
  displayMealList.classList.remove("hidden-result-class");
  singleMeal.classList.add("hidden-single-meal");
  removeMeals();

  try {
    let randomResponse = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/random.php"
    );
    // console.log(randomResponse)
    GetMealInstruction(randomResponse.data.meals[0]);
  } catch (err) {
    console.log(err);
  }
}

async function getRecipe(event) {
  displayMealList.classList.remove("hidden-result-class");
  singleMeal.classList.add("hidden-single-meal");
  messagetouser.classList.remove("hidden-result-class");

  try {
    let response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm.value}`
    );
    if (searchTerm.value == "") {
      alert("Please give me a keyword");
    }
    //console.log(response)
    showListofMeals(response.data.meals);
  } catch (err) {
    console.log(err);
  }
}

function showListofMeals(meals) {
  removeMeals();

  if (meals) {
    messagetouser.innerText =
      "Here are some dishes you can make with " + searchTerm.value;

    meals.forEach((element) => {
      const mealDiv = document.createElement("div");
      mealDiv.addEventListener("click", () => {
        displayMealList.classList.toggle("hidden-result-class");
        messagetouser.classList.toggle("hidden-result-class");

        GetMealInstruction(element);
      });

      const mealImage = document.createElement("img");
      const mealname = document.createElement("h1");

      mealImage.classList.add("Image-class");

      mealname.innerText = element.strMeal;
      mealImage.src = element.strMealThumb;

      mealDiv.appendChild(mealImage);
      mealDiv.appendChild(mealname);
      displayMealList.appendChild(mealDiv);
    });
  } else {
    console.log("no item");
    messagetouser.innerText =
      "no dish found with the keyword " + searchTerm.value;
  }
}

function removeMeals() {
  const getMealsOnDisplay = document.querySelector(".food-list");

  while (getMealsOnDisplay.firstChild) {
    getMealsOnDisplay.firstChild.remove();
  }
}
function removeRandomMeals() {
  const getOneRandomMeal = document.querySelector(".food-list");
  while (getOneRandomMeal.firstChild) {
    getOneRandomMeal.firstChild.remove();
  }
}
function GetMealInstruction(element) {
  while (singleMeal.firstChild) {
    singleMeal.removeChild(singleMeal.firstChild);
  }

  const mealInstruction = document.createElement("p");
  const mealIngredients = document.createElement("p");
  const instructionHeading = document.createElement("h1");
  const ingredientheading = document.createElement("h2");
  const reviewHeading = document.createElement("h2");
  const hasTagsHeading = document.createElement("h2");
  hasTagsHeading.className = "tag-class";
  const textArea = document.createElement("textarea");

  textArea.name = "post";
  textArea.maxLength = 2000;
  textArea.rows = 10;
  textArea.cols = 40;
  textArea.className = "review-class";
  const reviewButton = document.createElement("button");
  reviewButton.id = "SendReview";
  reviewButton.className = "btn btn-primary";
  reviewButton.innerText = "Submit";
  //reviewButton.setAttribute("type","submit")

  const mealImage = document.createElement("img");
  const mealname = document.createElement("h1");
  const videoLink = document.createElement("a");

  const videoDiv = document.createElement("div");
  videoDiv.className = "video-class";
  videoDiv.appendChild(videoLink);
  const hasTags = document.createElement("div");

  const IngredientsTable = document.createElement("table");
  IngredientsTable.classList.add("table-class");

  mealImage.classList.add("Image-class");
  mealImage.classList.add("Image-class-visible");

  mealname.innerText = element.strMeal;
  mealImage.src = element.strMealThumb;
  videoLink.href = element.strYoutube;
  videoLink.innerText = element.strYoutube;
  //hasTags.innerText = element.strTags
  if (element.strTags) {
    const tags = element.strTags.split(",");
    tags.forEach((tag) => {
      const button = document.createElement("button");
      button.className = "btn btn-primary";
      button.innerText = tag;
      button.addEventListener("click", () => {
        searchTerm.value = tag;
        getRecipe();
      });
      hasTags.appendChild(button);
    });
  }
  
  instructionHeading.innerText = "Instructions";
  ingredientheading.innerText = "Ingredients";
  hasTagsHeading.innerText = "#Tags";

  mealInstruction.innerText = element.strInstructions;
  reviewHeading.innerText = "Reviews";
  hasTagsHeading.innerText = "#Tags";
  const arryOfIngredients = [];
  for (let i = 1; i < 30; i++) {
    // console.log(element['strIngredient' + i])
    if (element["strIngredient" + i]) {
      arryOfIngredients.push(
        element["strMeasure" + i] + " - " + element["strIngredient" + i]
      );
      const row = document.createElement("tr");
      row.innerText =
        element["strMeasure" + i] + " - " + element["strIngredient" + i];
      IngredientsTable.appendChild(row);
    } else {
      break;
    }
  }
  mealIngredients.innerText = arryOfIngredients;
  singleMeal.appendChild(mealname);
  singleMeal.appendChild(mealImage);
  singleMeal.appendChild(videoDiv);
  singleMeal.appendChild(hasTagsHeading);
  singleMeal.appendChild(hasTags);
  singleMeal.appendChild(instructionHeading);
  singleMeal.appendChild(mealInstruction);
  singleMeal.appendChild(ingredientheading);
  singleMeal.appendChild(IngredientsTable);
  singleMeal.appendChild(reviewHeading);
  singleMeal.appendChild(textArea);
  singleMeal.appendChild(reviewButton);
  singleMeal.classList.remove("hidden-single-meal");
}
