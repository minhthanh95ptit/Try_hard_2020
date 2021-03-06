/**
 * Sử dụng switch case và map để chuyển đổi array các chữ thành các số tương ứng theo quy tắc:
 * 'A' hoặc 'a' -> 1
 * 'B' hoặc 'b' -> 2
 *  còn lại -> 0
 */

function transform(arr) {
  // your code here
  var newArr = [];
  for(var i = 0 ; i < arr.length ; i++){
      switch(arr[i]){
          case 'A':
          case 'a':
              newArr.push(1);
              break;
          case 'B':
          case 'b':
              newArr.push(2);
              break;
          default:
              newArr.push(0);
              break;
      }
  }
  return newArr;
}