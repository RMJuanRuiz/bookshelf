import '@reach/dialog/styles.css'
import * as React from 'react'
import {createRoot} from 'react-dom/client'
import {Logo} from './components/logo'
import {Dialog} from '@reach/dialog'

const LoginForm = ({buttonText = 'Login', onSubmit}) => {
  const handleSubmit = event => {
    event.preventDefault()
    const {username, password} = event.target.elements

    onSubmit({
      username: username.value,
      password: password.value,
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input name="username" type="text"></input>
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input name="password" type="password"></input>
        </div>

        <button type="submit">{buttonText}</button>
      </form>
    </>
  )
}

const App = () => {
  const [openModal, setOpenModal] = React.useState('none')

  const login = data => {
    console.log('Login:: ', data)
  }
  const register = data => {
    console.log('Register:: ', data)
  }

  return (
    <>
      <Logo width="80" height="80" />
      <h1>Bookshelf</h1>

      <div>
        <button onClick={() => setOpenModal('login')}>Login</button>
      </div>
      <div>
        <button onClick={() => setOpenModal('register')}>Register</button>
      </div>

      <Dialog
        aria-label="Login form"
        isOpen={openModal === 'login'}
        onDismiss={() => setOpenModal('none')}
      >
        <button onClick={() => setOpenModal('none')}>Close</button>
        <LoginForm onSubmit={login}></LoginForm>
      </Dialog>

      <Dialog
        aria-label="Register form"
        isOpen={openModal === 'register'}
        onDismiss={() => setOpenModal('none')}
      >
        <button onClick={() => setOpenModal('none')}>Close</button>
        <LoginForm buttonText="Register" onSubmit={register}></LoginForm>
      </Dialog>
    </>
  )
}

const root = createRoot(document.getElementById('root'))
root.render(<App />)
export {root}
