import { useContext } from 'react';
import Card from "../Components/Card";
import { ContextGlobal } from '../Components/utils/global.context';

const Home = () => {
  const { state } = useContext(ContextGlobal);

  return (
    <main className={state.theme}>
      <h1>Home</h1>
      <div className="card-grid">
        {state.data.map(professional => (
          <Card key={professional.id} {...professional} />
        ))}
      </div>
    </main>
  );
};

export default Home;