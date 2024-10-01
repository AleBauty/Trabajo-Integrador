import { useContext } from 'react';
import Form from '../Components/Form';
import { ContextGlobal } from '../Components/utils/global.context';

const Contact = () => {
  const { state } = useContext(ContextGlobal);

  return (
    <div className={state.theme}>
      <h2>¿Quieres saber más?</h2>
      <p>Envíenos sus preguntas y nos pondremos en contacto con usted</p>
      <Form />
    </div>
  );
};

export default Contact;