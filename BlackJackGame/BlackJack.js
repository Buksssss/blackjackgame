// // let firstCard = getRandomCard()
// // let secondCard = getRandomCard()
// // let cards = [firstCard, secondCard]
// // let cardSum = firstCard + secondCard
// let player = {
//     name: "Per",
//     chips: 200,
//     // sayHello: function () {
//     //     console.log("heyyyyyyyyyy")
//     // }
// }
// // player.sayHello()

// let cards = []
// let cardSum = 0
// let hasBlackJack = false
// let isAlive = false
// let message = ""
// let messageEl = document.getElementById ("message-el")
// let sumEl = document.querySelector ("#sum-el")
// let cardsEl = document.querySelector ("#cards-el")


// // let playerName = "Buks"
// // let playerChips = 145
// let playerEl = document.getElementById ("player-el")
// playerEl.textContent = player.name + ": $" + player.chips

// console.log()

// function getRandomCard(){
//     let randomCard = Math.floor( Math.random()*13) + 1
//     if (randomCard > 10) {
//         return 10
//     } else if (randomCard === 1) {
//         return 11
//     } else {
//         return randomCard
//     } 
// }

// function startGameEl(){
//     isAlive = true
//     let firstCard = getRandomCard()
//     let secondCard = getRandomCard()
//     cards = [firstCard, secondCard]
//     cardSum = firstCard + secondCard
//     renderGameEl()
// }

// function renderGameEl() {
//     cardsEl.textContent = "Cards: "
//     for ( let i = 0; i < cards.length; i++) {
//         cardsEl.textContent += cards[i] + " "
//     }
//     sumEl.textContent = "Sum: " + cardSum
//     if (cardSum <= 20) {
//         message = "you want to draw a new card?"
//         isAlive = true
//         hasBlackJack = false
//     } 
//     else if (cardSum === 21) {
//         message = "you got black jacked"
//         hasBlackJack = true
//     } 
//     else {
//         message = "your out of the game!"
//         isAlive = false
//         hasBlackJack = false
//     }
//     messageEl.textContent = message
// }

// function newCardEl() {
//     if (isAlive === true && hasBlackJack === false){
//     let newCard = getRandomCard()
//     cardSum += newCard
//     cards.push(newCard)
//     renderGameEl()
//     }
// }


// ==============================================================================



// let age = 20

// if (age <= 20) {
//     console.log ("you connot enter!")
// }
// else {
//     console.log ("your welcome!")
// }

// let age = 100

// if (age < 100) {
//     console.log ("not eligable")
// } else if (age === 100) {
//     console.log ("here is your birthday card! from the king!")
// } else {
//     console.log ("not eligable you already gotten 1")
// }

// let experience = ["PIC", "QA/AC", "Field Engineer"]
// let education = ["Dhvtsu", "PHS", "Bangkulasi"]
// let skills = ["Computer", "Spacial skills", "Calculations skills"]

// console.log (experience[2])

// let card1 = [7, 4]
// card1.push(6) 
// console.log(card1)

// let message1 = [
//     "Hey how is it going?",
//     "I'am Great, Thankyou How about you?",
//     "All good, Been workin on my portfolio lately."
// ]
// let newmessage1 = "Same here!"
// message1.push(newmessage1)
// console.log(message1)
// message1.pop()
// console.log(message1)

// for ( let count = 1; count < 11; count += 1 ) {
//     console.log(count)
// }

// for ( let i = 0; i <= 5; i += 1 ) {
//     console.log(i)
// }

// for ( let i = 10; i <= 100; i += 10 ) {
//     console.log(i)
// }

// let message1 = [
//     "Hey how is it going?",
//     "I'am Great, Thankyou How about you?",
//     "All good, Been workin on my portfolio lately.",
//     "Same here!",
//     "Great to hear!",
//     "dsafsafsagsa",
//     "dsajhfkjashfkj"
// ]
// for ( let i = 0; i < message1.length; i += 1) [
//     console.log(message1[i])
// ]

