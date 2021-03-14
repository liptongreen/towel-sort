
// You should implement your task here.

module.exports = function towelSort (matrix) {

  let a = [];
  if(!matrix||matrix==0){return a};
  for(i=0;i<matrix.length;i++){
    console.log((i+10)%2);
    if(i%2){
      a.push.apply(a,matrix[i].reverse());
      console.log(a);
    }else{
      a.push.apply(a, matrix[i]);
      console.log(a);
    }
  };
  return a;
}
