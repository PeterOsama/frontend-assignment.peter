import { FunctionComponent } from "react";

/*
 * The InputProps interface defines the types for the components props.
 *
 * If you would like to proceed without defining types do the following:
 * const Input: FunctionComponent<any> = (props) => {
 *                                ^^^
 *
 * and remove the InputProps interface
 */

interface InputProps {
  value: string,
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: FunctionComponent<InputProps> = ({ value, handleChange}) => {
  return (
    <div><input value={value} onChange={(e) => handleChange(e)}/></div>
  );
};

export default Input;
