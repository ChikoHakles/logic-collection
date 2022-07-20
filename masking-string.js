// return masked string
function maskify(cc) {
    //check if string not greater than 3, if yes, return the whole string
    if (!cc.length > 3) {
      return cc
    }
    //if not, do something
    else {
      let last4 = cc.substring(cc.length - 4) //last4 is the last four char of string
      let fb = '' //unfilled string var
      //for every char except the last four (length - 4), do something
      for(let i=0; i < cc.length - 4; i++) {
        fb = fb + "#" //add a hashtag
      }
      return fb + last4 //return the hashtag and the last four char
    }
  }