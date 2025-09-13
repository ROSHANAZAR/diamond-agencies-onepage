import { MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 scroll-mt-16 md:scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Contact Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            &ldquo;Let&rsquo;s make your home beautiful! Reach out by phone,
            visit our showroom, or use the map to see us in person.&rdquo;
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-10 items-stretch">
          {/* Contact Info Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col justify-center">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Get in Touch
            </h3>

            {/* Address */}
            <div className="flex items-start gap-4 mb-6">
              <MapPinIcon className="w-6 h-6 text-blue-600 shrink-0" />
              <a
                href="https://maps.app.goo.gl/qnX2thzRcgg243TD7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600 text-lg leading-relaxed"
              >
                No:73, Palace Estate City, Kolathoor, Singaperumal Koil,
                Thalimangalam, Tamil Nadu 603204
              </a>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4">
              <PhoneIcon className="w-6 h-6 text-blue-600 shrink-0" />
              <a
                href="tel:+919080561007"
                className="text-gray-700 hover:text-blue-600 text-lg"
              >
                +91 90805 61007
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3891.1301956416874!2d79.9795334!3d12.7700558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52fb3102f29e21%3A0xeceae83cbb2b07b9!2sDIAMOND%20AGENCIES!5e0!3m2!1sen!2sin!4v1757745723830!5m2!1sen!2sin"
              width="100%"
              height="100%"
              loading="lazy"
              className="w-full h-[350px] md:h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
