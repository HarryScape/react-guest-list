import styled from "styled-components";
import React, { useState } from "react";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const StyledUserForm = styled.form`
  padding: 10px;
  width: 90%;
  margin: auto;
  margin-bottom: 10px;
`;

const StyledFormInput = styled.input`
  color: #333;
  font-size: 1.2rem;
  margin: 10px auto;
  padding: 0.8rem 1rem;
  border-radius: 0.375rem;
  background-color: rgb(255, 255, 255);
  border: none;
  width: 90%;
  display: block;
  transition: all 0.3s;
`;

function UserForm(props) {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [errorText, setErrorText] = useState("");

  const nameChangeHandler = (e) => {
    setEnteredName(event.target.value);
  };

  const ageChangeHandler = (e) => {
    setEnteredAge(event.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const userData = {
      id: Math.random().toString(),
      name: enteredName,
      age: enteredAge,
    };

    let valid = validateUser(userData);
    if (valid) {
      setEnteredName("");
      setEnteredAge("");

      props.onAddUser(userData);
    }
  };

  const validateUser = (user) => {
    if (user.age < 1 && user.name.length < 2) {
      setErrorText("Please enter a valid name and age.");
      setIsOpen(true);
      return false;
    }

    if (user.age < 1) {
      setErrorText("Please enter a valid age.");
      setIsOpen(true);
      return false;
    }

    if (user.name.length < 2) {
      setErrorText("Please enter a valid name.");
      setIsOpen(true);
      return false;
    }
    return true;
  };

  return (
    <div>
      <ErrorModal open={isOpen} onClose={() => setIsOpen(false)}>
        {errorText}
      </ErrorModal>
      <StyledUserForm onSubmit={submitHandler}>
        <h1>Add Guest</h1>
        <label htmlFor="name">Name:</label>
        <StyledFormInput
          type="text"
          name="name"
          value={enteredName}
          onChange={nameChangeHandler}
          autoComplete="nope"
        />
        <label htmlFor="age">Age:</label>
        <StyledFormInput
          type="text"
          name="age"
          value={enteredAge}
          onChange={ageChangeHandler}
          autoComplete="nope"
        />
        <Button type="submit">Add User</Button>
      </StyledUserForm>
    </div>
  );
}

export default UserForm;
