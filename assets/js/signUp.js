let btn=document.querySelector(".submit-form");
btn.addEventListener("click",signUp);
function signUp(){
    let sdt=document.getElementById("number").value;
    localStorage.setItem("sdt",sdt);

    // window.location.href="login.html";

}