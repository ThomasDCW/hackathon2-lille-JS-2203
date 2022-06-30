import SResult from "./style";

export default function Result() {
  return (
    <SResult>
      <p> Recherche</p>
      <input
        name="myinput"
        // value={filterValue}
        type="search"
        // onChange={(e) => {
        //   setFilterValue(e.target.value);
        // }}
        placeholder="Votre recherche"
      />
    </SResult>
  );
}
