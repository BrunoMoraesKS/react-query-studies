import React from "react";
import "./App.css";
import { QueryClientProvider, QueryClient } from "react-query";
import Characters from "./components/Characters";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <div className="container">
          <h1>Rick and Morty</h1>
          <Characters />
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
