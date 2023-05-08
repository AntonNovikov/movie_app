function MyName({name,rating}) {
  return (
    <div>
  <h3>{name}</h3>
  <h4>{rating}/5.0</h4>
  </div>
  );
  // return <h3>{props["name"]}</h3>;
}
export default MyName;