import { Container } from 'react-bootstrap'
import React from 'react'
import Header from './components/header'

const App = () => {
  return (
  <>
    <Header/>
    <main className='py-3'>
      <Container >
      <h1>Welcome to Proshop</h1>
      </Container>
    </main>
  </>
  );
};

export default App
