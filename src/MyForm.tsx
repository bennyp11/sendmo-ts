import react, { FC } from 'react';
import { Component, useState } from 'react';

type Props = {
    state: Information;
  };
  
  const MyForm: FC<Props> = ({ state }: Props) => {
    console.log(state.name);  // Error
    return <div>Hello, {state.name}</div>;
  };
  
  export default MyForm;