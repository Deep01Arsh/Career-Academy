import React, { useState } from "react";
import { HomePageExplore } from "../../../data/homepage-explore";
import CourseCard from "./CourseCard";
import HighlightText from "./HighlightText";

const tabsName = [
  "Free",
  "New to coding",
  "Most popular",
  "Skills paths",
  "Career paths",
];

const ExploreMore = () => {
  const [currentTab, setCurrentTab] = useState(tabsName[0]);
  const [courses, setCourses] = useState(HomePageExplore[0].courses);
  const [currentCard, setCurrentCard] = useState(
    HomePageExplore[0].courses[0].heading
  );
  const [switching, setSwitching] = useState(false); // For smooth transitions

  const setMyCards = (value) => {
    setSwitching(true); // Trigger fade-out
    setTimeout(() => {
      setCurrentTab(value);
      const result = HomePageExplore.filter((course) => course.tag === value);
      setCourses(result[0].courses);
      setCurrentCard(result[0].courses[0].heading);
      setSwitching(false); // Trigger fade-in
    }, 300); // Matches the fade-out duration
  };

  return (
    <div>
      {/* Header Section */}
      <div className="text-center my-10">
        <h2 className="text-4xl font-bold">
          Unlock the <HighlightText text={"Power of Code"} />
        </h2>
        <p className="text-richblack-300 text-lg font-semibold mt-2">
          Learn to Build Anything You Can Imagine
        </p>
      </div>

      {/* Tabs Section */}
      <div className="hidden lg:flex gap-5 mx-auto w-max bg-richblack-200 text-richblack-200 p-1 rounded-full font-medium drop-shadow-[0_1.5px_rgba(255,255,255,0.25)]">
        {tabsName.map((ele, index) => (
          <div
            key={index}
            className={`text-[16px] flex items-center gap-2 cursor-pointer px-7 py-[7px] rounded-full transition-all duration-300
              ${
                currentTab === ele
                  ? "bg-richblack-600 text-richblack-5 font-medium shadow-md"
                  : "text-richblack-800 hover:bg-richblack-900 hover:text-richblack-5"
              }`}
            onClick={() => setMyCards(ele)}
          >
            {ele}
          </div>
        ))}
      </div>

      <div className="hidden lg:block lg:h-[200px]"></div>

      {/* Courses Section */}
      <div
        className={`lg:absolute gap-10 justify-center lg:gap-0 flex lg:justify-between flex-wrap w-full lg:bottom-[0] lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[50%] text-black lg:mb-0 mb-7 lg:px-0 px-3
          ${switching ? "opacity-0 transition-opacity duration-300" : "opacity-100 transition-opacity duration-300"}
        `}
      >
        {courses.map((ele, index) => (
          <CourseCard
            key={index}
            cardData={ele}
            currentCard={currentCard}
            setCurrentCard={setCurrentCard}
          />
        ))}
      </div>
    </div>
  );
};

export default ExploreMore;
