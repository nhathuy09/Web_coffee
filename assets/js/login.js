// function isPassWordValid(passWord){
//     if(passWord<6){
//         return false;
//     }
//     let hasSupperCase=false;
//     let hasLowerCase=false;
//     let hasDigit=false;
//     for(let i=0;i<passWord.length;i++ ){
//         let char= passWord[i];
//         if(char>= "a" && char<= "z"){
//             hasLowerCase=true;
//         }
//         else if(char>= "A" && char<= "Z"){
//             hasSupperCase=true;
//         }
//         else if(char>= "0" && char<= "9"){
//             hasDigit=true;
//         }
        
//     }
//     return hasDigit && hasLowerCase&& hasSupperCase;
// }
// //set mật khẩu
// function setPassWord(){
//     let passWord=prompt("Mời thiết lập mật khẩu");
//     if(isPassWordValid(passWord)){
//         alert( "Đặt mật khẩu thành công, mật khẩu là: "+ passWord);
//         return passWord;
//     }
//     else{
//         alert(` Mật khẩu không hợp lệ
//             1. Mật khẩu hợp lệ khi chỉ có ít nhất 6 ký tự
//             2. chứa ít nhất một chữ cái viết hoa
//             3. chứa ít nhất một chữ cái viết thường
//             4. chứa ít nhất một chữ số`);
//             //gọi lại hàm setPassword
//             setPassWord();
//     }
// }
// let passWordOK=setPassWord();
// let countLogin=0;
// while(true) {
//     let passWordReplace=prompt("Mời nhập lại mật khẩu đã khởi tạo");
//     if(passWordReplace===passWordOK ){
//         alert("mật khẩu nhập đúng mở khóa");
       
//     }
//     else{
//         countLogin++;
//         if(countLogin<5 ){
//         alert( " Bạn đã nhập sai pass, số lần thử : "+countLogin+"/5");
//         }
//         else{
//             alert("Bạn đã thử 5 lần , tài khoản của bạn sẽ bị block liên hệ admin");
//             break; 
//         }
// }
    
// }