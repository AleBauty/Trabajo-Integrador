import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextGlobal } from './utils/global.context';
import perfil from '../images/doctor.jpg'
const Card = ({ name, username, id }) => {
  const { state, addFav, removeFav } = useContext(ContextGlobal);

  const isFav = state.favs.some(fav => fav.id === id);

  const handleFavClick = () => {
    if (isFav) {
      removeFav({ id });
    } else {
      addFav({ name, username, id });
    }
  };

  return (
    <div className={`card ${state.theme}`}>
<img src={perfil} alt="doctor" className="card-img-top" style={{width: '50%', height: '32%'}} />      <Link to={`/professional/${id}`}>
        <h3>{name}</h3>
        <p>{username}</p>
      </Link>
     
      <button onClick={handleFavClick} className="favButton">
        {isFav ? 'Remover fav' : 'Agregar fav'}
      </button>
    </div>
  );
};

export default Card;