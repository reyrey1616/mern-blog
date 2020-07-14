import React from 'react';
import { Button, Typography } from '@material-ui/core';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { SignupFormLayout } from './SignupForm.styles';
import { registerStart } from '../../redux/users/user.actions';
import { connect } from 'react-redux';
import { compose } from 'redux';
class SignupForm extends React.Component {
  state = {
    email: '',
    name: '',
    password: '',
    repeatPassword: '',
  };

  handleChange = (event) => {
    const name = event.target.name;
    const val = event.target.value;
    this.setState({ [name]: val });
  };

  handleSubmit = () => {
    console.log(this.state);
    const { email, name, password } = this.state;
    this.props.register(email, name, password);
  };

  componentDidMount() {
    ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
      if (value !== this.state.password) {
        return false;
      }
      return true;
    });
  }
  componentWillUnmount() {
    // remove rule when it is not needed
    ValidatorForm.removeValidationRule('isPasswordMatch');
  }

  render() {
    const { email, name, password, repeatPassword } = this.state;
    return (
      <ValidatorForm
        ref='form'
        onSubmit={this.handleSubmit}
        onError={(errors) => console.log(errors)}
      >
        <SignupFormLayout>
          <Typography variant='h4' color='primary'>
            Signup
          </Typography>
          <Typography variant='h6'>
            Create your account easy with less information.
          </Typography>

          <TextValidator
            label='Email'
            onChange={this.handleChange}
            name='email'
            value={email}
            validators={['required', 'isEmail']}
            errorMessages={['this field is required', 'email is not valid']}
          />

          <TextValidator
            label='Name'
            onChange={this.handleChange}
            name='name'
            value={name}
            validators={['required']}
            errorMessages={['this field is required']}
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

          <TextValidator
            label='Repeat password'
            onChange={this.handleChange}
            name='repeatPassword'
            type='password'
            validators={['isPasswordMatch', 'required']}
            errorMessages={['password mismatch', 'this field is required']}
            value={repeatPassword}
          />
          <Button type='submit' variant='contained' color='primary'>
            Submit
          </Button>
        </SignupFormLayout>
      </ValidatorForm>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  register: (email, name, password) =>
    dispatch(registerStart(email, name, password)),
});

export default connect(null, mapDispatchToProps)(SignupForm);
