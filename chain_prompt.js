function toKebabCase(input) {
    // Error handling for non-string inputs
    if (typeof input !== 'string') {
        throw new Error('Input must be a string');
    }

    // Check if string is purely numeric
    if (/^\d+$/.test(input)) {
        throw new Error('Input cannot be purely numeric');
    }

    // Check if string starts with a numeric character
    if (/^\d/.test(input)) {
        throw new Error('Input cannot start with a numeric character');
    }

    // Convert to kebab-case
    return input
        .toLowerCase()
        .replace(/\s+/g, '-')           // Replace spaces with hyphens
        .replace(/[A-Z]/g, '-$&')       // Add hyphen before uppercase letters
        .replace(/^-+|-+$/g, '')        // Remove leading/trailing hyphens
        .replace(/-+/g, '-');           // Replace multiple hyphens with single hyphen
}

module.exports = toKebabCase; 