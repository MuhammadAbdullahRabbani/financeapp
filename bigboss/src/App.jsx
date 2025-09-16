import './App.css'

function App() {
  function handleSubmit(e) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const data = Object.fromEntries(form.entries())
    console.log('Signup submit:', data)
    e.currentTarget.reset()
  }

  return (
    <>
      <div className="signup-wrap">
        <section className="hero">
          <span className="badge">✨ Join Rabbani</span>
          <h1 className="title">Create your account</h1>
          <p className="subtitle">Start your journey with a clean, fast, beautiful setup.</p>

          <div className="points">
            <div className="point"><i>✓</i><span>Blazing fast Vite + React</span></div>
            <div className="point"><i>✓</i><span>Minimal, modern UI</span></div>
            <div className="point"><i>✓</i><span>No nonsense — just sign up</span></div>
          </div>

          <p className="footer-note">By creating an account, you agree to our Terms and Privacy.</p>
        </section>

        <section>
          <form className="card-signup" onSubmit={handleSubmit}>
            <h3>Sign up</h3>
            <input className="input" type="text" name="name" placeholder="Full name" required />
            <input className="input" type="email" name="email" placeholder="Email address" required />
            <input className="input" type="password" name="password" placeholder="Password" required />
            <button className="btn-primary" type="submit">Create account</button>
            <div className="helper">Already have an account? <a href="#">Log in</a></div>
          </form>
        </section>
      </div>
    </>
  )
}

export default App
