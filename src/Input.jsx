import { useState } from "react";
import "./assets/Input.css";
export default function Input({ setSpace }) {
  let [value, setValue] = useState("");
  const addItem = () => {
    setSpace((prev) => {
      const newList = [...prev, value];
      localStorage.setItem("tripList", JSON.stringify(newList));
      return newList;
    });
    setValue("");
  };
  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      addItem();
    }
  };
  return (
    <div className="input mw">
      <input
        className="spaceInput"
        type="text"
        placeholder="가고싶은 여행지를 등록하세요"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyUp={handleKeyUp}
      />
      <button
        onClick={() => {
          if (value.trim() !== "") {
            addItem();
          } else {
            alert("장소를 입력해주세요!");
            setValue("");
          }
          document.querySelector(".spaceInput").focus();
        }}
      >
        <span>ADD</span>
        <i className="fa-regular fa-square-plus"></i>
      </button>
    </div>
  );
}
