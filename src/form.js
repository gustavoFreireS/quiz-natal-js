import React, { useState } from 'react';

function Form({ obj }) {
  const [form, setForm] = useState({});
  const [recebido, setRecebido] = useState(false);
  const changeInput = e => {
    setForm({
      ...form,
      [e.target.id]: e.target.value
    });
  };
  const clickHandler = () => {
    fetch('http://fd3edc6d.ngrok.io/api/v1/pessoas', {
      method: 'POST',
      body: JSON.stringify({
        name: form.name,
        email: form.email
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    });
    setRecebido(true);
  };
  return (
    <div>
      <h2>
        Obrigado por respoder a nosso quiz, por favor insira seu nome e seu
        email abaixo para receber o resultado:
      </h2>
      <p>Nome</p>
      <input type="text" id="name" onChange={changeInput} />
      <p>Email</p>
      <input id="email" type="Email" onChange={changeInput} />
      <br />
      <button onClick={clickHandler}>Receber Resultado</button>
      {recebido && (
        <h2>você acertou {obj.numberOfCorrectAnswers} de 10 respostas</h2>
      )}
    </div>
  );
}

export default Form;
