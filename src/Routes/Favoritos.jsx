
import { useContext } from "react";
import Card from "../Components/card";
import { ContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favoritos = () => {
  const { state} = useContext(ContextGlobal);

  function deleteAllDentistInStorage() {
    dispatch({ type: "deleteFavs" });
  }

  return (
    <>
      <h1> ⭐️ Fav Dentists ⭐️ </h1>
      <div className="card-grid">
        {state.favoriteDentist.length === 0 && <h2>No  tienes Odontologos Favoritos</h2>}
        {state.favoriteDentist.length > 0 && state.favoriteDentist.map((dentist) => {
          return <Card dentist={dentist} key={dentist.id} />
        })}
        
      </div>
    </>
  );
};

export default Favoritos;