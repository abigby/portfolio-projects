export default function validateAuth(values) {
  let errors = {};
  // simple phone validator; if no email notify user with text below field, if there is a email use regex to validate
  if (!values[0].email) {
    errors.email = "Required";
  } else if (!/^[A-Z0._%+-]+@[A-Z0.-]+\.[A-Z]{2,}$/i.test(values[0].email)) {
    errors.email = "Invalid email address";
  }
  // simple phone validator; if no phone number notify user with text below field, if there is a phone number use regex to validate
  if (!values[0].phone) {
    errors.phone = "Required";
  } else if (/^\d{10}$/.test(values[0].phone)) {
    errors.phone = "Invalid phone number";
  }

  return errors;
}
