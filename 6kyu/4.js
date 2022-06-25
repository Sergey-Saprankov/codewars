const DNAStrand = dna => {
  const result = dna.split('').map(element => element === 'A' ? element = 'T' : element === "T" ? element = 'A' : element === 'C' ? element = "G" : element === 'G' ? element = 'C' : element);
  return result.join('');
}

console.log(DNAStrand("ATTGC"));