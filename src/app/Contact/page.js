export default function Contact() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-10">
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8">
        
        <h1 className="text-4xl font-bold text-blue-900 mb-4">
          Contact Us
        </h1>

        <p className="text-gray-600 mb-8">
          Have questions, suggestions, or feedback? Feel free to contact us.
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">
              Contact Information
            </h2>

            <div className="space-y-3 text-gray-700">
              <p>📍 Gorakhpur, Uttar Pradesh, India</p>
              <p>📧 ng968633@gmail.com</p>
              <p>📞 +91 91XXXX2291</p>
              <p>🕒 Mon - Sat : 9:00 AM - 6:00 PM</p>
            </div>
          </div>

          {/* Contact Form */}
         

        </div>

        <div className="mt-8 pt-4 border-t text-xs text-gray-500 text-center">
          This contact page is provided for educational and demonstration
          purposes only as part of a college project.  created by Naveen kr Gupta
        </div>

      </div>
    </main>
  );
}