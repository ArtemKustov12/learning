const emailInputElement = document.getElementById("#email");
const passwordInputElement = document.getElementById("#password");
const emailErrorElement = document.getElementById(".error-text_email");
const passwordErrorElement = document.getElementById(".error-text_password");

const isRequired = (value) => (value ? undefined : "Required");

const isEmail = (value) =>
  value.includes("@") ? undefined : "Should be an email";

const onEmailChange = (event) => {
  const errorText = [isRequired, isEmail]
    .map((validator) => validator(event.target.value))
    .filter((errorText) => errorText)
    .join(" ");

  emailErrorElement.textContent = errorText;
};

emailInputElement.addEventListener("input", onEmailChange);
