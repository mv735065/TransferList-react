import React, { useState } from "react";
// import  LeftBoxItems from './LeftBoxItems'
// import  MiddleOperationalElements from './MiddleOperationalElements'
// import  RightBoxItems from './RightBoxItems'
// [{name: "html", id: 1, isChecked: true, isLeft: false}]
const MainContainer = () => {
  const [leftItems, setLeftItems] = useState([
    "Vue.js",
    "Node.js",
    "Java",
    "Python",
    "JavaScript",
    "C++",
    "Ruby",
    "Go",
    "PHP",
    "Swift",
  ]);
  const [rightItems, setRightItems] = useState([]);
  const [checked, setChecked] = useState(new Set());

  function handleCheck(item) {
     
    let newSet = new Set(checked);
    if (!newSet.has(item)) {
        newSet.add(item);
      setChecked(newSet)
    }
  }

  function moveToRight() {
    let itemsChecked = leftItems.filter((item) => checked.has(item));
    setLeftItems((prev) => {
      return prev.filter((ele) => !itemsChecked.includes(ele));
    });
    setRightItems((prev) => [...prev, ...itemsChecked]);
    setChecked((prev) => {
        let newSet = new Set();
        checked.forEach((ele)=>{
            if(!itemsChecked.includes(ele)){
                newSet.add(ele);
            }
        });
       return newSet;
    });
  }

  function moveToLeftt() {
    let itemsChecked = rightItems.filter((item) => checked.has(item));
    setRightItems((prev) => {
      return prev.filter((ele) => !itemsChecked.includes(ele));
    });
    setLeftItems((prev) => [...prev, ...itemsChecked]);
    setChecked((prev) => {
        let newSet = new Set();
        checked.forEach((ele)=>{
            if(!itemsChecked.includes(ele)){
                newSet.add(ele);
            }
        });
       return newSet;
    });
  }

  function moveItemsToLeft() {
    setLeftItems((prev) => [...prev, ...rightItems]);
    setRightItems([]);
    setChecked(new Set());
  }

  function moveItemsToRight() {
    setRightItems((prev) => [...prev, ...leftItems]);
    setLeftItems([]);
    setChecked(new Set());
  }

  const renderList = (items) => (
    <ul>
      {items.map((item) => (
        <li key={item}>
          <input
            type="checkbox"
            checked={checked.has(item)}
            onChange={() => handleCheck(item)}
          />
          {item}
        </li>
      ))}
    </ul>
  );

  return (
    <div className="w-[90vw] flex flex-row  border my-4 mx-auto">
      <div className="border flex-3 p-4 ">{renderList(leftItems)}</div>

      <div className="border flex-1 flex flex-col justify-center gap-2 items-center py-4">
        <button className="border py-0.5 px-4 w-fit" onClick={moveItemsToLeft}>
          &lt;&lt;{" "}
        </button>
        <button className="border py-0.5 px-4 w-fit" onClick={moveToLeftt}>
          &lt;{" "}
        </button>
        <button className="border py-0.5 px-4 w-fit" onClick={moveToRight}>
          &gt;{" "}
        </button>
        <button className="border py-0.5 px-4 w-fit" onClick={moveItemsToRight}>
          &gt;&gt;{" "}
        </button>
      </div>

      <div className="border flex-3  p-4">{renderList(rightItems)}</div>
    </div>
  );
};

export default MainContainer;
