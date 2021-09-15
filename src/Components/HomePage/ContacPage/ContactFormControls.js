import axios from "axios";
import { useState } from "react";



const initialFormValues = {
  email: "",
  title: "",
  message: "",
  formSubmitted: false,
  success: false
};

export const useFormControls = () => {
  const [values, setValues] = useState(initialFormValues);
  const [errors, setErrors] = useState({});
  const [sending,setSending] = useState(false)

  const validate = (fieldValues = values) => {
    let temp = { ...errors };

    if ("email" in fieldValues)
      temp.email = fieldValues.email ? "" : "This field is required.";
    if (fieldValues.email)
      temp.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(fieldValues.email)
        ? ""
        : "Email is not valid.";

    if ("title" in fieldValues) {
      console.log(fieldValues);
      temp.title =
        fieldValues.title.length!==0? "" : "This field is required.";
    }

    if ("message" in fieldValues)
      temp.message =
        fieldValues.message.length!==0? "" : "This field is required.";

    setErrors({
      ...temp
    });
  };
  const PostContactForm = async (
    values,
    successCallback,
    errorCallback
  ) => {
  
    let result = await axios.post("https://ancient-headland-08346.herokuapp.com/api/user/portfolio/contact?exchangeName=topic-exchange&routingKey=queue.portfolio&messageData=email",
      values)
  
  
    if (result) {
      setSending(false)
      setValues(state=>({
        ...state,
        formSubmitted:true,
      }))
    }
  };

  const handleInputValue = (e) => {
    const { name, value } = e.currentTarget;
    console.log(name,value);
    setValues({
      ...values,
      [name]: value
    });
    validate({ [name]: value });
  };

  const handleSuccess = () => {
    setValues({
      ...initialFormValues,
      formSubmitted: true,
      success: true
    });
  };

  const handleError = () => {
    setValues({
      ...initialFormValues,
      formSubmitted: true,
      success: false
    });
  };

  const formIsValid = (fieldValues = values) => {
    const isValid =
      fieldValues.email &&
      fieldValues.title &&
      fieldValues.message &&
      Object.values(errors).every((x) => x === "");

    console.log(isValid);

    return isValid;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    validate(values)
    const isValid =
      Object.values(errors).every((x) => x === "") && formIsValid();
    if (isValid) {
      setSending(true)
      await PostContactForm(values, handleSuccess, handleError);
    }
  };

  return {
    sending,
    values,
    setValues,
    errors,
    handleInputValue,
    handleFormSubmit,
    formIsValid,
    setValues
  };
};
