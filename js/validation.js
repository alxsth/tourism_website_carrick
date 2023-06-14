function validateForm() {
    var emailInput = document.getElementById('email');
    var emailError = document.getElementById('emailError');
    var email = emailInput.value;
    // SQL keywords and Regular Expression to prevent malicious requests
    var sqlKeywords = ['SELECT', 'INSERT', 'UPDATE', 'DELETE', 'DROP', 'TABLE'];
    var validEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate email format
    if (!validEmailRegex.test(email)) {
        emailError.textContent = 'Please enter a valid email address.';
        return false;
    }

    // Check for SQL injection keywords in other fields
    var formFields = document.getElementById('contactForm').elements;
    for (var i = 0; i < formFields.length; i++) {
        var fieldValue = formFields[i].value;
        for (var j = 0; j < sqlKeywords.length; j++) {
            if (fieldValue.toUpperCase().includes(sqlKeywords[j])) {
                formFields[i].value = '';
                formFields[i].style.borderColor = 'red';
                formFields[i].placeholder = 'Invalid characters detected';
                return false;
            }
        }
    }

    return true;
}