// let cards = [7, 3, 9]
// for ( let i = 0; i < cards.length; i ++) {
//     console.log(cards[i])
// }\

// let sentence = [ "hello", "my", "Name", "is", "per" ]
// console.log (sentence)
// let greetingEl = document.querySelector("#greeting-el")
// console.log(greetingEl)

// for ( let i = 0; i < sentence.length; i ++ ) {
//     greetingEl.textContent += sentence[i] + " "
//     console.log(sentence[i])
// }


// let player1time = 102
// let player2time = 107
// function getfastestracetime() {
//     if (player1time < player2time) {
//         return player1time
//     } else if (player2time < player1time) {
//         return player2time
//     } else {
//         return player1time
//     }
// }
// // let fastestRace = getfastestracetime()
// // console.log(fastestRace)
// function totalRaceTime() {
//     return player1time + player2time
// }
// let totalTime = totalRaceTime()
// console.log(totalTime)

// ================== geting random number=================

// let randomNumer = Math.random() * 6
// console.log(randomNumer)

// let flooredNumer = Math.floor(3.45632)
// console.log(flooredNumer)

// mathfloor makes the number round it self to the nearest 1nce

// let randomNumber = Math.floor( Math.random()*6) + 1
// console.log(randomNumber)

// function rollDice() {
//     let randomNumber = Math.floor( Math.random()*6) + 1
//     return randomNumber
// }
// console.log(rollDice())

// let hasCompleteCourse = true
// let givesCertificate = true

// if (hasCompleteCourse === true && givesCertificate === true){
//     generateCertificate() 
//     // if(givesCertificate === true) {
//     //     generateCertificate()
//     // }
// }

// function generateCertificate() {
//     console.log("Generating Certificate.....")
// }

// let hasSolveChallenge = false
// let hasHintsLeft = false

// if (hasSolveChallenge === false && hasHintsLeft === false) {
//     showSolution()
// }

// function showSolution() {
//     console.log ("Showing the Solution....")
// }

// let hasSolveChallenge = false
// let hasHintsLeft = false

// if (hasSolveChallenge === false || hasHintsLeft === false) {
//     showSolution()
// }

// function showSolution() {
//     console.log ("Showing the Solution....")
// }

// let likeDocumentaries = true
// let likeStartups = true

// if (likeDocumentaries === true || likeStartups === false) {
//     recommendMovie()
// }

// function recommendMovie() {
//     console.log ("Hey, check out this new film we think you will like!")
// }


// let course = {
//     title: "Learn CSS and Grid for free",
//     lessons: 16,
//     creator: "Per Herald Borgen",
//     length: 63,
//     level: 2,
//     isFree: true,
//     tags: ["html", "css"]
// }
// // console.log(course.isFree) bracket notation
// console.log(course ["isFree"])

// let Castle1 = {
//     name1: "Old Castle",
//     hasTourGuide: true,
//     rooms: 5,
//     gates: ["gate1", "gate2"]
// }
// console.log(Castle1.name1)
// console.log(Castle1["rooms"])

// =======================practice==========================
// =============objects and function ======================
// let person = {
//     name: "raymart",
//     age: 25,
//     coutry: "Philippines"
// }

// function logData() {
//     // personInfo = person.name + " is " + person.age + " years old and lives in " + person.coutry
//     // console.log (personInfo)
//     console.log (person.name + " is " + person.age + " years old and lives in " + person.coutry)
// }
// logData()

// ======================== if else ======================

// let age = 0

//     if (age < 6) {
//         console.log("its Free")
//     } else if (age < 18) {
//         console.log("Child Discount")
//     } else if (age < 27) {
//         console.log("Student discount")
//     } else if (age < 67) {
//         console.log("Full price")
//     } else {
//         console.log("Senior citizen discount")
//     }

// =========================== loops and arrays===================

let largestCountries = [ "China", "India", "USA", "Indonesia", "Pakistan" ]
console.log ("Largest countries in the world")
for (let i = 0; i < largestCountries.length; i ++ ) {
    console.log(largestCountries[i])
}