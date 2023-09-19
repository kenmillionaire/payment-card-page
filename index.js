
// JavaScript for card number formatting and card logo display
const cardNumberInput = document.getElementById('card-number');
const cardLogo = document.getElementById('card-logo');
const cardHolderInput = document.getElementById('card-holder');
const cardHolderText = document.querySelector('.card-holder-text');
const expirationMonthSelect = document.getElementById('expiration-month');
const expirationYearSelect = document.getElementById('expiration-year');
const expirationText = document.querySelector('.expiration-text');
const cvvInput = document.getElementById('cvv');

cardNumberInput.addEventListener('input', () => {
    // Format card number with spaces after every four digits
    const formattedNumber = cardNumberInput.value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();

    // Display card logo based on the card number's starting digits
    if (/^4/.test(formattedNumber)) {
        cardLogo.src = 'visa-logo.png'; // Replace with your Visa logo URL
    } else if (/^5[1-5]/.test(formattedNumber)) {
        cardLogo.src = 'mastercard-logo.png'; // Replace with your MasterCard logo URL
    } else if (/^3[47]/.test(formattedNumber)) {
        cardLogo.src = 'amex-logo.png'; // Replace with your American Express logo URL
    } else {
        cardLogo.src = '';
    }

    // Display card number in the card container
    cardNumberInput.value = formattedNumber;

    // Update card holder and expiration text
    cardHolderText.textContent = cardHolderInput.value;
    expirationText.textContent = `${expirationMonthSelect.value}/${expirationYearSelect.value}`;
});

// JavaScript for form submission and validation
const form = document.getElementById('payment-form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (validateForm()) {
        alert('Your payment was successful.');
    }
});

function validateForm() {
    // You can add more validation logic here if needed
    return form.checkValidity();
}