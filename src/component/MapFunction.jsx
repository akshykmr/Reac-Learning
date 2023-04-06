import React from 'react'
const Shoppint_List = [
  {category:"jeans", isformens:true, id:1 },
  {category:"t-shirt", isformens:true, id:2 },
  {category:"blouse", isformens:false, id:3 },
  {category:"suit", isformens:false, id:4 },
  {category:"pajama", isformens:true, id:5 }
]
const MapFunction = () =>{

  

  const List = Shoppint_List.map(product=>
    <li key={product.id} style={{color: product.isformens?'green':'yello'}} >
      {product.category}
    </li>
    );

  return(
    <ul>{List}</ul>
  );
}

export default MapFunction;

// In this Component I have used map() function which help us to map the any value of any object or variable in java script 
