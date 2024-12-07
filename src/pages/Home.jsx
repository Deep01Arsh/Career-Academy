import { FaArrowRight } from "react-icons/fa"
import { Link } from "react-router-dom"

import Footer from "../components/Common/Footer"
import ReviewSlider from "../components/Common/ReviewSlider"
import CTAButton from "../components/core/HomePage/Button"
import CodeBlocks from "../components/core/HomePage/CodeBlocks"
import ExploreMore from "../components/core/HomePage/ExploreMore"
import HighlightText from "../components/core/HomePage/HighlightText"
import InstructorSection from "../components/core/HomePage/InstructorSection"
import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSection"
import TimelineSection from "../components/core/HomePage/Timeline"

function Home() {
  return (
    <div className="bg-white text-black">
      <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 py-16">
        <Link to={"/signup"}>
          <div className="group mx-auto mt-16 w-fit rounded-full bg-black p-1 font-semibold text-richblack-5 shadow-lg transition-all duration-300 hover:bg-gray-800 hover:scale-105">
            <div className="flex flex-row items-center gap-2 rounded-full px-8 py-3 transition-all duration-300 group-hover:bg-gray-700">
              <p>Join Our Instructor Team</p>
              <FaArrowRight />
            </div>
          </div>
        </Link>

        <div className="text-center text-4xl font-extrabold text-black leading-tight">
          Transform Your Future with
          <HighlightText text={"Coding Expertise"} />
        </div>

        <div className="mt-4 w-[90%] text-center text-lg font-medium text-richblack-600">
          With our online coding programs, you'll have the flexibility to learn at your own pace, wherever you are. Access hands-on projects, quizzes, and get personalized feedback from expert instructors.
        </div>

        <div className="mt-8 flex flex-row gap-7">
          <CTAButton active={true} linkto={"/signup"}>
            Start Learning Today
          </CTAButton>
          <CTAButton active={false} linkto={"/demoscheduel"}>
            See a Demo
          </CTAButton>
        </div>

        <div className="mt-16 w-full px-3  shadow-[0_0_20px_0] shadow-[#655e5e] rounded-lg object-cover transition-all duration-300 hover:scale-105 hover:shadow-lg">
          <CodeBlocks
            position={"lg:flex-row"}
            heading={
              <div className="text-3xl font-semibold ">
                Unlock Your
                <HighlightText text={"Coding Skills"} /> with Our Interactive Courses
              </div>
            }
            subheading={
              "Our courses are carefully designed and taught by industry professionals with years of experience. Learn coding skills that will shape your future."
            }
            ctabtn1={{
              btnText: "Start Now",
              link: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Explore Courses",
              link: "/signup",
              active: false,
            }}
            codeColor={"text-richblack-700"}
            codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>My Webpage</title>\n</head>\n<body>\n<h1><a href="/">Welcome</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
            backgroundGradient={<div className="codeblock1 absolute"></div>}
          />
        </div>

        <div className="mt-16 w-full px-3 shadow-[0_0_20px_0] shadow-[#655e5e] rounded-lg object-cover transition-all duration-300 hover:scale-105 hover:shadow-lg">
          <CodeBlocks
            position={"lg:flex-row-reverse"}
            heading={
              <div className="w-full text-3xl font-semibold lg:w-[50%]">
                Get Started with
                <HighlightText text={"Coding in Minutes"} />
              </div>
            }
            subheading={
              "Take your first steps in coding right now. With our interactive environment, you'll be writing real code from your very first lesson."
            }
            ctabtn1={{
              btnText: "Start Learning",
              link: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              link: "/signup",
              active: false,
            }}
            codeColor={"text-black"}
            codeblock={`import React from "react";\n import CTAButton from "./Button";\nimport TypeAnimation from "react-type";\nimport { FaArrowRight } from "react-icons/fa";\n\nconst Home = () => {\nreturn (\n<div>Welcome to the coding world</div>\n)\n}\nexport default Home;`}
            backgroundGradient={<div className="codeblock2 absolute"></div>}
          />
        </div>

        <ExploreMore />
      </div>

      <div className="bg-gray-50 py-16 mt-[150px] text-black">
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8">
          <div className="flex flex-row gap-7 text-black">
            <CTAButton active={true} linkto={"/catalog/web-development"}>
              <div className="flex items-center gap-2">
                Discover Our Full Catalog
                <FaArrowRight />
              </div>
            </CTAButton>
           
          </div>

          <div className="flex flex-col lg:flex-row justify-between gap-8 mt-10">
            <div className="text-3xl font-semibold lg:w-[45%]">
              Gain the Skills for a
              <HighlightText text={"High-Demand Career."} />
            </div>
            <div className="flex flex-col items-start gap-6 lg:w-[45%]">
              <div className="text-lg text-gray-700">
                In today’s competitive job market, mastering coding is more than just a skill—it’s a gateway to exciting opportunities.
              </div>
              <CTAButton active={true} linkto={"/signup"}>
                Start Now
              </CTAButton>
            </div>
          </div>

          <TimelineSection />

          <LearningLanguageSection />
        </div>
      </div>

      <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-white text-black py-16">

        <InstructorSection />

      </div>

      <Footer />
    </div>
  )
}

export default Home
