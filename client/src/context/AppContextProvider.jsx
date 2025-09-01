import { useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";
import { AppContext } from "./AppContext";
import { useNavigate } from "react-router-dom";

export const AppContextProvider = (props) => {
  const rupees = import.meta.env.VITE_RUPEES;
  const navigate = useNavigate();
  const [allCourses, setAllCourses] = useState([]);
  const [isEducator, setIsEducator] = useState(true);

  // Fetch All Courses
  const fetchAllCourses = async () => {
    setAllCourses(dummyCourses);
  };

  // Function to calculate average rating of course
  const calculateRating = (course) => {
    if (course.courseRatings.length === 0) {
      return 0;
    }
    let totalRating = 0;
    course.courseRatings.forEach((rating) => {
      totalRating += rating.rating;
    });
    return totalRating / course.courseRatings.length;
  };

  useEffect(() => {
    fetchAllCourses();
  }, []);

  const value = {
    rupees,
    allCourses,
    navigate,
    calculateRating,
    isEducator,
    setIsEducator,
  };
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
