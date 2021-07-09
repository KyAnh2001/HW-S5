// 1
// let str_input = {};
// str_input = prompt("Input:");
// function main(str){
//     var newString = "";
//     for (let index = str.length - 1; index >= 0; index--) {
//         newString += str[index];
//     }
//     return newString;
// }
// b = main(str_input);
// console.log('"' + b + '"');

// 2
// let str_input = {};
// str_input = prompt("Input:");
// function main(string)
// {
// return string.charAt(0).toUpperCase() + string.slice(1);
// }
// b = main(str_input);
// console.log('"' + b + '"');

// 3
// let arr_input = {};
// arr_input = prompt("Input:");
// function unique(arr) {
//     var newArr = []
//     for (var i = 0; i < arr.length; i++) {
//       if (newArr.indexOf(arr[i]) === -1) {
//         newArr.push(arr[i])
//       }
//     }
//     return newArr
//   }
//   b = unique(arr_input);
//   console.log(b);

// 4
// let List =[
//         {
            
//             name: 'A',
//             age: 18,
//             salary: 1000230000,
//             position: 'Boss'
//         },
//         {
            
//             name: 'B',
//             age: 18,
//             salary: 1110000000,
//             position: 'Staff'
//         },
//         {
            
//             name: 'S',
//             age: 18,
//             salary: 11230000000,
//             position: 'Manager'
//         }
//     ]
    
//     while(true)
//     {
//         let str=prompt('Nhập yêu cầu :(Read, Create, Update, Delete, Exit).');
//         str=str.toLocaleLowerCase();
//         if(str=='read')
//         {
//             for (let i = 0; i < List.length; i++) {
//                 console.log(List[i]);
//             }
//         }
//         else if(str=='create')
//         {
//             let name=prompt('Nhập tên nhân viên: ');
//             let age=Number(prompt('Nhập tuổi nhân viên: '));
//             let salary=Number(prompt('Nhập lương nhân viên: '));
//             let position=prompt('Nhập chức vụ nhân viên: ');
//             List.push({
                
//                 name: name,
//                 age: age,
//                 salary: salary,
//                 position: position
//             });
//             for (let i = 0; i < List.length; i++) {
//                 console.log(List[i]);
//             }
//         }
//         else if(str=='update')
//         {
//             let name=prompt('Nhập tên nhân viên cần update: ');
//             let namemoi=prompt('Nhập tên mới nhân viên : ');
//             let age=Number(prompt('Nhập tuổi mới nhân viên: '));
//             let salary=Number(prompt('Nhập lương mới nhân viên: '));
//             let position=prompt('Nhập chức vụ mới nhân viên: ');
//             for (let i = 0; i < List.length; i++) {
//                 if(List[i].
//                     name==name)
//                 {
//                     List.splice(i,1,{
                        
//                         name: namemoi,
//                         age: age,
//                         salary: salary,
//                         position: position
//                     })
//                 }
//             }
//             for (let i = 0; i < List.length; i++) {
//                 console.log(List[i]);
//             }
//         }
    
//         else if(str=='delete')
//         {
//             let name=prompt('Nhập tên nhân viên cần delete: ');
            
//             for (let i = 0; i < List.length; i++) {
//                 if(List[i].
//                     name==name)
//                 {
//                     List.splice(i,1,)
//                 }
//             }
//             for (let i = 0; i < List.length; i++) {
//                 console.log(List[i]);
//             }
//         }
    
//         else if(str=='exit'){
//             break;
//         }
//     }
// 5
// let day = prompt("Ngày:");
// let month = prompt("Tháng:");
// let year = prompt("Năm:");
// function ktNgayThangNam(ngay, thang, nam)
// {
//     let date = new Date(nam,thang-1,ngay);
//     if (date.getFullYear() == nam && date.getMonth() + 1 == thang && date.getDate() == ngay) {
//      alert(`Ngày ${day}/${month}/${year} là ngày hợp lệ`);
//     }
//     else
//     {
//         alert(`Ngày ${day}/${month}/${year} là ngày không hợp lệ`);
//     }
// }
// console.log(ktNgayThangNam(day,month,year))
