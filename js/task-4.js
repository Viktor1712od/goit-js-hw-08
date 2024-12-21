const form = document.querySelector("form.login-form");

form.addEventListener("submit", event => {
  event.preventDefault();

  const userEmail = form.elements.email.value.trim();
  const userPassword = form.elements.password.value.trim();

  if (userEmail === "" || userPassword === "") {
    return alert("All form fields must be filled in");
  }

  const formData = {
    [form.elements.email.name]: userEmail,
    [form.elements.password.name]: userPassword,
  };

  console.log(formData);

  form.reset();
});