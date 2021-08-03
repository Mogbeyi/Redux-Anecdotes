import React from "react";
import NewAnecdote from "./components/NewAnecdote";
import Anecdotes from "./components/Anecdotes";

const App = () => {
  return (
    <div>
     <Anecdotes />
      <h2>Create New Anecdote</h2>
      <NewAnecdote />
    </div>
  );
};

export default App;
