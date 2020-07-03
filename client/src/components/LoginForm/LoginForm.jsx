import React from 'react';
import { Button, Typography } from '@material-ui/core';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { LoginFormLayout } from './LoginForm.styles';
import { connect } from 'react-redux';
import { setAlert } from '../../redux/alerts/alerts.actions';

class LoginForm extends React.Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = (event) => {
    const name = event.target.name;
    const val = event.target.value;
    this.setState({ [name]: val });
  };

  handleSubmit = () => {
    const { email, password } = this.state;
    if (email === 'rey@gmail.com' && password === 'rey') {
      this.props.setAlert('Nice ya', 'success', 3000);
    } else {
      this.props.setAlert('Sala password', 'error', 3000);
    }
  };

  render() {
    const { email, password } = this.state;
    return (
      <ValidatorForm
        ref='form'
        onSubmit={this.handleSubmit}
        onError={(errors) => console.log(errors)}
      >
        <LoginFormLayout>
          <Typography variant='h4' color='primary'>
            Login your account
          </Typography>
          <Typography variant='h6'>Welcome back</Typography>

          <TextValidator
            label='Email'
            onChange={this.handleChange}
            name='email'
            value={email}
            validators={['required', 'isEmail']}
            errorMessages={['this field is required', 'email is not valid']}
          />

          <TextValidator
            label='Password'
            onChange={this.handleChange}
            type='password'
            name='password'
            value={password}
            validators={['required']}
            errorMessages={['this field is required']}
          />

          <Button type='submit' variant='contained' color='primary'>
            Login
          </Button>
        </LoginFormLayout>
      </ValidatorForm>
    );
  }
}

export default connect(null, { setAlert })(LoginForm);
