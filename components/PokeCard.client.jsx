const PokeCard = ({ sprites, name }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl mb-4">
      <figure>
        <img src={sprites?.front_default} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
      </div>
    </div>
  );
}
 
export default PokeCard;