import * as React from 'react';
import { useState } from 'react';

import './App.css';
import data from './userdata/list_of_objects.json';
import Button from '@mui/material/Button';
import { Dialog, DialogTitle, List, ListItemButton, Collapse, ListItemText, TextField, ListItem } from '@mui/material';
import DialogActions from '@mui/material/DialogActions';
import useMediaQuery from '@mui/material/useMediaQuery';


//*****FRONTEND***** */
//TODO: show list items visually that they are connected/related to a colapsed list
//TODO: creating a new list, the popup should look bigger

//******BACKEND******
//TODO CREATE: new (empty) list
//TODO UPDATE: list with updated with added items
//TODO UPDATE: change an existing list name
//TODO UPDATE: change an existing list item name
//TODO DELETE: existing list
//TODO DELETE: existing list item 

function App() {
  return (
    <div className="App">
       <h1>Object calculator</h1>
       <CreateListComponent/>
       <ListOfObjectsComponent/>
    </div>
  );
}



function CreateListComponent()
{
  const [listName, setListName] = useState("");
  const handleSubmit = (Event) =>{
    
  }

  const [open, setOpen] = useState(false);

  function HandleClick(){
    setOpen(!open);
  }
//https://react.dev/reference/react-dom/components/form#noun-labs-1201738-(2)
  return(
    <div>
            <Button variant='contained' onClick={HandleClick}>Create new list</Button>
      <Dialog
      open={open}
      onClose={HandleClick}
      >
    <form>
      <label>Enter list name
      <input type='text' value={listName} onChange={(e) => setListName(e.target.value)}/>
      </label>
      <Button title='submit' type='submit'>Create list</Button>
    </form>
    </Dialog>
    </div>

  );
}

/*
function CreateListComponent() {
  //TODO: redo the handle click function
  //TODO: rework dialog
  const [open, setOpen] = useState(false);
  const [listName, setListName] = useState("");
  const handleChange = e => {
    setListName(e.target.value);
  };
  function HandleClick(){
    setOpen(!open);
  }
  return (
    <div>
      <Button variant='contained' onClick={HandleClick}>Create new list</Button>
      <Dialog
      open={open}
      onClose={HandleClick}
      >
        <DialogTitle>Enter a list name</DialogTitle>
        <TextField value={listName} onChange={handleChange} required={true} hint="New army"></TextField>
        <DialogActions>
        <Button onClick={CreateList(listName)} variant='contained'>Create</Button>
        </DialogActions>
      </Dialog>

    </div>
  );
}



function CreateList(listName)
{
  //Check if list has no "empty" value
  //TODO add (empty) list to json file
  //TODO handle that this event when CreateListComponent dialog has opened
  if(listName === "") {
    return(
      console.log("Empty listname")
    ); 
  }
  else {
    return(
      data.listWithObjects[listName]
     ); 
  }

}*/

function ListOfObjectsComponent()
{
  //fetch lists from json
  return data.listWithObjects.map(obj => {
    return(
      <List key={obj.id}>
     {ListItemComponent(obj)}
     </List>
    );
  }
  );
}

function ListItemComponent(obj)
{
  const [open, setOpen] = useState(false);

  function handleClick(){
    setOpen(!open);
  }
  //Check if a list has items
  if(obj.listItems === undefined)
  {
    return(
      <div key={obj.id}>
      <ListItemButton key={obj.id} onClick={handleClick}>
        <ListItemText primary={obj.listName}/>
      </ListItemButton>
    </div>
    );
  }
  else
  {
    return(
      <div key={obj.id}>
      <ListItemButton onClick={handleClick}>
        <ListItemText primary={obj.listName}/>
        
      </ListItemButton>  
      <Collapse  in={open} unmountOnExit>
        <List key={obj.id}>
        {obj.listItems.map(item =>{
        return (<ListItem key={item.id}>
          <ListItemText primary={item.name}/>
          <ListItemText primary={item.amount}/>
          <ListItemText primary={item.value}/>
        </ListItem>
        )
            }
          )
        }
        Total: {GetTotalValue(obj)}
        </List>
      </Collapse>
    </div>
    );
  }
}

//Get the value of all items tallied up
function GetTotalValue(objectList)
{
  var totalValue = 0;

  objectList.listItems.map(item =>{
    totalValue  = totalValue + JSON.parse(item.value);
  });

 return totalValue;

}

export default App;
