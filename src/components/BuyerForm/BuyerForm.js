import React, { useState } from "react"
import { Form, FormControl, FormGroup, Button, Alert } from "react-bootstrap"

const BuyerForm = ({ onGenerateOrder }) => {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [email2, setEmail2] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    if (!name || !phone || !email) {
      setError("Todos los campos son requeridos")
    } else if (email !== email2) {
      setError("Email no válido")
    } else {
      setError("")
      onGenerateOrder(name, phone, email)
    }
  };

  return (
    
    <Form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", justifyItems: "center", alignItems: "center"}}>
      {error && <Alert variant="danger">{error}</Alert>}
      <FormGroup style={{ marginBottom: "20px" }}>
        <FormControl
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </FormGroup>
      <FormGroup style={{ marginBottom: "20px" }} >
        <FormControl
          type="tel"
          placeholder="Teléfono"
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />
      </FormGroup>
      <FormGroup style={{ marginBottom: "20px" }} >
        <FormControl
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </FormGroup>
      <FormGroup style={{ marginBottom: "20px" }} >
        <FormControl
          type="email"
          placeholder="Confirmar Email"
          value={email2}
          onChange={e => setEmail2(e.target.value)}
        />
      </FormGroup>
      <Button type="submit" variant="primary" >
        Generar orden
      </Button>
    </Form>
  );
};

export default BuyerForm;
