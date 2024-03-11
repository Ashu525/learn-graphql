import { useState } from "react";
import { FormContainer } from "./styles/Styles";
import { useMutation } from "@apollo/client";
import { addAuthorMutation, getAuthorsQuery } from "../queries/queries";
const AddAuthor = () => {
  const [addAuthor] = useMutation(addAuthorMutation);
  const [authorInfo, setAuthorInfo] = useState({
    name: "",
    age: 0,
  });

  const handleAddAuthor = async (e) => {
    e.preventDefault();
    try {
      await addAuthor({
        variables: authorInfo,
        refetchQueries: [{ query: getAuthorsQuery }],
      });
      e.target.reset();
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "age")
      setAuthorInfo((prevData) => ({ ...prevData, [name]: parseInt(value) }));
    else setAuthorInfo((prevData) => ({ ...prevData, [name]: value }));
  };
  return (
    <FormContainer onSubmit={handleAddAuthor}>
      <h3>Add Author</h3>
      <div>
        <label htmlFor="name">Author Name</label>
        <input type="text" name="name" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="age">Age</label>
        <input type="number" name="age" onChange={handleChange} />
      </div>
      <button>Add</button>
    </FormContainer>
  );
};

export default AddAuthor;
