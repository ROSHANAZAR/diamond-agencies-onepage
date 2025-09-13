export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 sm:px-10 md:px-20 pt-28 md:pt-32 bg-gray-50">
      {/* Left: Text */}
      <div className="flex-1 flex flex-col justify-center text-center md:text-left space-y-5">
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-4xl font-extrabold text-gray-900 leading-snug">
          Upgrade Your Home with Premium Tiles & Flooring
        </h1>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed pt-3 pb-5">
          Explore top-quality tiles, granite, and sanitary ware at Diamond Agencies. Stylish, durable, and affordable solutions for every home.
        </p>

        <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-3 sm:space-y-0 sm:space-x-4">
          <a
            href="https://maps.app.goo.gl/qnX2thzRcgg243TD7"
            target="_blank"
            className="bg-blue-600 text-white px-5 py-3 rounded-lg shadow hover:bg-blue-700 transition font-semibold"
          >
            Visit Us
          </a>
          <a
            href="tel:+919080561007"
            className="border border-blue-600 text-blue-600 px-5 py-3 rounded-lg hover:bg-blue-50 transition font-semibold"
          >
            Call Now
          </a>
        </div>
      </div>

      {/* Right: Image */}
      <div className="flex-1 mb-8 md:mb-0 flex justify-center md:justify-end">
        <img
          src="/showroom.jpg"
          alt="Tile showroom"
          className="w-full max-w-full md:max-w-lg lg:max-w-xl h-auto rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
}
