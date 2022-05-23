function palindrome() {

    const string = 'а роза упала на лапу азора'
    const stringOne = string.split("").reverse().join("").replace(/\s/g, '').toUpperCase()
    const stringTwo = string.replace(/\s/g, '').toUpperCase()

    console.log(stringOne)
    console.log(stringTwo)

    if (stringTwo === stringOne) {
        console.log(true)
    } else {
        console.log(false)
    }
}

palindrome()