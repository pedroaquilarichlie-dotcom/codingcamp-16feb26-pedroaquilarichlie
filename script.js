// 1. Display alert when button is clicked
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// 2. Validate form input before submission
document.getElementById('myForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const input = document.getElementById('input').value.trim();
    
    if (input === '') {
        alert('Input cannot be empty!');
        return false;
    }
    
    if (input.length < 3) {
        alert('Input must be at least 3 characters!');
        return false;
    }
    
    alert('Form submitted successfully!');
    this.submit();
});

// 3. Change background color randomly every second
setInterval(function() {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
}, 1000);