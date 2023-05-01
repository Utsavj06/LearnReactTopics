import { memo } from "react";

const Todo = ({ todo }) => {
  console.log("todo list render");
  return <h1>TOdo List</h1>;
};
export default memo(Todo);
