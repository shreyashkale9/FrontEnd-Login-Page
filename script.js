const pass_feild = document.querySelector(".pass-key");
const showbtn = document.querySelector(".show");
showbtn.addEventListener("click", function(){
    if (pass_feild.type === "password"){
        pass_feild.type = "text";
        showbtn.textContent = "HIDE";
        showbtn.style.color = "black";
    } else {
        pass_feild.type = "password";
        showbtn.textContent = "SHOW";
        showbtn.style.color = "black";
    }
})