# Cooking-Recipe-App
##[Cooking-Recipe-App](https://java80.github.io/Cooking-Recipe-App/)
## Javascript recipe app using https://www.themealdb.com/api.php api

App Title: Yumm My Recipe App

App Description: Yumm My Recipe App allows you to find recipes

API: The API being used is https://www.themealdb.com/api.php .

The endpoints that will be used is   https://www.themealdb.com/api/json/v1/1/search.php?s=clam

API Snippet: A sample snippet of JSON from a successful GET request you have made to your API using Postman.

```json
{
    "meals": [
        {
            "idMeal": "52840",
            "strMeal": "Clam chowder",
            "strDrinkAlternate": null,
            "strCategory": "Starter",
            "strArea": "American",
            "strInstructions": "Rinse the clams in several changes of cold water and drain well. Tip the clams into a large pan with 500ml of water. Cover, bring to the boil and simmer for 2 mins until the clams have just opened. Tip the contents of the pan into a colander over a bowl to catch the clam stock. When cool enough to handle, remove the clams from their shells – reserving a handful of empty shells for presentation if you want. Strain the clam stock into a jug, leaving any grit in the bottom of the bowl. You should have around 800ml stock.\r\nHeat the butter in the same pan and sizzle the bacon for 3-4 mins until it starts to brown. Stir in the onion, thyme and bay and cook everything gently for 10 mins until the onion is soft and golden. Scatter over the flour and stir in to make a sandy paste, cook for 2 mins more, then gradually stir in the clam stock then the milk and the cream.\r\nThrow in the potatoes, bring everything to a simmer and leave to bubble away gently for 10 mins or until the potatoes are cooked. Use a fork to crush a few of the potato chunks against the side of the pan to help thicken – you still want lots of defined chunks though. Stir through the clam meat and the few clam shells, if you've gone down that route, and simmer for a minute to reheat. Season with plenty of black pepper and a little salt, if needed, then stir through the parsley just before ladling into bowls or hollowed-out crusty rolls.",
            "strMealThumb": "https://www.themealdb.com/images/media/meals/rvtvuw1511190488.jpg",
            "strTags": null,
            "strYoutube": "https://www.youtube.com/watch?v=fEN_fm6kX6k",
            "strIngredient1": "Clams",
            "strIngredient2": "Butter",
            "strIngredient3": "Bacon",
            "strIngredient4": "Onion",
            "strIngredient5": "Thyme",
            "strIngredient6": "Bay Leaf",
            "strIngredient7": "Plain Flour",
            "strIngredient8": "Milk",
            "strIngredient9": "Double Cream",
            "strIngredient10": "Potatoes",
            "strIngredient11": "Parsley",
            "strIngredient12": "",
            "strIngredient13": "",
            "strIngredient14": "",
            "strIngredient15": "",
            "strIngredient16": "",
            "strIngredient17": "",
            "strIngredient18": "",
            "strIngredient19": "",
            "strIngredient20": "",
            "strMeasure1": "1½ kg",
            "strMeasure2": "50g",
            "strMeasure3": "150g",
            "strMeasure4": "1 finely chopped ",
            "strMeasure5": "sprigs of fresh",
            "strMeasure6": "1",
            "strMeasure7": "1 tbls",
            "strMeasure8": "150ml",
            "strMeasure9": "150ml",
            "strMeasure10": "2 medium",
            "strMeasure11": "Chopped",
            "strMeasure12": "",
            "strMeasure13": "",
            "strMeasure14": "",
            "strMeasure15": "",
            "strMeasure16": "",
            "strMeasure17": "",
            "strMeasure18": "",
            "strMeasure19": "",
            "strMeasure20": "",
            "strSource": "https://www.bbcgoodfood.com/recipes/clam-chowder",
            "strImageSource": null,
            "strCreativeCommonsConfirmed": null,
            "dateModified": null
        }
    ]
}

```
Wireframes: 

![Mobile-wireframe](https://portfolioike.s3.us-east-2.amazonaws.com/Mobile-recipe_wireframe.png
)
![Desktop-wireframe](https://portfolioike.s3.us-east-2.amazonaws.com/desktop-cooking-app-wireframe.png
)


MVP: A list of features you will need to build in order to meet the Minimum Viable 


1. Ability to search using keywords
1. Displays images of that matches the keyword given
1. Clicking any image gives you detailed information on how to make the meal
1. to review a recipe

Post-MVP: A list of additional/advanced features you would like to include in your app after you have met MVP.
1. Login/authentication
1. like button
1 to share recipe to social networks(facebook,twitter)



### Goals: What you plan to accomplish for each day of the project week.



| Days 	| Hours 	|                                          	|                                         	|
|------	|-------	|------------------------------------------	|-----------------------------------------	|
|      	|       	| Project Setup                            	| Search Function/Axios Call              	|
| 1    	| 2     	| HTML                                     	| DisplayImage Of Potential Results       	|
|      	| 2     	| CSS                                      	| getRecipeByIDfunction                   	|
|      	| 2     	| Javascript                               	| displayDetails of single recipe         	|
|      	|       	|                                          	|                                         	|
|      	|       	|                                          	|                                         	|
|      	|       	|                                          	|                                         	|
|      	| 2     	| Arrays to extract ingredients and amount 	| Create button for search/EventListerner 	|
| 2    	| 2     	| Function that calls single recipe        	| Display search results dom              	|
|      	|       	|                                          	|                                         	|
|      	|       	|                                          	|                                         	|
|      	|       	|                                          	|                                         	|
| 3    	| 2     	| Styling                                  	| Create button for search/EventListerner 	|
|      	| 2     	| Responsive                               	| Display search on dom                   	|
|      	|       	|                                          	|                                         	|
| 4    	| 2     	| Testing                                  	| Testing                                 	|




