import React, { FC } from 'react';
import { Component, useState } from 'react';
import MyForm from './MyForm';
import './App.css';

export interface Information {
  name: string;
  age: string;
}

const App: FC = () => {
  const [state, setState] = useState<Information | null>({
    name: "ben",
    age: "10",
  });

  return (
        <div className="state-holder">
          <MyForm state={state} />
        </div>
  );
};

export default App;