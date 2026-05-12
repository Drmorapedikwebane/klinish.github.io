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
