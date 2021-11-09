export const fetchcountries = searchQuery => 
fetch(`https://restcountries.com/v3.1/name/${searchQuery}`).then(response => response.json())