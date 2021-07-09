// 1.
// let chuoi = prompt("Input:");
// let a = chuoi.startsWith("java");
// if(a == true){
//     alert("chuỗi này bắt đầu bằng java");
// }
// else{
//     alert("chuỗi này không bắt đầu bằng java");
// }

// 
// const a = [1, -10, 5, 18, -9, 5];
// function array(mang){
    
//     max = Math.abs(mang[0]-mang[1]);
//     for(i=0;i<mang.length - 1;i++){
//         if(max < Math.abs(mang[i]-mang[i+1])){
//             max = Math.abs(mang[i]-mang[i+1])
//         }
//     }
//     return max;
// }
//  b = array(a);
// console.log(b);

// 2
// const a = [100,1,1, -10, 5, 18, -9, 5,30,100];
// function first(array,n){
//     new_arr= [];
//     if(n > array.length){
//         n = array.length;
//     }
//     for(i=0;i<n;i++){
//         new_arr[i] = array[i];
//     }
//     console.log(new_arr);
// }
// first(a,50);

// 3
// x = -2
// y = 6
// function check(a,b){
//     if(a*b < 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(check(x,y));

// 4
// let n = prompt("input:");
// function checkabs(n){
//     if(n>13){
        
//         return (2*(Math.abs(n-13)));
//     }
//     else{
//         return  Math.abs(13-n);
//     }
// }
// console.log(checkabs(n));

// 5
// a = [-10, 5, 18, -9,-100,200];
// function findmax(mang){
//     max = Math.abs(a[0]-a[1]);
//     for(i = 0 ; i<mang.length-1; i++){
//         for(j=i+1;j<mang.length;j++){
//             if(max < Math.abs(a[i]-a[j])){
//                 max = Math.abs(a[i]-a[j]);;
//             }
//         }
//     }
//     console.log(max);
// }
// findmax(a);
