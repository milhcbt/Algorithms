let A = [5,2,4,6,1,3];
console.log(A);
for (j =1;j<A.length;j++){
  let key = A[j];
  //insert A[j] into sorted sequence A[1..j-1]
  let i = j-1;
  while( i >= 0 && A[i]>key ){
    A[i+1] = A[i];
    i = i - 1;
    console.log(A);
  }
  A[i + 1] = key;
}
console.log(A);
