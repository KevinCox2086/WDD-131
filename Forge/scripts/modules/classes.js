const classes = [
    {
        name: "Railroad Spike Knife Class",
        price: 100.00,
        description: "Forge a classic knife from a railroad spike. A great beginner project.",
        isFeatured: true
    },
    {
        name: "3/4\" Grade 8 Bolt Knife Class",
        price: 100.00,
        description: "Create a sturdy, full-threaded knife from a high-strength bolt.",
        isFeatured: false
    },
    {
        name: "Horseshoe Knife Class",
        price: 55.00,
        description: "Transform a regular horseshoe into a unique and rustic knife.",
        isFeatured: true
    },
    {
        name: "Pony Horseshoe Knife Class",
        price: 40.00,
        description: "A smaller, quicker version of our popular horseshoe knife class.",
        isFeatured: false
    },
    {
        name: "Mini Spike Nail Knife Class",
        price: 25.00,
        description: "A fun, fast project to create a miniature knife from a large nail.",
        isFeatured: false
    }
];

export const renderClasses = (targetElementId) => {
    const classContainer = document.getElementById(targetElementId);
    if (!classContainer) return;

    let html = '<ul>';
    classes.forEach(cls => {
        html += `
            <li>
                <h4>${cls.name} - $${cls.price.toFixed(2)}</h4>
                <p>${cls.description}</p>
                ${cls.isFeatured ? '<span class="featured-badge">Bestseller!</span>' : ''}
            </li>
        `;
    });
    html += '</ul>';
    classContainer.innerHTML = html;
};