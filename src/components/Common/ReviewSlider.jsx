import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { FaStar } from "react-icons/fa";
import { apiConnector } from "../../services/apiConnector";
import { ratingsEndpoints } from "../../services/apis";

function ReviewSlider() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const { data } = await apiConnector("GET", ratingsEndpoints.REVIEWS_DETAILS_API);
        if (data?.success) {
          setReviews(data?.data || []);
        }
      } catch (err) {
        console.error("Failed to fetch reviews:", err);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div className="bg-gray-50 py-7 rounded-3xl">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">Student Reviews</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.length > 0 ? (
            reviews.map((review, i) => (
              <div
                key={i}
                className="flex flex-col gap-4 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                {/* User Info */}
                <div className="flex items-center gap-4">
                  <img
                    src={
                      review?.user?.image
                        ? review?.user?.image
                        : `https://api.dicebear.com/5.x/initials/svg?seed=${review?.user?.firstName} ${review?.user?.lastName}`
                    }
                    alt={`${review?.user?.firstName} ${review?.user?.lastName}`}
                    className="h-12 w-12 rounded-full object-cover border border-gray-300"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">{`${review?.user?.firstName} ${review?.user?.lastName}`}</h3>
                    <p className="text-sm text-gray-500">{review?.course?.courseName}</p>
                  </div>
                </div>

                {/* Review Text with Black Text on White Background */}
                <p className="text-sm text-black bg-white p-4 rounded-md shadow-sm">
                  {review?.review.length > 100 ? `${review?.review.slice(0, 100)}...` : review?.review}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-richblue-900">{review.rating.toFixed(1)}</span>
                  <ReactStars
                    count={5}
                    value={review.rating}
                    size={20}
                    edit={false}
                    activeColor="#ffd700"
                    emptyIcon={<FaStar />}
                    fullIcon={<FaStar />}
                  />
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">No reviews available at the moment.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ReviewSlider;
