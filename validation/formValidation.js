export const validateRegisterForm = (formData) => {
  const errors = {};

  if (!formData.username) {
    errors.username = "Username is required";
  }

  if (!formData.email) {
    errors.email = "Email is required";
  } else if (!isValidEmail(formData.email)) {
    errors.email = "Email is invalid";
  }

  if (!formData.password) {
    errors.password = 'Password is required';
  } else if (!isValidPassword(formData.password)){
    errors.password =  'Password must contain at least 8 characters, including uppercase, lowercase, a number, and a special character'
  }

  return errors;
};

export const validateLoginForm = (formData) => {
  const errors = {};

  if (!formData.email) {
    errors.email = "Email is required";
  } else if (!isValidEmail(formData.email)) {
    errors.email = "Email is invalid";
  }

  if (!formData.password) {
    errors.password = 'Password is required';
  } else if (!isValidPassword(formData.password)){
    errors.password =  'Password must contain at least 8 characters, including uppercase, lowercase, a number, and a special character'
  }

  return errors;
};


const isValidEmail = (email) => {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return emailRegex.test(email);
}

const isValidPassword = (password) => {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
}
