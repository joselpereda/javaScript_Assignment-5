window.addEventListener('load', () => {

    // Create helper function
    const $ = (id) => {
        return document.getElementById(id);
    };

    // Event listener for submit button
    $('empForm').addEventListener('submit', (e) => {
        e.preventDefault();

        // Print to console
        console.log(`ID: ${$('id').value}`);
        console.log(`Name: ${$('name').value}`);
        console.log(`Extension: ${$('extension').value}`);
        console.log(`Email: ${$('email').value}`);
        console.log(`Department: ${$('department').value}`);
    });
});