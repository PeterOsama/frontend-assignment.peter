import { FunctionComponent, useState, useEffect } from "react";

// Components
import Input from "./components/Input";
import List from "./components/List";
import { Items, itemInterface } from "./data";

const Task4: FunctionComponent = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState<itemInterface[]>(Items);
  useEffect(()=> {
    setFilteredItems(Items.filter(item => item.value.toLowerCase().includes(searchQuery.toLowerCase())))
  }, [searchQuery])

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    debugger
    event.stopPropagation();
    setSearchQuery(event.target.value);
  }
  return (
    <div>
      <Input value={searchQuery} handleChange={handleSearch} />
      <br />
      <List items={filteredItems} />
    </div>
  );
};

export default Task4;
