import { RiEditBoxLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { formattedDate } from "../../../utils/dateFormatter";
import IconBtn from "../../Common/IconBtn";

export default function MyProfile() {
  const { user } = useSelector((state) => state.profile);
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text ">
        My Profile
      </h1>

      {/* Profile Card */}
      <div className="mt-8 flex items-center justify-between rounded-lg border border-gray-200 bg-white p-6 shadow-lg hover:shadow-xl transition">
        <div className="flex items-center gap-x-6">
          <img
            src={user?.image || "https://via.placeholder.com/80"}
            alt={`profile-${user?.firstName}`}
            className="w-20 h-20 rounded-full object-cover border-2 border-purple-500 shadow-md"
          />
          <div className="space-y-2">
            <p className="text-2xl font-semibold text-gray-800">
              {user?.firstName + " " + user?.lastName}
            </p>
            <p className="text-sm text-gray-500">{user?.email}</p>
          </div>
        </div>
        <IconBtn
          text="Edit Profile"
          onclick={() => navigate("/dashboard/settings")}
          className="text-white bg-purple-500 hover:bg-purple-600"
        >
          <RiEditBoxLine className="text-lg" />
        </IconBtn>
      </div>

      {/* About Section */}
      <div className="mt-8 rounded-lg border border-gray-200 bg-white p-6 shadow-lg hover:shadow-xl transition">
        <div className="flex items-center justify-between">
          <p className="text-xl font-semibold text-gray-800">About</p>
          <IconBtn
            text="Edit"
            onclick={() => navigate("/dashboard/settings")}
            className="text-white bg-indigo-500 hover:bg-indigo-600"
          >
            <RiEditBoxLine className="text-lg" />
          </IconBtn>
        </div>
        <p
          className={`mt-4 ${
            user?.additionalDetails?.about
              ? "text-gray-700"
              : "text-gray-500 italic"
          } text-sm`}
        >
          {user?.additionalDetails?.about || "Write something about yourself."}
        </p>
      </div>

      {/* Personal Details Section */}
      <div className="mt-8 rounded-lg border border-gray-200 bg-white p-6 shadow-lg hover:shadow-xl transition">
        <div className="flex items-center justify-between">
          <p className="text-xl font-semibold text-gray-800">Personal Details</p>
          <IconBtn
            text="Edit"
            onclick={() => navigate("/dashboard/settings")}
            className="text-white bg-indigo-500 hover:bg-indigo-600"
          >
            <RiEditBoxLine className="text-lg" />
          </IconBtn>
        </div>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
          <DetailField label="First Name" value={user?.firstName} />
          <DetailField label="Last Name" value={user?.lastName} />
          <DetailField label="Email" value={user?.email} />
          <DetailField
            label="Phone Number"
            value={
              user?.additionalDetails?.contactNumber || "Add Contact Number"
            }
          />
          <DetailField
            label="Gender"
            value={user?.additionalDetails?.gender || "Add Gender"}
          />
          <DetailField
            label="Date Of Birth"
            value={
              formattedDate(user?.additionalDetails?.dateOfBirth) ||
              "Add Date Of Birth"
            }
          />
        </div>
      </div>
    </div>
  );
}

function DetailField({ label, value }) {
  return (
    <div>
      <p className="text-sm font-medium text-gray-500">{label}</p>
      <p
        className={`mt-1 text-sm ${
          value === "Add Contact Number" ||
          value === "Add Gender" ||
          value === "Add Date Of Birth"
            ? "text-gray-400 italic"
            : "text-gray-800"
        }`}
      >
        {value}
      </p>
    </div>
  );
}
