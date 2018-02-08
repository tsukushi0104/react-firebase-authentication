import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase';
import * as routes from '../../constants/routes';
import { Button, Header, Form } from 'semantic-ui-react'

const ProfileEditPage = () =>
  <div>
    <ProfileEditForm />
  </div>

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  error: null,
};

class ProfileEditForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    event.preventDefault();
  }

  render() {
    const {
      email,
      error,
    } = this.state;

    const isInvalid = email === '';

    return (
      <Form onSubmit={this.onSubmit}>
        <Header as='h3'>Profile</Header>
        <Form.Input
          value={this.state.email}
          onChange={event => this.setState(updateByPropertyName('email', event.target.value))}
          type="text"
          placeholder="Email Address"
        />
        <Form.Button disabled={isInvalid} type="submit">
          Update
        </Form.Button>

        { error && <p>{error.message}</p> }
      </Form>
    );
  }
}

const ProfileEditLink = () =>
  <p>
    <Link to={routes.ACCOUNT}>Edit Profile</Link>
  </p>

export default ProfileEditPage;

export {
  ProfileEditForm,
  ProfileEditLink,
};
