import "./assets/TotalCount.css";
export default function Totalcount({ space }) {
  return (
    <div className="totalCount mw">
      <span>Total</span>
      <span>{space.length}</span>
    </div>
  );
}
