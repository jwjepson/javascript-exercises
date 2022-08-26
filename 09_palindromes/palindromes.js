const palindromes = function (string) {
    // Remove spaces from string and make all lowercase
    string = string.split(" ").join("").toLowerCase();

    // Remove punctuation from string
    newString = "";
    for (letter in string) {
        if (!(string[letter].includes(".") || string[letter].includes("!") || string[letter].includes(","))) {
            newString += string[letter];
        }
    }

    // Check if string is a palindrome
    if (newString.split("").reverse().join("") == newString) {
        return true;
    }
    else {
        return false;
    }
}

// Do not edit below this line
module.exports = palindromes;
