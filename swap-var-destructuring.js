//menukar nilai variabel
//tanpa tambah variabel baru

function test(a, b) {
    return {
        a: b,
        b: a
    }
}

let tes = test(1, 2)

console.log('a akhir = ' + tes.a)
console.log('b akhir = ' + tes.b)