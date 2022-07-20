let contoh = [1,2,4,7,9,6,3]

function bubbleSort(list) {
    for(let i = 0; i < list.length; i++) {
        for(let j = 0; j < list.length; j++) {
            if (list[j] > list[j+1]) {
                let temp = list[j]
                list[j] = list[j+1]
                list[j+1] = temp
            }
        }
    }
    return list
}

console.log(bubbleSort(contoh))