import { useEffect, useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getUserEnrolledCourses } from "../../../services/operations/profileAPI";

export default function EnrolledCourses() {
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const [enrolledCourses, setEnrolledCourses] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await getUserEnrolledCourses(token);
        const publishedCourses = res.filter((course) => course.status !== "Draft");
        setEnrolledCourses(publishedCourses);
      } catch (error) {
        console.error("Could not fetch enrolled courses.", error);
      }
    })();
  }, [token]);

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text ">
        Enrolled Courses
      </h1>
      {!enrolledCourses ? (
        <div className="flex h-[50vh] items-center justify-center">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-purple-500 border-t-transparent"></div>
        </div>
      ) : !enrolledCourses.length ? (
        <div className="flex h-[50vh] flex-col items-center justify-center text-center">
          <p className="text-lg font-medium text-gray-400">
            You haven’t enrolled in any course yet.
          </p>
          <button
            onClick={() => navigate("/courses")}
            className="mt-6 rounded-md bg-purple-500 px-6 py-3 text-white shadow-lg transition duration-300 hover:bg-purple-600 hover:shadow-2xl"
          >
            Explore Courses
          </button>
        </div>
      ) : (
        <div className="mt-8 rounded-lg bg-gray-100 shadow-md">
          {/* Table Header */}
          <div className="flex items-center rounded-t-lg bg-indigo-500 text-white">
            <p className="w-[45%] px-5 py-3 text-lg font-semibold">Course Name</p>
            <p className="w-1/4 px-2 py-3 text-lg font-semibold">Duration</p>
            <p className="flex-1 px-2 py-3 text-lg font-semibold">Progress</p>
          </div>
          {/* Course List */}
          {enrolledCourses.map((course, index) => (
            <div
              className={`flex items-center border-b border-gray-300 last:border-none ${
                index % 2 === 0 ? "bg-gray-50" : "bg-white"
              } hover:bg-gray-100 transition`}
              key={course._id}
            >
              {/* Course Details */}
              <div
                className="flex w-[45%] cursor-pointer items-center gap-4 px-5 py-3"
                onClick={() =>
                  navigate(
                    `/view-course/${course._id}/section/${course.courseContent?.[0]?._id}/sub-section/${course.courseContent?.[0]?.subSection?.[0]?._id}`
                  )
                }
              >
                <img
                  src={course.thumbnail}
                  alt={course.courseName}
                  className="h-14 w-14 rounded-lg object-cover shadow"
                />
                <div className="flex flex-col">
                  <p className="font-semibold text-gray-800">{course.courseName}</p>
                  <p className="text-sm text-gray-500">
                    {course.courseDescription.length > 50
                      ? `${course.courseDescription.slice(0, 50)}...`
                      : course.courseDescription}
                  </p>
                </div>
              </div>
              {/* Course Duration */}
              <div className="w-1/4 px-2 py-3 text-center text-gray-600">
                {course.totalDuration || "N/A"}
              </div>
              {/* Course Progress */}
              <div className="flex w-1/4 flex-col gap-2 px-2 py-3">
                <p className="text-sm text-gray-600">
                  Progress: <span className="font-medium">{course.progressPercentage || 0}%</span>
                </p>
                <ProgressBar
                  completed={course.progressPercentage || 0}
                  height="8px"
                  baseBgColor="#e5e7eb"
                  bgColor="#4f46e5"
                  isLabelVisible={false}
                />
              </div>
              {/* Options Icon */}
              <div className="px-4 text-gray-400 hover:text-gray-600">
                <BiDotsVerticalRounded size={24} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
