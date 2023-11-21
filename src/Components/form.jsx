import { useState } from "react"

const Form = () => {
  const[nombre,setNombre]=useState("");
  const[email,setEmail]=useState("");
  const [message, setMessage] = useState("")


  const handleSubmit = (e)=>{
    e.preventDefault();
  

    if (nombre.length<=5) {
        setMessage("Por favor verifica tu informacion nuevamente")
    } else{
        setNombre("");
        setEmail("");
        setMessage(`Gracias ${nombre}, nos contactaremos lo antes posible via email!`)
    }
};

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Ingresa tu nombre completo" value={nombre} onChange={(e)=>setNombre(e.target.value)} />
        <input type="email" placeholder="Ingresa tu email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
        <button className="Submit" type= "submit"> Enviar </button>
      </form>
      {message && <div className="message">{message}</div>}
    </div>
  )

};

export default Form;