import React from 'react';
import styles from './Login.module.css';

function Login() {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.imageContainer}>
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          alt="Login"
        />
      </div>
      <div className={styles.formContainer}>
        <div className={styles.formBox}>
          <div className={styles.container}>
            <div className={styles.loginContainerWrapper}>
              <div className={styles.logo}>
                <i className="fa fa-sign-in"></i>
              </div>
              <div className={styles.welcome}>
                <strong>Let's get you logged in!</strong>
              </div>

              <form>
                <div className={styles.formGroup}>
                  <label htmlFor="login_username">Username</label>
                  <input
                    id="login_username"
                    className={`form-control ${styles.inputLg}`}
                    type="email"
                    placeholder="Username"
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="login_password">Password</label>
                  <input
                    id="login_password"
                    className={`form-control ${styles.inputLg}`}
                    type="password"
                    placeholder="Password"
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <button
                    type="submit"
                    className={`btn btn-success btn-lg btn-block`}
                  >
                    Login
                  </button>
                </div>
              </form>

              <div className={styles.forgotLinks}>
                <a href="#" className={styles.forgotUsername}>
                  Forgot Username?
                </a>
                <span className={styles.divider}>|</span>
                <a href="#" className={styles.forgotPassword}>
                  Forgot Password?
                </a>
              </div>
              <div className={styles.registerLink}>
                <p>
                  New to the world of online banking? Let's get you started –{' '}
                  <a href="#">Register now!</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
