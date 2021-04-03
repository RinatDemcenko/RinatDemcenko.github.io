const formatString = function (string) {
    if(string.length<=40){
        return(string);
    } else {
        let newString = string.slice(0, 41);
        return newString+'...';
    }
};
  
console.log(formatString('Curabitur ligula sapien, tincidunt non.'));

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));

console.log(formatString('Curabitur ligula sapien.'));