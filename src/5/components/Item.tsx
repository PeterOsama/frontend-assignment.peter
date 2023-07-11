import { FunctionComponent } from "react";
import { itemInterface } from "../data";
/*
 * The ItemProps interface defines the types for the components props.
 *
 * If you would like to proceed without defining types do the following:
 * const Input: FunctionComponent<any> = (props) => {
 *                                ^^^
 *
 * and remove the ItemProps interface
 */

interface ItemProps {
  item: itemInterface,
}

const Item: FunctionComponent<ItemProps> = ({item}) => {
  return <li key={item.key} >{item.value}</li>;
};

export default Item;
