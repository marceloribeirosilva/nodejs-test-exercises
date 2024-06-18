function countVowels(text, callback) {
  const vowelRegex = /[aeiouAEIOU]/g;  
  const matches = text.match(vowelRegex);
  const count = matches ? matches.length : 0;
  
  callback(count);
}

const text = "HEllO ClearSale";
countVowels(text, (result) => {
  console.log(`O número de vogais do texto é: ${result}`);
});
