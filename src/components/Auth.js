import classes from './Auth.module.scss';
import { useDispatch } from 'react-redux';
import { authActions } from '../store/auth'

const Auth = () => {
  const dispatcher = useDispatch()

  const submitLoginFormHandler = (event) => {
    event.preventDefault()
    dispatcher(authActions.login())
  }
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={submitLoginFormHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button type='submit'>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
