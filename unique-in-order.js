var uniqueInOrder=function(iterable){
    //your code here - remember iterable can be a string or an array
    //define empty array to contain the result
    let array = []
    
    //for every 'iterable' char, do something
    for(let i = 0; i < iterable.length; i++) {
      //if i-th iterable char isn't same with the right-next iterable char, do something
      if(iterable[i] != iterable[i+1]) {
        //add i-th iterable char to array
        array.push(iterable[i])
      }
    }
    
    //return array as a result
    return array
  }