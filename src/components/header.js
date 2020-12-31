const Header = (props) => {
  return (
    <div>
      <h1>COUNTRY DATA</h1>
      <form style={{ marginBottom: "40px" }}>
        <select className="rmargin s-elements" onChange={props.optionfn}>
          <option value="name">Name</option>
          <option value="capital">Capital</option>
          <option value="region">Region</option>
        </select>
        <input
          type="text"
          className="rmargin s-elements"
          onChange={props.textfn}
          placeholder="search here..."
        />
      </form>
    </div>
  );
};

export default Header;
