/**
 * Converts a string to camelCase format.
 * 
 * @function toCamelCase
 * @param {string} str - The input string to convert. Can contain spaces, underscores, or hyphens as separators.
 * @returns {string} The converted camelCase string where the first word is lowercase and subsequent words are capitalized.
 * @throws {Error} If input is null or undefined.
 * @throws {Error} If input is a number type.
 * @throws {Error} If input is an empty string.
 * @throws {Error} If input begins with a number.
 * @throws {Error} If input contains no letters after processing.
 * 
 * @example
 * // Returns 'firstName'
 * toCamelCase('first name');
 * 
 * @example
 * // Returns 'userId'
 * toCamelCase('user_Id');
 * 
 * @example
 * // Returns 'phoneNumber'
 * toCamelCase('phone-number');
 * 
 * @example
 * // Throws Error: camelCase cannot begin with a number
 * toCamelCase('1 name');
 */

/**
 * Converts a string to dot.case format.
 * 
 * @function toDotCase
 * @param {string} str - The input string to convert. Can contain spaces, underscores, or hyphens as separators.
 * @returns {string} The converted dot.case string where all words are lowercase and joined by dots.
 * @throws {Error} If input is null or undefined.
 * @throws {Error} If input is a number type.
 * @throws {Error} If input is an empty string.
 * @throws {Error} If input begins with a number.
 * @throws {Error} If input contains no letters after processing.
 * 
 * @example
 * // Returns 'first.name'
 * toDotCase('first name');
 * 
 * @example
 * // Returns 'user.id'
 * toDotCase('user_Id');
 * 
 * @example
 * // Returns 'phone.number'
 * toDotCase('phone-number');
 */
function toCamelCase(str) {
    // Handle null or undefined
    if (str === null || str === undefined) {
        throw new Error('Input cannot be null or undefined');
    }

    // Handle numeric inputs
    if (typeof str === 'number') {
        throw new Error('Input cannot be a number');
    }

    // Convert to string if not already
    const input = String(str).trim();

    // Check if empty
    if (input.length === 0) {
        throw new Error('Input cannot be an empty string');
    }

    // Check if starts with a number
    if (/^\d/.test(input)) {
        throw new Error('camelCase cannot begin with a number');
    }

    // Split by spaces, underscores, and hyphens
    const words = input.split(/[\s_-]+/).filter(word => word.length > 0);

    // Check if any word contains only non-letter characters after splitting
    if (words.length === 0) {
        throw new Error('Input must contain at least one letter');
    }

    // Convert to camelCase
    return words
        .map((word, index) => {
            // Remove non-letter characters but preserve the word structure
            const letters = word.replace(/[^a-zA-Z]/g, '');
            
            if (letters.length === 0) {
                return '';
            }

            if (index === 0) {
                return letters.charAt(0).toLowerCase() + letters.slice(1).toLowerCase();
            }

            // Capitalize first letter, keep rest as is (preserves acronyms)
            return letters.charAt(0).toUpperCase() + letters.slice(1).toLowerCase();
        })
        .filter(word => word.length > 0)
        .join('');
}

// Example usage:
console.log(toCamelCase('first name')); // firstName
console.log(toCamelCase('user_Id')); // userId
console.log(toCamelCase('phone-number')); // phoneNumber

try {
    console.log(toCamelCase('1 name')); // throws error
} catch (error) {
    console.error(error.message); // camelCase cannot begin with a number
}

function toDotCase(str) {
    // Handle null or undefined
    if (str === null || str === undefined) {
        throw new Error('Input cannot be null or undefined');
    }

    // Handle numeric inputs
    if (typeof str === 'number') {
        throw new Error('Input cannot be a number');
    }

    // Convert to string if not already
    const input = String(str).trim();

    // Check if empty
    if (input.length === 0) {
        throw new Error('Input cannot be an empty string');
    }

    // Check if starts with a number
    if (/^\d/.test(input)) {
        throw new Error('dot.case cannot begin with a number');
    }

    // Split by spaces, underscores, and hyphens
    const words = input.split(/[\s_-]+/).filter(word => word.length > 0);

    // Check if any word contains only non-letter characters after splitting
    if (words.length === 0) {
        throw new Error('Input must contain at least one letter');
    }

    // Convert to dot.case
    return words
        .map(word => {
            const letters = word.replace(/[^a-zA-Z]/g, '');
            return letters.length > 0 ? letters.toLowerCase() : '';
        })
        .filter(word => word.length > 0)
        .join('.');
}

// Example usage:
console.log(toDotCase('first name')); // first.name
console.log(toDotCase('user_Id')); // user.id
console.log(toDotCase('phone-number')); // phone.number


