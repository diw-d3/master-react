import React from 'react';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      subject: '',
      message: ''
    };
  }

  /**
   * Ici, on vérifie la validité du formulaire complet
   */
  isValidForm = () => {
    let isValid = true;

    if (!RegExp('^[a-z0-9-_.]+@[a-z0-9-_]+\\.[a-z]+$').test(this.state.email)) {
      isValid = false;
    }

    if (this.state.message.length < 3) {
      isValid = false;
    }

    return isValid;
  };

  /**
   * Ici, on vérifie la validité d'un champ en particulier
   */
  isValidMessage = () => {
    let isValid = true;

    if (this.state.message && this.state.message.length < 3) {
      isValid = false;
    }

    return isValid;
  };

  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // Affiche toutes les données du formulaire
    console.log(this.state);
    alert(this.state.email);
    // Une requête AJAX pour envoyer un mail par exemple...
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Sujet</label>
            <select
              name="subject"
              value={this.state.subject}
              onChange={this.handleChange}
              className="form-control"
            >
              <option value="">Choisir un sujet</option>
              <option value="Demande">Demande</option>
              <option value="Contact">Contact</option>
              <option value="Information">Information</option>
            </select>
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              value={this.state.message}
              onChange={this.handleChange}
              className="form-control"
            />
            {!this.isValidMessage() && (
              <div className="text-danger">Votre message est trop court.</div>
            )}
          </div>

          <button className="btn btn-primary" disabled={!this.isValidForm()}>
            Envoyer
          </button>
        </form>

        {this.state.email.length > 0 && <h2>Email: {this.state.email}</h2>}
        {this.state.subject.length > 0 && <h2>Sujet: {this.state.subject}</h2>}
        {this.state.message.length >= 3 && (
          <h2>Message: {this.state.message}</h2>
        )}
      </div>
    );
  }
}

export default ContactForm;
