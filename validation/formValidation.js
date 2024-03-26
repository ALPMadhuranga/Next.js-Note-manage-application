export const validateForm = (formData) => {
  const errors = {};

  if (!formData.username) {
    errors.username = "Username is required";
  }

  if (!formData.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = "Email is invalid";
  }

  if (!formData.password) {
    errors.password = 'Password is required';
  } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(formData.password)){
    errors.password =  'Password must contain at least 8 characters, including uppercase, lowercase, a number, and a special character'
  }

  return errors;
};
