document.addEventListener('DOMContentLoaded', function() {
    const textInput = document.getElementById('text-input');
    const checkBtn = document.getElementById('check-btn');
    const result = document.getElementById('result');

    checkBtn.addEventListener("click", function () {
        const cleanInput = textInput.value.trim();
        console.log(cleanInput);

        if (!cleanInput) {
            alert('Please input a value');
            return;
        }

        const isPalindrome = checkPalindrome(cleanInput);
        
        result.textContent = `${cleanInput} is ${isPalindrome ? 'a' : 'not a'} palindrome.`;
    });

    function checkPalindrome(input) {
        const cleaninput = input.toLowerCase().replace(/[^a-z0-9]/g, ''); 
        // take the lowercase input
        // remove all non-alphanumeric characters
        const reversed = cleaninput.split('').reverse().join('');
        // created a reversed array of the string 
        return cleaninput === reversed; 
        //compare the reversed with the clean one, returns a true or false. 
    }
});