import React, { useState } from "react";

const InputBox = ({ title,handleToParent }) => {
  let [checked, setChecked] = useState(false);
  
  function handleClick() {
    setChecked(prev=>!prev);
    handleToParent(checked);
  }
  return (
    <div>
      <input type="checkbox" value={title} id={title} onClick={handleClick} />
      <label htmlFor="{title}">{title}</label>
    </div>
  );
};

export default InputBox;
