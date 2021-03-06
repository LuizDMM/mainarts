import Button from 'components/button/button.component'
import FormInput from 'components/form-input/form-input.component'
import { useState } from 'react'
import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from 'utils/firebase/firebase.utils'
import './sign-in-form.styles.scss'

const defaultFormFields = { email: '', password: '' }

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { email, password } = formFields

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormFields({ ...formFields, [name]: value })
  }

  const signInWithGoogle = async () => {
    await signInWithGooglePopup()
  }

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      await signInAuthUserWithEmailAndPassword(email, password)
      resetFormFields()
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('Incorrect email or password')
          break

        case 'auth/user-not-found':
          alert('Incorrect email or passord')
          break

        default:
          console.log(error)
      }
    }
  }

  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="text"
          required
          name="email"
          onChange={handleChange}
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          name="password"
          onChange={handleChange}
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  )
}

export default SignInForm
