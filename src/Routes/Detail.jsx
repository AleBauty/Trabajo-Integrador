import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ContextGlobal } from '../Components/utils/global.context';

const Detail = () => {
  const { id } = useParams();
  const { state } = useContext(ContextGlobal);
  const [professional, setProfessional] = useState(null);

  useEffect(() => {
    fetch(`/api/professionals/${id}`)
      .then(response => response.json())
      .then(data => setProfessional(data));
  }, [id]);

  if (!professional) return <div className={state.theme}>Loading...</div>;

  return (
    <div className={state.theme}>
      <h1>Detalle profesional id {id}</h1>
      <p>Nombre: {professional.name}</p>
      <p>Email: {professional.email}</p>
      <p>Cel: {professional.phone}</p>
      <p>Website: {professional.website}</p>
    </div>
  );
};

export default Detail;