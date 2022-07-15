//menukar nilai variabel
//tanpa tambah variabel baru

function test() {
    var a = 4
    var b = 11
    console.log('a awal = ', a)
    console.log('b awal = ', b)

    //coding

    //a -= b | a = a-b
    //b += a // b = b + a // b = b + aawal - b // b = aawal
    //a = b - a // a = aawal - (aawal - b) // a = aawal - aawal + b // a = b

    a = a - b
    b = b + a
    a = b - a

    console.log('a final = ', a)
    console.log('b final = ', b)
}

test()