import { useState, useContext } from 'react';
import { ContextGlobal } from './utils/global.context';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const { state } = useContext(ContextGlobal);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length <= 5) {
      setError('Por favor verifique su información nuevamente');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Por favor verifique su información nuevamente');
      return;
    }
    setError('');
    setSuccess(`Gracias ${name}, te contactaremos cuando antes vía mail`);
    console.log({ name, email });
  };

  return (
    <div className={state.theme}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre completo"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
    </div>
  );
};

export default Form;