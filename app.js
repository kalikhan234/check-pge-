document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission
    
    let errorMessage = '';
    let inputs = document.querySelectorAll('input, textarea');
    let isValid = true;

    // Reset previous error highlighting
    inputs.forEach(input => input.style.borderColor = '#ccc');
    
    // Check for errors
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = '#ff0000'; // Highlight invalid input
            isValid = false;
            errorMessage = 'Please fill in all required fields.';
        }
    });

    // Show error message if any field is empty
    if (!isValid) {
        document.getElementById('error-message').textContent = errorMessage;
        document.getElementById('error-message').style.display = 'block';
    } else {
        // If form is valid, hide error message and submit
        document.getElementById('error-message').style.display = 'none';
        alert('Form Submitted Successfully!');
        // You can add actual form submission code here (e.g., using Ajax)
    }
});
