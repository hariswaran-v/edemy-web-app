import { useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";
import { AppContext } from "./AppContext";

export const AppContextProvider = (props) => {
  const rupees = import.meta.env.VITE_RUPEES;
  const [allCourses, setAllCourses] = useState([]);

  // Fetch All Courses
  const fetchAllCourses = async () => {
    setAllCourses(dummyCourses);
  };

  useEffect(() => {
    fetchAllCourses();
  }, []);

  const value = { rupees, allCourses };
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
