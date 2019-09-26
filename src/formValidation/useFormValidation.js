import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import Home from "../page/home";

function useFormValidation(initialState, validate, userUUID, userIdx) {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0;
      if (noErrors) {
        setSubmitting(false);
      } else {
        setSubmitting(false);
      }
    }
  }, [errors]);

  let existing = localStorage.getItem("randomUsersData");
  let existingData = existing ? JSON.parse(existing) : {};

  function handleChange(event) {
    // updates user property value data at matching index, field
    if (event.target.getAttribute("datatype") !== "") {
      if (event.target.getAttribute("datatype") === "location") {
        existingData.data.results[userIdx][
          event.target.getAttribute("datatype")
        ][event.target.name] = event.target.value;
      }
    } else {
      existingData.data.results[userIdx][event.target.name] =
        event.target.value;
    }

    // Reset; clears and set data into local storage
    localStorage.removeItem("randomUsersData");
    // localStorage.clear();
    localStorage.setItem("randomUsersData", JSON.stringify(existingData));

    // Set updated values
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  }
  function handleBlur() {
    // validates user input on blur, if there are errors notify user.
    const validationErrors = validate(values);
    setErrors(validationErrors);
  }
  function handleSubmit(event) {
    event.preventDefault();

    // validates user input on submit, if there are errors notify user.
    const validationErrors = validate(values);
    setErrors(validationErrors);
    setSubmitting(true);

    window.location = "/";
  }
  return {
    handleBlur,
    handleSubmit,
    handleChange,
    values,
    errors,
    isSubmitting
  };
}

export default useFormValidation;
