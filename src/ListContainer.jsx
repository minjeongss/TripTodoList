import "./assets/List.css";
import List from "./List";
import NoList from "./NoList";

export default function ListContainer({ space, setSpace }) {
  return (
    <ul className="list mw">
      {space.length === 0 ? (
        <NoList />
      ) : (
        space.map((elem, idx) => (
          <List key={idx} idx={idx} space={elem} setSpace={setSpace} />
        ))
      )}
    </ul>
  );
}
