const emailInputElement = document.getElementById("email");
const passwordInputElement = document.getElementById("password");
const emailErrorElement = document.querySelector(".error-text_email");
const passwordErrorElement = document.querySelector(".error-text_password");

const isRequired = (value) => (value ? undefined : "Required");

const isEmail = (value) =>
  value.includes("@") ? undefined : "Should be an email";

const validators = {
  email: [isRequired, isEmail],
  password: [isRequired],
};

const validate = (fieldName, value) => {
  const fieldValidators = validators[fieldName];
  return fieldValidators
    .map((validator) => validator(value))
    .filter((errorText) => errorText)
    .join(", ");
};

const onEmailChange = (event) => {
  const errorText = validate("email", event.target.value);

  emailErrorElement.textContent = errorText;
};

const onPasswordChange = (event) => {
  const errorText = validate("password", event.target.value);

  passwordErrorElement.textContent = errorText;
};

emailInputElement.addEventListener("input", onEmailChange);
passwordInputElement.addEventListener("input", onPasswordChange);

const formElem = document.querySelector(".login-form");

const onFormSubmit = (event) => {
  event.preventDefault();
  const formData = [...new FormData(formElem)].reduce((acc, [prop, value]) => {
    return { ...acc, [prop]: value };
  }, {});
  alert(JSON.stringify(formData));
};

formElem.addEventListener("submit", onFormSubmit);
