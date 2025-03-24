import React, { useState } from "react";
// import  LeftBoxItems from './LeftBoxItems'
// import  MiddleOperationalElements from './MiddleOperationalElements'
// import  RightBoxItems from './RightBoxItems'




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
        "Swift"
    ]);
  const [rightItems, setRightItems] = useState([]);
  const [checked, setChecked] = useState([]);


function handleCheck(item){
    if(checked.includes(item)){
        setChecked((prev)=>{
           return prev.filter((ele)=>ele!=item);

        })
    }
    else{
        setChecked(prev=>[...prev,item])
    }
}

function moveToRight(){
    let itemsChecked=leftItems.filter((item)=>checked.includes(item));
    setLeftItems((prev)=>{
      return  prev.filter((ele)=>!itemsChecked.includes(ele))
    });
    setRightItems((prev) => [...prev, ...itemsChecked]); 
    setChecked((prev)=>{
        return  prev.filter((ele)=>!itemsChecked.includes(ele))
    });

}

function moveToLeftt(){
    let itemsChecked=rightItems.filter((item)=>checked.includes(item));
    setRightItems((prev)=>{
      return  prev.filter((ele)=>!itemsChecked.includes(ele))
    });
    setLeftItems((prev) => [...prev, ...itemsChecked]); 
    setChecked((prev)=>{
        return  prev.filter((ele)=>!itemsChecked.includes(ele))
    });

}

function moveItemsToLeft(){
    setLeftItems(prev=>[...prev,...rightItems]);
    setRightItems([]);
    setChecked([]);
}

function moveItemsToRight(){
    setRightItems(prev=>[...prev,...leftItems]);
    setLeftItems([]);
    setChecked([]);
}




  const renderList = (items) => (
    <ul>
      {items.map((item) => (
        <li key={item}>
          <input
            type="checkbox"
            checked={checked.includes(item)}
            onChange={() => handleCheck(item)}
          />
          {item}
        </li>
      ))}
    </ul>
  );

  return (
    <div className="w-[90vw] flex flex-row  border my-4 mx-auto">
        <div className='border flex-3'>{renderList(leftItems)}</div>

     <div className='border flex-1 flex flex-col justify-center gap-2 items-center py-4'>
       <button className='border py-0.5 px-4 w-fit' onClick={moveItemsToLeft}>&lt;&lt; </button>
       <button className='border py-0.5 px-4 w-fit' onClick={moveToLeftt}>&lt; </button>
       <button className='border py-0.5 px-4 w-fit' onClick={moveToRight} >&gt; </button>
       <button className='border py-0.5 px-4 w-fit' onClick={moveItemsToRight}>&gt;&gt; </button>

    </div>

    <div className='border flex-3'>{renderList(rightItems)}</div>
  </div>
  )
}

export default MainContainer