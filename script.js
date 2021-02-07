
function searchMeal() {
    const inputMeal = document.getElementById("inputMeal").value;
    const mealItems = document.getElementById("meals");

    const api = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputMeal}`;
    fetch(api)
        .then(res => res.json())
        .then(data => {
            mealItems.innerHTML = data.meals.map((meal) => `
            <div onclick="displayCountryDetail('${meals.strMeal}')" class="meal">
                <img src="${meal.strMealThumb}"/>
                <h6>${meal.strMeal}</h6>
            </div>`
            )
        })
}






const displayCountryDetail = mealID => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`
    fetch(url)
    .then(res => res.json())
    .then(data => renderCountryInfo(data[1]));
}
const renderCountryInfo = meals => {
    const countryDiv = document.getElementById('countryDetail');
    countryDiv.innerHTML = `
        <h1>${meals.strMeal}</h1>
       
    `
}