function two(string,symbol) {
   const calc = []
   for (let i = 0; i < string.length; i++) {
       if (string[i]===symbol) {
           calc.push(symbol)
       }
   }
   console.log(calc.length)
}
two('Я люблю javascript', 'ю')