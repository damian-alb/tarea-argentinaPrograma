let numArray = []
let elementosLista = document.getElementById("lista").innerText
console.log(elementosLista)

function pushArrays() {
  
  
  for (let i = 0; i < elementosLista.length; i++){
   
    numArray.push(elementosLista[i])
   
  }
}
pushArrays(numArray)


let numbers = numArray.map(Number)
console.log(numbers)


let sum = 0
for (let i=0; i< elementosLista.length; i++) {

  sum += numbers[i]
 
  }
let promedy = sum / (elementosLista.length + 1)
console.log(promedy)
console.log(elementosLista.length)

promString = String(promedy)
promedyHTML = document.getElementById("promedy")
promedyHTML.textContent = promString

let min = Math.min(numbers),
    max = Math.max(numbers);

console.log(min);
console.log(max)

minHTML = document.getElementById("min")
minHTML.textContent = String(min)
maxHTML = document.getElementById("max")
maxHTML.textContent = String(max)


let mostFrecuent
(function mostRepeated (numbers) {
  let counts = {}
  let compare = 0
  

  for(let i=0,len = numbers.length; i<len; i++) {
    let num = numbers[i]
    if(counts[num]=== undefinded){
      counts[num] = 1 
    }else{
      counts[num] = counts[num] + 1
    }

    if(counts[num]> compare) {
      compare = counts[num]
      mostFrecuent = numbers[i]
    }
  }
return mostFrecuent
}) 
mostRepeated(numbers)



moreRepeatHTML = document.getElementById("moreReapeat")
moreRepeatHTML.textContent = String(mostFrecuent)
