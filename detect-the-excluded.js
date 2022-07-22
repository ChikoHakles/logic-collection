function detect(s) {
    // your code
  //make an array that contain the ruled char
  let array = "abcdefghijklm"
  //set counter for the same
  let counter = 0
  //for i less than input length, do something
  for(let i = 0; i < s.length; i++) {
    //for j less than array length, do something
    for(let j = 0; j < array.length; j++) {
      //if array member num. j is same with s member num. i, do something
      if(array[j] == s[i]) {
        //counter + 1
        counter++
      }
    }
  }
  //subtract input length with sameness counter, to find the non-same amount
  counter = s.length - counter
  //return string counter / input length
  return counter + "/" + s.length
}