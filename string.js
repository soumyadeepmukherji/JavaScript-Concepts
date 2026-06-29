/************************
 STRING
 ***********************/
const topic = "binomial nomenclature"
const species = 'Homo sapiens'
const count = 3
const text = `Mammals are categorized into ${count} main groups`

console.log(topic); // binomial nomenclature
console.log(species); // Homo sapiens
console.log(text); // Mammals are categorized into 3 main groups

// METHODS
console.log(species.indexOf('o')); // 1 i.e, first index
console.log(species.lastIndexOf('o')) // 3 i.e, last index
console.log(species.includes('pi')) // true , checkes weather char is present (case sensitive)
console.log(species.startsWith('Homo')) // true , check weather starts with (case sensitive)
console.log(species.endsWith('en')) // false , check weather ends with (case sensitive)

console.log(topic.slice(9,20)); // nomenclatur , extracts

const otherSpecies = species.replace('sapiens','habilis')
console.log(otherSpecies); // Homo habilis

console.log(text.toUpperCase()); // MAMMALS ARE CATEGORIZED INTO 3 MAIN GROUPS
console.log("ANIMALIA".toLowerCase()); // animalia

console.log(" Mammal".trim()) // Mammal , It remove whitespace from beginning and end

console.log(topic.charAt(2)) // n , Give the charater according to index value






