import { useState, useEffect } from 'react';
import Header from './Header';
import SearchItem from './SearchItem';
import AddItem from './AddItem';
import Content from './Content';
import Footer from './Footer';

function App(){

  const [items, setItems] = useState([]);
  
  useEffect(() => {
    try {
      const data = JSON.parse(localStorage.getItem('todo_list'));
      if (Array.isArray(data)) {
        setItems(data);
      } else {
        setItems([]);
      }
    } catch (err) {
      console.error("Failed to parse todo_list from localStorage:", err);
      setItems([]);
    }
  }, []);


  const handleCheck = (id) => {
      // console.log(`id: ${id}`)

      const listItems = items.map((j) => (j.id === id ? {...j, checked:!j.checked} : j))
      setItems(listItems)
      localStorage.setItem("todo_list", JSON.stringify(listItems))
  }

  const handleDelete = (id) => {
      // console.log(`id: ${id}`)
      
      const listItems = items.filter(j => j.id !== id);
      setItems(listItems)
      localStorage.setItem("todo_list", JSON.stringify(listItems))
  }
  
  const [newItem, setNewItem] = useState('')

  const handleSubmit = (e) => {
    // To prevent the form from reloading
    e.preventDefault()
    
    // console.log("Submitted")

    if(!newItem){
      return;
    }

    // console.log(newItem)
    addItem(newItem)

    // To empty the search bar
    setNewItem('')
  }

  const addItem = (itemName) => {
    const newId = items.length ? (Number(items[items.length-1].id)+1).toString() : "1";

    const addNewItem = {id:newId, checked:false, item: itemName}

    const listItems = [...items, addNewItem]
    setItems(listItems)
    localStorage.setItem("todo_list", JSON.stringify(listItems))
  }

  const [search, setSearch] = useState('')

  return (
    <div className="App">
      <Header title="Quick List"/>
      <SearchItem 
        search={search}
        setSearch={setSearch}
      />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <Content
          items = {items.filter(i => (i.item).toLowerCase().includes(search.toLowerCase()))}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
      />
      <Footer
        len = {items.length}
      />
    </div>
  )
}

export default App;