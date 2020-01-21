import React from 'react';
import Button from './Button';
import Form from './Form';
import ContactForm from './ContactForm';
import Calculator from './calculator/Calculator';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Calculator />
        {/* <ContactForm /> */}
        {/* <Form /> */}
        {/* <Button text="Envoyer" /> */}
      </div>
    );
  }
}

export default App;
