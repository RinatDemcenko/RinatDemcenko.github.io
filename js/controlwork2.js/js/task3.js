const findLongestWord = function (string) { 
    let newArr = string.split(" ");
    console.log(newArr);
    let longestworin = 0;
    for(let i = 0; i<newArr.length; i++){
      if(newArr[longestworin].length > newArr[i].length){
  
      }else {
        longestworin = i;
      }
    }
    return newArr[longestworin];
  };

  console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); 
  
  console.log(findLongestWord('Google do a roll'));
  
  console.log(findLongestWord('May the force be with you'));