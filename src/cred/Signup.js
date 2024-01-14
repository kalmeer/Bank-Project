import React, { useEffect, useState } from "react";
import register from "../api/auth/register";

export const Signup = () => {
  const [Name, setName] = useState("");
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [image, setImage] = useState();
  const [user, setUser] = useState({});

  // const mutation = useMutation(register, {
  //   onSuccess: () => {
  //     console.log();
  //   },
  //   onError: () => {
  //     console.log();
  //   },
  // });

  const handleSubmit = () => {
    console.log(user);
    if (Name === "") {
      alert("Please enter your name");
    } else if (username === "") {
      alert("Please enter your username");
    } else if (password === "") {
      alert("Please enter your password");
    } else if (confirmPassword !== password) {
      alert("please enter correct password");
    } else {
      setUser({
        Name,
        username,
        password,
        image,
      });
    }
  };
  const handleName = (e) => {
    setName(e.target.value);
    console.log(Name);
  };
  const handleusername = (e) => {
    setusername(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };
  const handleImageUpload = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div>
      <input onChange={handleName} type="text" placeholder="Name" />
      <br />
      <input onChange={handleusername} type="text" placeholder="username" />
      <br />
      <input onChange={handlePassword} type="text" placeholder="password" />
      <br />
      <input
        onChange={handleConfirmPassword}
        type="text"
        placeholder="confirm password"
      />
      <br />
      <input onChange={handleImageUpload} type="file" accept="image/*" />
      <br />
      <button onClick={handleSubmit} type="submit">
        Submit
      </button>
    </div>
  );
};
