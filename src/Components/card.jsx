import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";

const Card = ({ dentist }) => {
  const { state, dispatch } = useContext(ContextGlobal);
  const [isFavorite, setIsFavorite] = useState(false);
  const { name, username, id } = dentist;

  useEffect(() => {
    const isFavorite = state.favoriteDentist.some((dentist) => dentist.id == id);
    setIsFavorite(isFavorite);
  }, [])

  const addFav = () => {
    if (isFavorite) {
      dispatch({ type: "deleteFav", id });
      setIsFavorite(false);
    } else {
      dispatch({ type: "addFavDentist", dentist });
      setIsFavorite(true);
    }
  };

  return (
    <div className="card">
      <Link className="card-superior" to={`/detail/${id}`}>
        <img
          src="../../public/images/doctor.jpg"
          alt="dentist"
        />
        <h2>{name}</h2>
        <p >{username}</p>
      </Link>
      <button
        onClick={addFav}
        className="favButton"
        style={{ backgroundColor: isFavorite ? "Blue" : "Violet", color: "white" }}
      >
        {isFavorite ? "Remove ⭐️" : "⭐️"}
      </button>
    </div>
  );
};

export default Card;