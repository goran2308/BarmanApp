const searchBtn = document.querySelector('.search-btn').addEventListener('click', searchCocktail);
const input = document.querySelector('.search-input');

input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        searchCocktail();
    }
});


async function searchCocktail() {
    const input = document.querySelector('.search-input').value;
    const link = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + input;
    const res = await fetch(link);
    const data = await res.json();
    const cocktailName = data.drinks;

    console.log(cocktailName);

    let output = '';

    for(let i=0; i<cocktailName.length; i++) {
        output += `
            <div class="card">
                <img src="${cocktailName[i].strDrinkThumb}" alt="" srcset="">
                <div class="card-title">${cocktailName[i].strDrink}</div>
                <div class="ingredients">
                    <ul>
                        <li>${cocktailName[i].strIngredient1} - ${cocktailName[i].strMeasure1}</li>
                        <li>${cocktailName[i].strIngredient2} - ${cocktailName[i].strMeasure2}</li>
                        <li>${cocktailName[i].strIngredient3} - ${cocktailName[i].strMeasure3}</li>
                        <li>${cocktailName[i].strIngredient4} - ${cocktailName[i].strMeasure4}</li>
                        <li>${cocktailName[i].strIngredient5} - ${cocktailName[i].strMeasure5}</li>
                        <li>${cocktailName[i].strIngredient6} - ${cocktailName[i].strMeasure6}</li>
                        <li>${cocktailName[i].strIngredient7} - ${cocktailName[i].strMeasure7}</li>
                    </ul>
                </div>
                <div class="instructions">
                    <h4>Instructions:</h4>
                    <p>${cocktailName[i].strInstructions}</p>
                </div>
            </div>
        `;
    }

    document.querySelector('#output').innerHTML = output;
}