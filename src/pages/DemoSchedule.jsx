import React from "react";
import ReactPlayer from "react-player";
import CTAButton from "../components/core/HomePage/Button";

const DemoSchedule = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-600 from  from-blue-300 to-pure-greys-700 ">
      {/* Header */}
      <header className="w-full p-5 bg-opacity-90 backdrop-blur-md">
        <h1 className="text-center text-4xl  font-extrabold tracking-wider drop-shadow-md text-white">
          🚀 Unlock Your Learning Potential
        </h1>
        <p className="text-center text-lg mt-2 opacity-90 font-bold">
          Step into the future of education with immersive learning.
        </p>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center px-6 text-center">
        {/* Welcome Section */}
        <h2 className="text-5xl font-bold mb-6 drop-shadow-lg text-white">
          Welcome to Your Demo Class
        </h2>
        <p className="text-xl max-w-3xl mb-8 font-bold text-black">
          Experience a 1-minute live session and discover how our platform can 
          revolutionize your learning journey. Engage, explore, and excel!
        </p>

        {/* Live Video Section */}
        <div className="w-full max-w-4xl mb-10 rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition duration-300">
          <ReactPlayer
            url="https://youtu.be/CWJOaCkuxxg?si=J2fb7u5s37Odb_0y"
            controls
            playing
            width="100%"
            height="450px"
          />
        </div>

        {/* Call to Action Button */}
        <CTAButton
          linkto={"/catalog/web-development"}
          className="bg-gradient-to-r from-pink-500 to-yellow-500 text-lg font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
        >
          Start Full Classes
        </CTAButton>
      </main>

      {/* Footer */}
      <footer className="w-full p-6 bg-opacity-90 backdrop-blur-md text-sm">
        <p className="text-center font-bold text-white">
          © 2024 Career Academy. All rights reserved. | Empowering learners worldwide 🌍
        </p>
      </footer>
    </div>
  );
};

export default DemoSchedule;
