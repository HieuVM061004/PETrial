// Function to show/hide the register form
function Show() {
    let form = document.getElementById('register-form');
    let toggleText = document.querySelector('h2');

    if (form.style.display === 'none' || form.style.display === '') {
        form.style.display = 'block';
        toggleText.innerHTML = 'Hide Register Form';
    } else {
        form.style.display = 'none';
        toggleText.innerHTML = 'Show Register Form';
    }
}

// Function to check if form fields are not empty
function checkForm() {
    let field1 = document.getElementById('field1').value.trim();
    let field2 = document.getElementById('field2').value.trim();

    if (field1 === '' || field2 === '') {
        alert('Please fill in all fields.');
        return false;
    }
    return true;
}
