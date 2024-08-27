import { useState } from "react";
import "./Tabs.css"
const options = [
  {
    title: "item 1",
    content: "im item 1",
    id: 1,
  },
  {
    title: "item 2",
    content: "im item 2",
    id: 2,
  },
  {
    title: "item 3",
    content: "im item 3",
    id: 3,
  },
  {
    title: "item 4",
    content: "im item 4",
    id: 4,
  },
  {
    title: "item 5",
    content: "im item 5",
    id: 5,
  },
];

function Tabs() {
  let [activId, setActivId] = useState(1);
  let handleClick = (id)=>{
    setActivId(id)
  }
  return (
    <div className="tabContainer frame">
      {options.map((item) => (
        <button
          className={` btn-12 custom-btn ${activId == item.id ? "avtiv" : ""}`}
          key={item.id}
          id={item.id}
          onClick={()=> handleClick(item.id)}
        >
          
          <span>Click!</span><span>{item.title}</span>
        </button>

      ))}
      <hr />
      <div>{options[activId - 1].content}</div>
    </div>
  );
}

// <div class="popup">
//   <div class="tabs">
//         <input type="radio" id="tab1" name="tab" checked="true">
//       <label for="tab1">FIRST TAB</label>
//         <input type="radio" id="tab2" name="tab">
//       <label for="tab2">SECOND TAB</label>
//         <input type="radio" id="tab3" name="tab">
//       <label for="tab3">THIRD TAB</label>
//         <input type="radio" id="tab4" name="tab">
//       <label for="tab4">FOURTH TAB</label>
//         <input type="radio" id="tab5" name="tab">
//       <label for="tab5">FIFTH TAB</label>
//         <input type="radio" id="tab6" name="tab">
//       <label for="tab6">SIXTH TAB</label>
//       <div class="marker">
//          <div id="top"></div>
//          <div id="bottom"></div>
//       </div>
//   </div>

// </div>

export default Tabs;
