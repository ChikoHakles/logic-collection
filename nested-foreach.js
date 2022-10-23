const clothing = ["shirt", "pants", "jacket"]
const color = ["black", "white"]
const size = ["S", "M", "L"]
let sentences = []

function generateList(){
    clothing.forEach(cl => {
        color.forEach(co => {
            size.forEach(s => {
                sentence = cl + " " + co + " " + s
                sentences.push(sentence)
            })
        });
    });
    return sentences
}
list = generateList()
console.log(list)