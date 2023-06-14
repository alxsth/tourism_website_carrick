function validateForm() {
    let emailInput = document.getElementById('email');
    let emailError = document.getElementById('emailError');
    let email = emailInput.value;
    // SQL keywords and Regular Expression to prevent malicious requests
    let sqlKeywords = ['SELECT', 'INSERT', 'UPDATE', 'DELETE', 'DROP', 'TABLE'];
    let validEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate email format
    if (!validEmailRegex.test(email)) {
        emailError.textContent = 'Please enter a valid email address.';
        return false;
    }

    // Check for SQL injection keywords in other fields
    let formFields = document.getElementById('contactForm').elements;
    for (let i = 0; i < formFields.length; i++) {
        let fieldValue = formFields[i].value;
        for (let j = 0; j < sqlKeywords.length; j++) {
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