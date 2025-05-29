// Article data source
const articles = [
	{
		id: 1,
		title: 'Septimus Heap Book One: Magyk',
		date: 'July 5, 2022',
		description:
			'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
		imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
		imgAlt: 'Book cover for Septimus Heap 1',
		ages: '10-14',
		genre: 'Fantasy',
		stars: '****'
	},
	{
		id: 2,
		title: 'Magnus Chase Book One: Sword of Summer',
		date: 'December 12, 2021',
		description:
			'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
		imgSrc:
			'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
		imgAlt: 'Book cover for Magnus Chase 1',
		ages: '12-16',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	},
    {
        id: 3,
        title: "Belgariad Book One: Pawn of Prophecy",
        date: "Feb 12, 2022",
        description: "A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his 'Aunt Pol' and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
        imgSrc: "https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
        imgAlt: "Book cover for Pawn of Prophecy",
        ages: "12-16",
        genre: "Fantasy",
        stars: "⭐⭐⭐⭐⭐"
    }
];

// Formats date string to YYYY-MM-DD for <time> datetime attribute
function formatDateForDatetime(dateString) {
    try {
        const date = new Date(dateString);
        if (isNaN(date.getTime())) {
            return "";
        }
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    } catch (error) {
        return "";
    }
}

// Formats star ratings (string to star characters) and generates ARIA label
function formatStars(starRating) {
    let starChars = starRating;
    if (starRating.includes('*') && !starRating.includes('⭐')) {
        starChars = '⭐'.repeat(starRating.length);
    }
    const starCount = starChars.length;
    return {
        stars: starChars,
        ariaLabel: `${starCount} out of 5 stars`
    };
}

// Generates and displays article HTML on the page
function displayArticles(articlesData) {
    const articleListElement = document.querySelector('.article-list');
    if (!articleListElement) {
        console.error('Article list container ".article-list" not found.');
        return;
    }

    articleListElement.innerHTML = ''; // Clear existing content

    articlesData.forEach(articleData => {
        const articleElement = document.createElement('article');
        articleElement.classList.add('blog-post');

        const formattedDatetime = formatDateForDatetime(articleData.date);
        const starInfo = formatStars(articleData.stars);

        // HTML structure for each article
        const articleHTML = `
            <div class="article-metadata">
                <p class="meta-date"><time datetime="${formattedDatetime}">${articleData.date}</time></p>
                <p class="meta-ages">${articleData.ages}</p>
                <p class="meta-genre">${articleData.genre}</p>
                <p class="meta-stars" aria-label="${starInfo.ariaLabel}">${starInfo.stars}</p>
            </div>
            <div class="article-main-content">
                <h3><a href="#">${articleData.title}</a></h3>
                <img src="${articleData.imgSrc}" alt="${articleData.imgAlt}">
                <p class="description">
                    ${articleData.description}
                    <a href="#" class="read-more">Read More...</a>
                </p>
            </div>
        `;
        articleElement.innerHTML = articleHTML;
        articleListElement.appendChild(articleElement);
    });
}

// Display articles on page load
if (typeof articles !== 'undefined' && articles.length > 0) {
    displayArticles(articles);
} else {
    const articleListElement = document.querySelector('.article-list');
    if (articleListElement) {
        articleListElement.innerHTML = '<p>No articles to display.</p>';
    }
}