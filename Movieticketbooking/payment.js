document.getElementById("payment-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission

    // Simulate payment processing (you can add actual payment logic here)

    // Redirect to the booking portal after payment
    window.location.href = 'index.html';
});
