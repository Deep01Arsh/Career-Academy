import { useDispatch, useSelector } from "react-redux"
import { Table, Tbody, Td, Th, Thead, Tr } from "react-super-responsive-table"
import { setCourse, setEditCourse } from "../../../../slices/courseSlice"
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"
import { useState } from "react"
import { FaCheck } from "react-icons/fa"
import { FiEdit2 } from "react-icons/fi"
import { HiClock } from "react-icons/hi"
import { RiDeleteBin6Line } from "react-icons/ri"
import { useNavigate } from "react-router-dom"
import { formatDate } from "../../../../services/formatDate"
import {
  deleteCourse,
  fetchInstructorCourses,
} from "../../../../services/operations/courseDetailsAPI"
import { COURSE_STATUS } from "../../../../utils/constants"
import ConfirmationModal from "../../../Common/ConfirmationModal"

export default function CoursesTable({ courses, setCourses }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { token } = useSelector((state) => state.auth)
  const [loading, setLoading] = useState(false)
  const [confirmationModal, setConfirmationModal] = useState(null)
  const TRUNCATE_LENGTH = 30

  const handleCourseDelete = async (courseId) => {
    setLoading(true)
    await deleteCourse({ courseId: courseId }, token)
    const result = await fetchInstructorCourses(token)
    if (result) {
      setCourses(result)
    }
    setConfirmationModal(null)
    setLoading(false)
  }

  return (
    <>
      <Table className="rounded-xl border border-richblack-800 overflow-hidden shadow-lg ">
        <Thead>
          <Tr className="bg-gradient-to-r from-[#7774db] to-[#434351] text-white">
            <Th className="text-left text-sm font-semibold uppercase text-black px-6 py-4">
              Courses
            </Th>
            <Th className="text-left text-sm font-semibold uppercase text-richblack-100 px-6 py-4">
              Duration
            </Th>
            <Th className="text-left text-sm font-semibold uppercase text-richblack-100 px-6 py-4">
              Price
            </Th>
            <Th className="text-left text-sm font-semibold uppercase text-richblack-100 px-6 py-4">
              Actions
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {courses?.length === 0 ? (
            <Tr>
              <Td colSpan={4} className="py-10 text-center text-2xl font-medium text-black">
                No courses found
              </Td>
            </Tr>
          ) : (
            courses?.map((course) => (
              <Tr
                key={course._id}
                className="group cursor-pointer transition-all duration-200 transform hover:bg-richblack-700 hover:scale-105 rounded-md "
              >
                <Td className="flex gap-x-6 px-6 py-6">
                  <img
                    src={course?.thumbnail}
                    alt={course?.courseName}
                    className="h-[148px] w-[220px] rounded-lg object-cover transition-all duration-200 group-hover:opacity-80"
                  />
                  <div className="flex flex-col justify-between">
                    <p className="text-xl font-bold text-black group-hover:text-yellow-100">
                      {course.courseName}
                    </p>
                    <p className="text-sm text-richblack-400 group-hover:text-yellow-200">
                      {course.courseDescription.split(" ").length > TRUNCATE_LENGTH
                        ? course.courseDescription
                            .split(" ")
                            .slice(0, TRUNCATE_LENGTH)
                            .join(" ") + "..."
                        : course.courseDescription}
                    </p>
                    <p className="text-xs text-black group-hover:text-caribbeangreen-200 ">
                      Created: {formatDate(course.createdAt)}
                    </p>
                    {course.status === COURSE_STATUS.DRAFT ? (
                      <p className="flex items-center gap-2 rounded-full bg-pink-600 px-4 py-1 text-black text-xs font-semibold">
                        <HiClock size={14} />
                        Drafted
                      </p>
                    ) : (
                      <p className="flex items-center gap-2 rounded-full bg-green-500 px-4 py-1 text-black group-hover:text-caribbeangreen-200 text-xs font-semibold">
                        <FaCheck size={14} />
                        Published
                      </p>
                    )}
                  </div>
                </Td>
                <Td className="text-sm font-medium text-richblack-100 px-6 py-6">2hr 30min</Td>
                <Td className="text-sm font-medium text-richblack-100 px-6 py-6">₹{course.price}</Td>
                <Td className="text-sm font-medium text-richblack-100 px-6 py-6 space-x-4">
                  <button
                    disabled={loading}
                    onClick={() => navigate(`/dashboard/edit-course/${course._id}`)}
                    title="Edit"
                    className="transition-all duration-200 hover:scale-110 hover:text-brown-5 text-xl"
                  >
                    <FiEdit2 />
                  </button>
                  <button
                    disabled={loading}
                    onClick={() => {
                      setConfirmationModal({
                        text1: "Do you want to delete this course?",
                        text2: "All the data related to this course will be deleted.",
                        btn1Text: !loading ? "Delete" : "Loading...",
                        btn2Text: "Cancel",
                        btn1Handler: !loading ? () => handleCourseDelete(course._id) : () => {},
                        btn2Handler: !loading ? () => setConfirmationModal(null) : () => {},
                      })
                    }}
                    title="Delete"
                    className="transition-all duration-200 hover:scale-110 hover:text-pink-500 text-xl"
                  >
                    <RiDeleteBin6Line />
                  </button>
                </Td>
              </Tr>
            ))
          )}
        </Tbody>
      </Table>
      {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
    </>
  )
}
