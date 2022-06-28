import SignUpForm from 'components/sign-up-form/sign-up-form.component'
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from 'utils/firebase/firebase.utils'

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup()
    const userDocRef = await createUserDocumentFromAuth(user)
    console.log(userDocRef)
  }
  return (
    <div>
      <h1>SignIn Page</h1>
      <button onClick={logGoogleUser}>Sign In with google</button>
      <SignUpForm />
    </div>
  )
}

export default SignIn
