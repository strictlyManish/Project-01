import React, { createContext, useEffect, useState } from "react";
export const MyContext = createContext();
const Wrapper = ({ children }) => {
  const [data, setdata] = useState([]);

  useEffect(()=>{
    setdata(JSON.parse(localStorage.getItem('data')) || [])
  },[])

  return (
    <MyContext.Provider value={[data, setdata]}>{children}</MyContext.Provider>
  );
};

export default Wrapper;
