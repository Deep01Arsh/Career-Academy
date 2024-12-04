import React from "react";

// Google Map Embed URL
const googleMapSrc =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093743!2d144.9537363153166!3d-37.81627917975153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577c0701a8c48b5!2sFederation%20Square!5e0!3m2!1sen!2sus!4v1600414699395!5m2!1sen!2sus";

function LocationMap() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-200 py-10">
      <div className="container mx-auto px-4 text-center">
        {/* Title */}
        <h2 className="mb-6 text-3xl font-bold text-gray-800">Visit Us at Our Location</h2>

        {/* Description */}
        <p className="mb-8 text-gray-600">
          We are located at the heart of the city, offering a vibrant and welcoming atmosphere. Come visit us for more
          details and experience our services in person!
        </p>

        {/* Map Section */}
        <div className="relative mx-auto max-w-4xl">
          {/* Map Frame with Border */}
          <div className="relative">
            <div className="absolute inset-0 border-4 border-yellow-500 rounded-lg"></div>
            <iframe
              title="Location Map"
              src={googleMapSrc}
              width="100%"
              height="400"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              className="rounded-lg shadow-lg relative"
            ></iframe>
          </div>
        </div>

        {/* Get Directions Button */}
        <div className="mt-6">
          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 text-lg font-semibold text-white bg-blue-500 rounded-lg focus:outline-none "
          >
            Get Directions
          </a>
        </div>
      </div>
    </div>
  );
}

export default LocationMap;
