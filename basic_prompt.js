function toCamelCase(str1, str2) {
    const camelCased = str1.toLowerCase() + str2.charAt(0).toUpperCase() + str2.slice(1).toLowerCase();
    return camelCased;
}