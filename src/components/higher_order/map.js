//input
  nos=[10,20,30,40,50]
//   output=[]
// for(let i=0;i<nos.length;i++){    //output=[12,22,32,42,52]
//     output.push(nos[i]+2)
// }
output=nos.map(el=>el+2);
console.log("======input======");
console.log(nos);
console.log("=====output====");
console.log(output);