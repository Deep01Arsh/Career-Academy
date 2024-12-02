import { RiEditBoxLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { formattedDate } from "../../../utils/dateFormatter";
import IconBtn from "../../Common/IconBtn";

export default function MyProfile() {
  const { user } = useSelector((state) => state.profile);
  const navigate = useNavigate();

  return (
    <>
      <h1 className="mb-12 text-4xl font-bold text-gray-900">My Profile</h1>

      {/* Profile Card */}
      <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-6 shadow-md transition hover:shadow-lg">
        <div className="flex items-center gap-x-6">
          <img
            src={user?.image}
            alt={`profile-${user?.firstName}`}
            className="w-20 h-20 rounded-full object-cover border-2 border-indigo-500"
          />
          <div className="space-y-2">
            <p className="text-xl font-semibold text-gray-900">
              {user?.firstName + " " + user?.lastName}
            </p>
            <p className="text-sm text-gray-500">{user?.email}</p>
          </div>
        </div>
        <IconBtn
          text="Edit"
          onclick={() => {
            navigate("/dashboard/settings");
          }}
          className="text-indigo-500"
        >
          <RiEditBoxLine className="text-xl" />
        </IconBtn>
      </div>

      {/* About Section */}
      <div className="mt-8 flex flex-col gap-y-6 rounded-lg border border-gray-200 bg-white p-6 shadow-md transition hover:shadow-lg">
        <div className="flex items-center justify-between">
          <p className="text-xl font-semibold text-gray-900">About</p>
          <IconBtn
            text="Edit"
            onclick={() => {
              navigate("/dashboard/settings");
            }}
            className="text-indigo-500"
          >
            <RiEditBoxLine className="text-xl" />
          </IconBtn>
        </div>
        <p
          className={`${
            user?.additionalDetails?.about
              ? "text-gray-900"
              : "text-gray-500"
          } text-sm`}
        >
          {user?.additionalDetails?.about ?? "Write Something About Yourself"}
        </p>
      </div>

      {/* Personal Details Section */}
      <div className="mt-8 flex flex-col gap-y-6 rounded-lg border border-gray-200 bg-white p-6 shadow-md transition hover:shadow-lg">
        <div className="flex items-center justify-between">
          <p className="text-xl font-semibold text-gray-900">Personal Details</p>
          <IconBtn
            text="Edit"
            onclick={() => {
              navigate("/dashboard/settings");
            }}
            className="text-indigo-500"
          >
            <RiEditBoxLine className="text-xl" />
          </IconBtn>
        </div>
        <div className="grid grid-cols-2 gap-x-8 gap-y-6">
          <div>
            <p className="mb-1 text-sm text-gray-500">First Name</p>
            <p className="text-sm font-medium text-gray-900">
              {user?.firstName}
            </p>
          </div>
          <div>
            <p className="mb-1 text-sm text-gray-500">Last Name</p>
            <p className="text-sm font-medium text-gray-900">
              {user?.lastName}
            </p>
          </div>
          <div>
            <p className="mb-1 text-sm text-gray-500">Email</p>
            <p className="text-sm font-medium text-gray-900">{user?.email}</p>
          </div>
          <div>
            <p className="mb-1 text-sm text-gray-500">Phone Number</p>
            <p className="text-sm font-medium text-gray-900">
              {user?.additionalDetails?.contactNumber ?? "Add Contact Number"}
            </p>
          </div>
          <div>
            <p className="mb-1 text-sm text-gray-500">Gender</p>
            <p className="text-sm font-medium text-gray-900">
              {user?.additionalDetails?.gender ?? "Add Gender"}
            </p>
          </div>
          <div>
            <p className="mb-1 text-sm text-gray-500">Date Of Birth</p>
            <p className="text-sm font-medium text-gray-900">
              {formattedDate(user?.additionalDetails?.dateOfBirth) ??
                "Add Date Of Birth"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
