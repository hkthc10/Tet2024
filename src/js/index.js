// DOM

const userAuthentication = document.querySelector("#user-action");

// Function

function handleSignout() {
  localStorage.setItem("current-signin-account", "");
  alert("Đăng xuất thành công!");
  window.location.reload();
  return;
}

function renderAccount() {
  currentSigninAccount = JSON.parse(localStorage.getItem('current-signin-account')) || "";
  if (currentSigninAccount) {
    userAuthentication.innerHTML =
      `
            <div class="username d-flex">
                Hello, <p class="name-user">${currentSigninAccount}</p>
                <button class="sign-out-button">Sign out</button>
            </div>
        `;
  }
  else {
    userAuthentication.innerHTML =
      `
          <a href="./sign-in.html" class="lr-butt items-center d-flex" style="width:auto;">
            <span>Sign In</Span>
          </a>
          <div class="lr-butt-h items-center d-flex">/</div>
          <a href="./sign-up.html" class="lr-butt items-center d-flex" style="width:auto;">
            <span>Sign Up</Span>
         </a>
        `
  }
}

// Main script
renderAccount();

const SignOutButton = document.querySelector(".sign-out-button");

SignOutButton.addEventListener("click", function (event) {
  handleSignout();
  renderAccount();
//   window.location.replace("/src/index.html");
})