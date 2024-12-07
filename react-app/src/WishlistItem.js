function toggleClaimedState(id) {
  // make call to server with id
  // call some react hook
}

function WishlistItem(props) {
  return (
    <li>
      <h1>{props.title}</h1>
      <img alt={props.title} src={props.image}></img>
      <p>{props.price}</p>
      <button>{props.claimed ? "Claimed" : "Claim"}</button>
    </li>
  );
}

export default WishlistItem;
