const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const signInForm = document.querySelector("#sign-in-form")

let userList = JSON.parse(localStorage.getItem('user-list'));
console.log(userList);
// Function
// Sign in function
function handleSignin(event) {
    // Prevent reloading after submitting form
    event.preventDefault();
    // Data from input
    let email = emailInput.value;
    let password = passwordInput.value;
    // Loop to find the correct account
    for (let i in userList) {
        // Current account in array
        let currentFullname = userList[i].fullName;
        let currentEmail = userList[i].email;
        let currentPassword = userList[i].password;
        // Compare
        if (currentEmail == email && currentPassword == password) {
            alert("Đăng nhập thành công!");
            localStorage.setItem("current-signin-account", JSON.stringify(currentFullname));
            window.location.replace("/src/home.html");
            return;
        }
    }
    alert("Mật khẩu hoặc email bị sai!");
}
// Main script

signInForm.addEventListener("submit", function (event) {
    handleSignin(event);
})