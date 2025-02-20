import "./signup.css"

const SignUp = () => {
  return (
    <div className="signup-wrapper">
    <div className="signup-image">
    <h1>Welcome To <br /><span>Estore</span></h1>
    </div>
    <div className="signup-text">
      <h2>Sign Up</h2>
      <input type="text" placeholder="Username"/>
      <input type="email" placeholder="Email"/>
      <input type="password" placeholder="Password"/>
      <button>Sign up</button>
    </div>
  </div>
  )
}

export default SignUp
