import { FunctionComponent } from "react";

// Components
import { itemInterface } from "../data";
import Item from "./Item";

/*
 * The ListProps interface defines the types for the components props.
 *
 * If you would like to proceed without defining types do the following:
 * const Input: FunctionComponent<any> = (props) => {
 *                                ^^^
 *
 * and remove the ListProps interface
 */

interface ListProps {
  items: itemInterface[],
}

const List: FunctionComponent<ListProps> = ({items}) => {
  return <div>
    {items.map(item => <Item key={item.key} item={item}/>)}
  </div>;
};

export default List;
