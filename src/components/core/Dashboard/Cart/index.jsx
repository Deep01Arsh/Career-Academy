import { useSelector } from "react-redux";
import RenderCartCourses from "./RenderCartCourses";
import RenderTotalAmount from "./RenderTotalAmount";

export default function Cart() {
  const { total, totalItems } = useSelector((state) => state.cart);
  const { paymentLoading } = useSelector((state) => state.course);

  if (paymentLoading)
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-400 border-t-transparent"></div>
      </div>
    );

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      {/* Title with gradient */}
      <h1 className="mb-14 text-4xl font-extrabold bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
        Your Cart
      </h1>

      {/* Cart Summary */}
      <p className="border-b border-gray-300 pb-2 text-lg font-medium text-gray-500">
        {totalItems} {totalItems === 1 ? "Course" : "Courses"} in Cart
      </p>

      {total > 0 ? (
        <div className="mt-8 flex flex-col-reverse gap-10 lg:flex-row">
          <RenderCartCourses />
          <RenderTotalAmount />
        </div>
      ) : (
        <div className="mt-14 text-center">
          {/* Empty Cart Illustration */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto h-48 w-48 text-gray-300"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a1 1 0 001 .61H19a1 1 0 00.92-.62L23 6H6" />
          </svg>
          {/* Empty Cart Message */}
          <p className="mt-6 text-2xl font-medium text-gray-600">
            Your cart is empty
          </p>
          {/* Browse Courses Button */}
          <button
            onClick={() => (window.location.href = "/catalog/web-development")}
            className="mt-6 rounded-lg bg-blue-500 px-6 py-3 text-white shadow-lg transition duration-300 hover:bg-blue-600 hover:shadow-2xl"
          >
            Browse Courses
          </button>
        </div>
      )}
    </div>
  );
}
