import { useDispatch } from 'react-redux'
import { login } from '../slices/userSlice'

export default function Auth({ onSuccess }) {
  const dispatch = useDispatch()

  const submit = (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    dispatch(login({ name: form.get('name'), email: form.get('email') }))
    onSuccess()
  }

  return (
    <form className="card" onSubmit={submit}>
      <h3>Login / Register</h3>
      <div>
        <label>Name</label>
        <input name="name" required placeholder="Jane Doe" />
      </div>
      <div>
        <label>Email</label>
        <input name="email" type="email" required placeholder="jane@example.com" />
      </div>
      <button className="btn primary" type="submit">Continue</button>
    </form>
  )
}
