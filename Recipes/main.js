import recipes from './recipes.mjs';

function random(num) {
	return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
	const listLength = list.length;
	const randomNum = random(listLength);
	return list[randomNum];
}

function tagsTemplate(tags) {
	return tags.map(tag => `<span>${tag}</span>`).join('');
}

function ratingTemplate(rating) {
	let html = `<span
	class="rating"
	role="img"
	aria-label="Rating: ${rating} out of 5 stars"
>`;
	for (let i = 1; i <= 5; i++) {
		if (i <= rating) {
			html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
		} else {
			html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
		}
	}
	html += `</span>`;
	return html;
}

function recipeTemplate(recipe) {
	return `<section class="recipe-card">
        <img src="${recipe.image}" alt="Image of ${recipe.name}">
        <div class="card-content">
            <div class="tags">
                ${tagsTemplate(recipe.tags)}
            </div>
            <h2><a href="#">${recipe.name}</a></h2>
            <div class="rating-section">
                ${ratingTemplate(recipe.rating)}
            </div>
            <p class="recipe__description">
                ${recipe.description}
            </p>
        </div>
    </section>`;
}

function renderRecipes(recipeList) {
	const recipeContainer = document.getElementById('recipe-container');
	recipeContainer.innerHTML = '';
	const recipesHTML = recipeList.map(recipe => recipeTemplate(recipe)).join('');
    recipeContainer.innerHTML = recipesHTML;
}

function filterRecipes(query) {
    const lowerCaseQuery = query.toLowerCase();
	const filtered = recipes.filter(recipe => 
        recipe.name.toLowerCase().includes(lowerCaseQuery) ||
        recipe.description.toLowerCase().includes(lowerCaseQuery) ||
        recipe.tags.find(tag => tag.toLowerCase().includes(lowerCaseQuery)) ||
        recipe.recipeIngredient.find(ingredient => ingredient.toLowerCase().includes(lowerCaseQuery))
    );
    const sorted = filtered.sort((a, b) => a.name.localeCompare(b.name));
    return sorted;
}

function searchHandler(e) {
	e.preventDefault();
    const searchInput = document.getElementById('search-input');
    const query = searchInput.value.toLowerCase();
    const filteredList = filterRecipes(query);
	renderRecipes(filteredList);
}

function init() {
  const recipe = getRandomListEntry(recipes);
  renderRecipes([recipe]);

  const searchForm = document.querySelector('.search-form');
  searchForm.addEventListener('submit', searchHandler);
}

init();