const dessertsContainer = document.querySelector('.desserts-themselves');

window.addEventListener('DOMContentLoaded', handleData);


async function handleData() {
    for (let i = 0; i < 9; i++) {

        // FETCH
        
        const respone = await fetch('./data.json');
        const jsonData = await respone.json();
    
        const dessertItself = document.createElement('div');
        dessertItself.classList.add('dessert');
        dessertItself.innerHTML = `
        <div class="dessert-image">
            <img src="${jsonData[i].image.desktop}" alt="${jsonData[i].name}" class="dessert-image-itself">
        </div>
        <div class="dessert-buttons">
        <button class="add-to-cart-button-itself" id="addToCartBtn">
            <svg class="add-to-cart-button-itself-svg" xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none" viewBox="0 0 21 20"><g fill="#C73B0F" clip-path="url(#a)"><path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z"/><path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M.333 0h20v20h-20z"/></clipPath></defs></svg>
            <span class="add-to-cart-button-itself-text">Add to Cart</span>
        </button>
        <div class="increment-decrement-button">
            <button class="decrement-button">
            <svg class="decrement-button-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                <path d="M20 12L4 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            </button>
            <span class="output-of-calculating">1</span>
            <button class="increment-button">
            <svg class="increment-button-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                <path d="M12 4V20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M4 12H20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            </button>
        </div>
        </div>
        <div class="dessert-info">
        <span class="dessert-category">${jsonData[i].category}</span>
        <h4 class="dessert-name">${jsonData[i].name}</h4>
        <h4 class="dessert-price">$${jsonData[i].price}</h4>
        </div>
        `;
        dessertsContainer.appendChild(dessertItself);
    
        // BUTTON HANDLING
    
        const addToCartBtn = document.querySelectorAll('.add-to-cart-button-itself');
        const decrementBtn = document.querySelectorAll('.decrement-button');
        const incrementBtn = document.querySelectorAll('.increment-button');
        const counterText = document.querySelectorAll('.output-of-calculating');
        const calculateButtonsContainer = document.querySelectorAll('.increment-decrement-button');
        let counter = 1;
    
        addToCartBtn[i].addEventListener('click', () => {
            addToCartBtn[i].style.display = 'none';
            calculateButtonsContainer[i].style.display = 'flex';
        });

        // DECREMENT

        decrementBtn[i].addEventListener('click', () => {
            if (counter !== 1) {
                counter--;
                counterText[i].textContent = counter;
            } else {
                decrementBtn[i].disabled = 0;
            }
        });

        // INCREMENT

        incrementBtn[i].addEventListener('click', () => {
            counter++;
            counterText[i].textContent = counter;
        });
    };
}