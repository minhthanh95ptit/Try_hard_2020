//Sử dụng sort method để sắp xếp lại 1 array các số sau theo thứ tự giảm dần (descending order)

function sortNumber(arr) {
  // Write code here...
  arr.sort(function(a,b){
     return b - a; 
  });
  return arr;
}