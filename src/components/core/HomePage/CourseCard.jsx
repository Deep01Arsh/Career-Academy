import React from "react";

// Importing React Icons
import { HiUsers } from "react-icons/hi";
import { ImTree } from "react-icons/im";

const CourseCard = ({ cardData }) => {
  return (
    <div
    className={`w-[360px] lg:w-[30%] h-[300px] box-border cursor-pointer rounded-lg transition-all duration-300
      bg-blue-400 text-white shadow-lg transform hover:bg-richblack-5 hover:text-black hover:shadow-2xl hover:scale-105 hover:-translate-y-2 `}

    >
      {/* Card Content */}
      <div
        className={`border-b-[2px] border-dashed h-[80%] p-6 flex flex-col gap-3 rounded-t-lg border-richblack-400`}
      >
        {/* Card Heading */}
        <div className={`font-semibold text-[20px]`}>{cardData?.heading}</div>
        {/* Card Description */}
        <div className="text-[14px]">{cardData?.description}</div>
      </div>

      {/* Card Footer */}
      <div
        className={`flex justify-between px-6 py-3 font-medium rounded-b-lg border-t-[2px] border-richblack-400`}
      >
        {/* Level */}
        <div className="flex items-center gap-2 text-[16px]">
          <HiUsers />
          <p>{cardData?.level}</p>
        </div>

        {/* Flow Chart */}
        <div className="flex items-center gap-2 text-[16px]">
          <ImTree />
          <p>{cardData?.lessionNumber} Lessons</p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
