import React from 'react'
import Home from './Home'
import Qonun from './Qonun'
import ClientForm from '../components/ClientForm';

export default function Base() {
  return (
    <React.Fragment>
      <Home />
      <Qonun />
      <Qonun />
      <Qonun />
      <ClientForm/>
    </React.Fragment>
  );
}
