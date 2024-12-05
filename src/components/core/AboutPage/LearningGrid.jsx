import React from "react";
import HighlightText from "../../../components/core/HomePage/HighlightText";
import CTAButton from "../../../components/core/HomePage/Button";

const LearningGridArray = [
  {
    order: -1,
    heading: "Empower Your Learning with",
    highliteText: "CareerAcademy",
    description:
      "Join a global community of learners. With partnerships from 275+ universities and companies, CareerAcademy ensures a seamless learning experience tailored for success.",
    BtnText: "Explore Courses",
    BtnLink: "/courses",
  },
  {
    order: 1,
    heading: "Cutting-Edge Curriculum",
    description:
      "Dive into industry-relevant courses designed to make you future-ready. Stay ahead with content curated by top educators and industry leaders.",
  },
  {
    order: 2,
    heading: "Innovative Learning Techniques",
    description:
      "Experience interactive lessons, practical projects, and immersive tools that bring real-world scenarios into your learning journey.",
  },
  {
    order: 3,
    heading: "Industry-Recognized Certification",
    description:
      "Earn certifications that showcase your expertise. Stand out in your career with globally acknowledged credentials.",
  },
  {
    order: 4,
    heading: "Performance Feedback & Insights",
    description:
      "Receive instant, personalized feedback on your progress. Learn smarter with auto-grading and detailed analytics.",
  },
  {
    order: 5,
    heading: "Career-Ready Skills",
    description:
      "Equip yourself with the skills and confidence to succeed in the workplace. From technical knowledge to soft skills, we’ve got you covered.",
  },
];

const LearningGrid = () => {
  return (
    <div className="grid mx-auto w-[350px] xl:w-fit grid-cols-1 xl:grid-cols-4 mb-12 gap-4">
      {LearningGridArray.map((card, i) => {
        return (
          <div
            key={i}
            className={`${i === 0 && "xl:col-span-2 xl:h-[320px]"} ${
              card.order % 2=== 1
                ? "bg-gradient-to-br from-richblue-100 to-pure-greys-50 h-[320px]"
                : card.order % 1 === 0
                ? "bg-gradient-to-br from-blue-50 to-blue-500 h-[320px]"
                : "bg-transparent"
            } ${
              card.order === 3 && "xl:col-start-2"
            } rounded-lg shadow-lg transition-transform hover:scale-105`}
          >
            {card.order < 0 ? (
              <div className="xl:w-[90%] flex flex-col gap-3 p-6 text-black">
                <div className="text-4xl font-semibold">
                  {card.heading}{" "}
                  <HighlightText text={card.highliteText} />
                </div>
                <p className="text-gray-200 font-medium">
                  {card.description}
                </p>

                <div className="w-fit mt-4">
                  <CTAButton active={true} linkto={card.BtnLink}>
                    {card.BtnText}
                  </CTAButton>
                </div>
              </div>
            ) : (
              <div className="p-8 flex flex-col gap-6 text-black">
                <h1 className="text-xl font-bold">{card.heading}</h1>
                <p className="text-gray-200 font-medium">{card.description}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default LearningGrid;
