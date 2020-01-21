import React from 'react';
import Button from './Button';
import Form from './Form';
import ContactForm from './ContactForm';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <ContactForm />
        {/* <Form /> */}
        {/* <Button text="Envoyer" /> */}
      </div>
    );
  }
}

export default App;
