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
    <div className="bg-gradient-to-r from-blue-600 to-blue-50 py-2 rounded-3xl shadow-lg">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-2">
          What Our Students Say
        </h2>
        <p className="text-center text-white mb-10">
          See why thousands of learners trust us for their growth!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.length > 0 ? (
            reviews.map((review, i) => (
              <div
                key={i}
                className="flex flex-col gap-4 bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
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
                    className="h-14 w-14 rounded-full object-cover border border-gray-300 shadow-sm"
                  />
                  <div>
                    <h3 className="font-semibold text-blue-900 text-lg">{`${review?.user?.firstName} ${review?.user?.lastName}`}</h3>
                    <p className="text-sm text-blue-700">{review?.course?.courseName}</p>
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-sm text-gray-800 bg-gray-100 p-4 rounded-md shadow-sm italic">
                  {review?.review.length > 100 ? `${review?.review.slice(0, 100)}...` : review?.review}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-3">
                  <span className="text-lg font-bold text-yellow-500">{review.rating.toFixed(1)}</span>
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
