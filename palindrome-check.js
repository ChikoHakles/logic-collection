const palindromeCheck = (str) => {
    var mid = Math.floor(str.length / 2)

    for(let i = 0; i< mid; i++) {
        //-1 karena menyamakan penghitungan yang dimulai dari 0
        if(str[i] !== str[str.length - i - 1]) {
            return false
        }
    }
    return true
}

console.log(palindromeCheck('419914'))