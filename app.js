// Get the elements for top sections and dropdowns
const topCity = document.getElementById('top-city');
const topCuisine = document.getElementById('top-cuisine');
const topChain = document.getElementById('top-chain');

const cityDropdown = document.getElementById('cityDropdown');
const cuisineDropdown = document.getElementById('cuisineDropdown');
const chainDropdown = document.getElementById('chainDropdown');

// Function to toggle the dropdown visibility
function toggleDropdown(dropdown) {
    dropdown.classList.toggle('show');
}

// Function to hide all dropdowns except the one specified
function hideAllDropdowns(exceptDropdown) {
    const allDropdowns = document.querySelectorAll('.dropd');
    allDropdowns.forEach(dropdown => {
        if (dropdown !== exceptDropdown) {
            dropdown.classList.remove('show');
        }
    });
}

// Add click event listeners to top sections
topCity.addEventListener('click', function() {
    toggleDropdown(cityDropdown);
    hideAllDropdowns(cityDropdown);
});
topCuisine.addEventListener('click', function() {
    toggleDropdown(cuisineDropdown);
    hideAllDropdowns(cuisineDropdown);
});
topChain.addEventListener('click', function() {
    toggleDropdown(chainDropdown);
    hideAllDropdowns(chainDropdown);
});
