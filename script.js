//Search Meal
const mealItems = document.getElementById("meals");
function searchMeal() {
    const inputMeal = document.getElementById("inputMeal").value;
    

    const api = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputMeal}`;
    fetch(api)
        .then(res => res.json())
        .then(data => {
            mealItems.innerHTML = data.meals.map((meal) => `
            <div onclick="displayMealDetail(${meal.idMeal})" class="meal">
                <img src="${meal.strMealThumb}"/>
                <h6>${meal.strMeal}</h6>
            </div>`
            )
        })
}

// Display Single Meal Info
const displayMealDetail = (idMeal) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    fetch(url)
    .then(res => res.json())
    .then(data =>  renderMealInfo(data.meals[0]));
}

const renderMealInfo = meals => {
    console.log(meals);
    const mealDiv = document.getElementById('mealDetail');
    mealDiv.innerHTML = `
        <img src="${meals.strMealThumb}">
        <h1>${meals.strMeal}</h1>
        <h5>Ingredients</h5>
        <p>${meals.strIngredient1}</p>
        <p>${meals.strIngredient2}</p>
        <p>${meals.strIngredient3}</p>
        <p>${meals.strIngredient4}</p>
        <p>${meals.strIngredient5}</p>
        <p>${meals.strIngredient6}</p>
        <p>${meals.strIngredient7}</p>
        <p>${meals.strIngredient8}</p>
        <p>${meals.strIngredient9}</p>
        <p>${meals.strIngredient10}</p>
       
    `
}