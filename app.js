
process.stdin.resume()
process.stdin.setEncoding('utf8')

console.log('What\'s your age ?')
process.stdin.on('data', (age) => {
    if (age <= 99 && age >= 0) {
        let year = 2018 - age
        console.log('Born in ' + year)
    } 
    if (age > 99) {
        console.log('You can\'t have more than 99 years old !')
    }
    if (age < 0) {
        console.log('You can\'t have a negative age !')
    }
    if (isNaN(age)) {
        console.log('Please enter a valid age')
    }
    process.exit
})
