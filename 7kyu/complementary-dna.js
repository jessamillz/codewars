// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

//MY SOLUTION
function DNAStrand(dna){
  let newStrand = '';
  for (const element of dna){
    switch(element){
        case 'A':
          newStrand += 'T';
          break;
        case 'T':
          newStrand += 'A';
          break;
        case 'C':
          newStrand += 'G';
          break;
        case 'G':
          newStrand += 'C';
          break;
        default:
          console.log('There seems to be an error in the DNA sequence.')
    }
  }
  return newStrand;
}

//OTHER SOLUTIONS NOT MINE
function DNAStrand(dna) {
  return dna.replace(/./g, function(c) {
    return DNAStrand.pairs[c]
  })
}

DNAStrand.pairs = {
  A: 'T',
  T: 'A',
  C: 'G',
  G: 'C',
}

var pairs = {'A':'T','T':'A','C':'G','G':'C'};

function DNAStrand(dna){
  return dna.split('').map(function(v){ return pairs[v] }).join('');
}

function DNAStrand(dna){
    //your code here
    var result= "";
            for(var i =0; i<dna.length; i++) 
            {
          if (dna[i]==="A") 
         {
          result +="T";
         }
          else if (dna[i]==="T") 
         {
          result += "A";
          }
          else if (dna[i]==="C")
          {
          result +="G";
          }
          else if (dna[i]==="G")
          {
          result += "C";
          }
          else {
          result +=dna[i];
          }
           }
       return result;
}

function DNAStrand(dna) {
    return dna.split('').map(function(v) {return {A:'T', T:'A', C:'G', G:'C'}[v];}).join('');
}

function DNAStrand(dna){
    return dna.replace(/A/g, 't').replace(/T/g, 'a').replace(/C/g, 'g').replace(/G/g, 'c').toUpperCase();
}