import { authenticate } from '@/app/_lib/auth';
import { useFormState } from 'react-dom';

export default function Login() {
    
    const [state, authenticate] = useFormState(action, null);

  return (

    <form action={authenticate}>
<label></label>
      <input type="email" 
             name="email" 
             placeholder="Email" 
            required />
<label></label>
      <input type="password" 
             name="password" 
             placeholder="Password" 
            required />

      <button type="submit"> Login </button>

    </form>
  )
}