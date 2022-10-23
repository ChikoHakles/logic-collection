const matchList = [
    ["mu", "city"],
    ["munchen", "mu"],
    ["city", "munchen"]
]
const resultMatch = [1,0,1]
function generateWinner() {
    let muPoint = 0
    let cityPoint = 0
    let munchenPoint = 0

    for(let i = 0; i < matchList.length; i++) {
        let match = matchList[i]
        switch (match[resultMatch[i]]) {
            case "mu":
                muPoint = muPoint + 3
                break;
        
            case "city":
                cityPoint = cityPoint + 3
                break;

            case "munchen":
                munchenPoint = munchenPoint + 3
                break;

            default:
                break;
        }
    }

    if(muPoint > cityPoint) {
        if(muPoint > munchenPoint) {
            return "mu"
        }
        else {
            return "munchen"
        }
    }
    else {
        if(cityPoint > munchenPoint) {
            return "city"
        }
        else {
            return "munchen"
        }
    }
}
winner = generateWinner()
console.log(winner)