/**
 * 1. Sử dụng module fs để đọc file `data.json`
 * 2. Dùng JSON.parse để chuyển đổi string đọc được ở bước 1 sang Object
 * 3. Log property `name` từ object ở bước 2
 * 4. Thêm 1 property `members` là một array, truyền vào 1 object mô tả về bạn
 * 5. Ghi lại dữ liệu vào file data.json
 * 6. Mở file data.json để kiểm chứng xem bạn làm đúng không
 */

var fs = require('fs');

var content = fs.readFileSync('./data.json','utf8');
var objectContent = JSON.parse(content);

console.log(objectContent.name);

var members = ['Dep trai khoai to'];
objectContent.members = members;

var stringContent = JSON.stringify(objectContent);
fs.writeFileSync('./data.json',stringContent);
//console.log(stringContent);
console.log('DONE');