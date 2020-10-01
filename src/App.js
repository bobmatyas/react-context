import React from 'react';
import ColorList from "./components/ColorList.js";
import AddColorForm from "./components/AddColorForm";

export default function App() {
  return (
    <> 
    <h1>Color Chooser</h1>
    <AddColorForm />
    <ColorList />
    </>
  )
}