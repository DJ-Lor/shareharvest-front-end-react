import { useState } from "react"
import { ArrowLongRightIcon } from '@heroicons/react/24/outline'


export default function NewsletterForm() {
  const [email, setEmail] = useState("");

  return (
    <div>
      <form>
        <span>
          <input type="text" 
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
        
        </span>
      </form> 
    </div>
  )
}



