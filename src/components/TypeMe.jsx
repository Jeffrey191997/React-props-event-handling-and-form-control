import { useState } from "react"

export default function TypeMe() {
  const [isFocus, setIsFocus] = useState(false);

  function handleFocus() {
    setIsFocus(true);
  }

  return (
    <div className="form-container">
      <input type="text" onBlur={handleFocus} />
      {isFocus && <p style={{color:'red'}}>Please type in here</p>}
    </div>
  )
}