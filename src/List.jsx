import "./assets/List.css";
export default function List({ idx, space, setSpace }) {
  const removeItem = () => {
    setSpace((prev) => {
      const newList = prev.filter((_elem, currIdx) => currIdx !== idx);
      localStorage.setItem("tripList", JSON.stringify(newList));
      return newList;
    });
  };
  return (
    <li>
      <span>{space}</span>
      <i
        onClick={() => {
          removeItem();
        }}
        className="fa-regular fa-trash-can"
      ></i>
    </li>
  );
}
