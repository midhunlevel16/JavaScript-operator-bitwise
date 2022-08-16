let a = 8;
let b = 1;
// 11111111111111111111111111111101
let c = -3;

result = a >> b;
result1 = c >> b;

// 4 (00000000000000000000000000000100)
console.log(result); 

// -2 (11111111111111111111111111111110)
console.log(result1); 