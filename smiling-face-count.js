function countSmileys(arr) {
    //sameness counter
    let counter = 0
    //array that contain the smile face example
    let criteria = [":D", ":)", ";D", ";)", ":-D", ":~D", ":-)", ":~)", ";-D", ";~D", ";-)", ";~)"]
    //compare every arr element with criteria element
    for(let i = 0; i < arr.length; i++) {
      for(let j = 0; j < criteria.length; j++) {
        //if same, do something
        if(arr[i] === criteria[j]) {
          //counter + 1
          counter++
        }
      }
    }
    return counter
  }