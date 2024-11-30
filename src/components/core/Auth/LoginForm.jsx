import { useState } from "react"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"

import { login } from "../../../services/operations/authAPI"

function LoginForm() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const [showPassword, setShowPassword] = useState(false)

  const { email, password } = formData

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    dispatch(login(email, password, navigate))
  }

  return (
    <form
      onSubmit={handleOnSubmit}
      className="mt-6 flex w-full flex-col gap-y-6 bg-white p-6 rounded-lg shadow-lg"
    >
      {/* Email Field */}
      <label className="w-full">
        <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-black">
          Email Address <sup className="text-pink-200">*</sup>
        </p>
        <input
          required
          type="text"
          name="email"
          value={email}
          onChange={handleOnChange}
          placeholder="Enter email address"
          className="w-full py-3 px-4 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-black"
        />
      </label>

      {/* Password Field */}
      <label className="relative w-full">
        <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-black">
          Password <sup className="text-pink-200">*</sup>
        </p>
        <input
          required
          type={showPassword ? "text" : "password"}
          name="password"
          value={password}
          onChange={handleOnChange}
          placeholder="Enter Password"
          className="w-full py-3 px-4 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-black !pr-10"
        />
        <span
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-3 top-[38px] z-[10] cursor-pointer"
        >
          {showPassword ? (
            <AiOutlineEyeInvisible fontSize={24} fill="#000" />
          ) : (
            <AiOutlineEye fontSize={24} fill="#000" />
          )}
        </span>
        <Link to="/forgot-password">
          <p className="mt-1 ml-auto max-w-max text-xs text-blue-100 hover:text-blue-300">
            Forgot Password?
          </p>
        </Link>
      </label>

      {/* Submit Button */}
      <button
        type="submit"
        className="mt-6 py-3 px-6 text-white bg-black border-2 border-black rounded-md font-semibold hover:bg-white hover:text-black hover:border-black transition"
      >
        Sign In
      </button>
    </form>
  )
}

export default LoginForm
