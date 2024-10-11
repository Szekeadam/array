//1.feladat
function getOtosLotteryNumbers() {
   
    const lotteryNumbers = [];
    while (lotteryNumbers.length < 5) {

        const randomNumber = Math.floor(Math.random() * 90) + 1;

        if (!lotteryNumbers.includes(randomNumber)) {
            lotteryNumbers.push(randomNumber);
        }
    }

    return lotteryNumbers; 
}

console.log(getOtosLotteryNumbers());

//2.feladat
function getSortedLotteryNumbers(numbers) {
    
    if (!Array.isArray(numbers)) {
        throw new Error("A bemenetnek tömbnek kell lennie.");
    }

    
    const sortedNumbers = numbers.sort((a, b) => a - b);
    
    
    return sortedNumbers;
}


const lotteryNumbers = [34, 12, 56, 23, 5];
const sorted = getSortedLotteryNumbers(lotteryNumbers);
console.log(sorted); 

//3.feladat
function getNumberOfHits(lottoNumbers, guesses) {
    
    let hits = 0;

    
    for (let guess of guesses) {
        
        if (lottoNumbers.includes(guess)) {
            
            hits++;
        }
    }

    
    return hits;
}


const lottoNumbers = [1, 2, 3, 4, 5, 6];
const guesses = [1, 2, 7, 8];

const numberOfHits = getNumberOfHits(lottoNumbers, guesses);
console.log(numberOfHits); 
