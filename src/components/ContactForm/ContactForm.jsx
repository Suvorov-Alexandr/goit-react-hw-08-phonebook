import { Wrapper, Form, Label, Input, Button } from "./ContactForm.styled";
import { Component } from "react";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  static propTypes = {
    onSubmit: PropTypes.func,
  };

  handleInputChange = ({ currentTarget }) => {
    const name = currentTarget.name;
    const value = currentTarget.value;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();

    const name = evt.currentTarget.name.value;
    const number = evt.currentTarget.number.value;

    this.props.onSubmit({ name, number, id: nanoid() });

    this.reset();
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number } = this.state;
    return (
      <Wrapper>
        <Form onSubmit={this.handleSubmit}>
          <Label>
            Name
            <Input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              onChange={this.handleInputChange}
            />
            <Label>
              Number
              <Input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                value={number}
                onChange={this.handleInputChange}
              />
            </Label>
          </Label>
          <Button type="submit">Add contact</Button>
        </Form>
      </Wrapper>
    );
  }
}

export default ContactForm;
