// @ts-nocheck
import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";

const Blog = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return <div>{/* <h1>{user.email}</h1> */}</div>;
};

export default Blog;
