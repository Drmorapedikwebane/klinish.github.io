function scrollToAffiliate() {
  document
    .getElementById("affiliate")
    .scrollIntoView({
      behavior: "smooth"
    });
}

const form = document.getElementById("affiliateForm");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function(e) {

  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  console.log("Affiliate Signup");

  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Password:", password);

  successMessage.classList.remove("hidden");

  form.reset();

  setTimeout(() => {
    successMessage.classList.add("hidden");
  }, 4000);

});




// LOGIN

const loginForm = document.getElementById("loginForm");

if(loginForm){

  loginForm.addEventListener("submit", function(e){

    e.preventDefault();

    const loginMessage =
      document.getElementById("loginMessage");

    loginMessage.classList.remove("hidden");

    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 1500);

  });

}

// COPY REFERRAL LINK

function copyReferral(){

  const referralInput =
    document.getElementById("referralLink");

  referralInput.select();
  referralInput.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(referralInput.value);

  const copyMessage =
    document.getElementById("copyMessage");

  copyMessage.classList.remove("hidden");

  setTimeout(() => {
    copyMessage.classList.add("hidden");
  }, 3000);

}
