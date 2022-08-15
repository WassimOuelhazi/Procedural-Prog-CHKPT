
// dot product of two vectors v1 and v2

let v1 =   [5, 1, 1];
let v2 = [3, 1, 1];
  

function dotProduct(vector1, vector2) {
  let result = 0;
  for (let i = 0; i < vector1.length; i++) {
    result += vector1[i] * vector2[i]
  }
  return result
}

console.log(dotProduct(v1,v2))

//  for n pairs of given vectors, whether two vectors of given IR are orthogonal


let vectors = [
    [7, 1, 1],
    [6, 0, 2],
    [5, 7, 0],
    [3, 1, 2],
    [2, 3, 8],
    [0, 0, 0]
  ]
  
  function dotProductnSerie(vector1, vector2) {
    let result = 0;
    for (let i = 0; i < vector1.length; i++) {
      result += vector1[i] * vector2[i]
    }
    return result
  }
  
  for (let i = 0; i < vectors.length; i++) {
    for (let j = i + 1; j < vectors.length; j++) {
      if (dotProductnSerie(vectors[i], vectors[j]) === 0) {
        console.log(`${vectors[i]} and ${vectors[j]} are orthogonal `)
      }
    }
  }
  


  
  