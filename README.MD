# Cooking-Recipe-App
##[Cooking-Recipe-App](https://java80.github.io/Cooking-Recipe-App/)
## Javascript recipe app using https://www.themealdb.com/api.php api

Before you start any actual coding, you must meet with your Squad Leader for ~10 minutes to get your app idea approved. Prepare the following materials before your meeting and put them in your README.md:

App Title: Yumm My Recipe App

App Description: Yumm My Recipe App allows you to find recipes you can make 

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
Wireframes: The proposed layout and design of your app. Create mockups for your views. If your are creating multiple views including both desktop and mobile formats, and consider whether or not you need to account for landscape and portrait orientations. Please use a digital tool to complete your wireframe.

https://www.figma.com/file/0DVvE2mJpSFKOTuyNyfz4q/Cooking-recipe-App?node-id=5%3A3


MVP: A list of features you will need to build in order to meet the Minimum Viable 


1. Ability to search using keywords
1. Displays images of that matches the keyword given
1. Clicking any image gives you detailed information on how to make the meal
1. to review a recipe


Product. This will be the rubric your project will be graded against.

Post-MVP: A list of additional/advanced features you would like to include in your app after you have met MVP.
1. Login/authentication
1. like button
1 to share recipe to social networks(facebook,twitter)



### Goals: What you plan to accomplish for each day of the project week.

Priority Matrix: A graph of your intended areas of development (Pseudocoding, Design, HTML, CSS, JavaScript, Testing, etc) plotted on an X/Y axis where X represents time to completion and Y represents priority. Use a professional tool or upload a well drawn image using an image hosting site such as Cloudinary or a similar hosting service.


Timeframes: How long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day. Components should be broken down into a maximum of 3 hours time blocks.
Are you interested in styling your README.md to make it look nice? Don't know how to include photos or create links? Check out this Markdown Cheetsheet!

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


STEP 3: Make a New Repo

Make a new personal GitHub repo for your project. DO NOT FORK THIS REPO.
This new repo should be under your personal Github, NOT your General Assembly Github account.
Make sure your new repo is set to "Public" and initialize it with a README.md file. This will be your project worksheet.
Send a link for your repository to your Squad Leader.
After your have been approved, clone this new repository down to your machine.
CD into the project directory and touch index.html, style.css and script.js files.
Test a commit and push it to make sure everything is connected with git commit -m "My Ducks Project 1!".
Note: Your repository should not be called project-1! Think of a name for your application, and then name your repository after your application.

STEP 4: 🔴 Build Your Project MVP — Mandatory To Pass
Your application must meet these requirements:
Built with HTML, CSS, and JavaScript.
Styled using Flexbox or Grid.
Use Axios to make a request to an external data source and insert some of the retrieved data on to the DOM.
Implement responsive design using at least one media query/breakpoint (i.e. desktop, tablet, mobile, etc).
Fulfill the build requirements you have specified in your MVP.
Deployed site to a hosting service like Github Pages.
Make commits to GitHub every day.
A README.md file that contains your project worksheet, a link to your live, deployed site, and any necessary installation instructions such as npm i.



