import { useContext } from 'react';
import Card from "../Components/Card";
import { ContextGlobal } from '../Components/utils/global.context';

const Favs = () => {
  const { state } = useContext(ContextGlobal);

  return (
    <div className={state.theme}>
      <h1>Dentistas Favoritos</h1>
      <div className="card-grid">
        {state.favs.map(professional => (
          <Card key={professional.id} {...professional} />
        ))}
      </div>
    </div>
  );
};

export default Favs;