import Image from "next/image";

export default function Home() {

  
  const services = [
    {
      img: "/112.jfif",
      title: "112",
      desc: "Dial 112 for any emergency requiring police assistance.",
      link: "https://112.up.gov.in/About112UPApp",
    },
    {
      img: "/1090.jfif",
      title: "1090",
      desc: "1090 for women safety and harassment-related complaints.",
      link:"https://www.digitalindia.gov.in/initiative/ncw-womens-helpline/",
    },
    {
      img: "/101.jfif",
      title: "101",
      desc: "101 for fire emergency.",
      link : "https://www.india.gov.in/directory/helpline",
    },
    {
      img: "/108.png",
      title: "108",
      desc: "108 for medical and ambulance services.",
      link : "https://www.emri.in/108-emergency/#:~:text=Sense%3A%20Emergency%20victim%2F%20attendant%20dial,to%20reach%20the%20site%2Fscene.",
    },
  ];

  return (
    // <main className="bg-gray-200 min-h-screen">
     <main
      className="min-h-screen bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/bg.jfif')" }}
    >
      
      {/* Welcome Card */}
      <section className="flex justify-center py-12">
        <div className="bg-gray-100 w-[500px] p-6 rounded-lg shadow-sm">
          <h2 className="text-red-600 text-3xl italic mb-4">
            Welcome to the Online Crime Reporting Portal
          </h2>

          <p className="text-lg leading-7">
            Report crimes securely and responsibly through a trusted digital
            platform. Your participation helps law enforcement ensure safety,
            transparency, and justice for all citizens of India.
            <span className="text-red-600 italic">
              {" "}
              Please register and login to report crimes online safely.
            </span>
          </p>
        </div>
      </section>

      {/* Safety Banner */}
<div className="mx-8 bg-purple-900 text-white py-2 rounded">
  <marquee direction="left" scrollamount="6">
    🚓 Your Safety, Our Priority 🚓 Report Crime Securely • Stay Alert • Stay Safe          ---   Disclaimer: This website is a college project created for educational and
    demonstration purposes only. It is not an official Government of India
    website and should not be considered a real crime reporting platform.
  </marquee>
</div>

      {/* Main Content */}
      <section className="mx-8 mt-8 bg-gray-100 p-8">
        <h2 className="text-center text-4xl font-bold text-blue-900 mb-10">
          Online Crime Reporting – India
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, index) => (
             <a key={index} href={item.link}>
            <div
              key={index}
              className="bg-gray-200 rounded-lg p-4 shadow-sm"
            >
              <div className="h-52 flex justify-center items-center">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={220}
                  height={180}
                  className="object-contain"
                />
              </div>

              <p className="mt-4 text-lg">{item.desc}</p>
            </div>
            </a>
          ))}
        </div>

        {/* Why Section */}
        <div className="mt-12 bg-gray-200 p-8 rounded">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Image
                src="/Crime-Portal.png"
                alt="Crime Portal"
                width={500}
                height={300}
                className="w-full"
              />
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-4">
                Why Online Crime Reporting is Important?
              </h3>

              <p className="text-lg leading-8">
                Online Crime Reporting System in India is a digital initiative
                that allows citizens to report crimes easily from anywhere. It
                reduces the burden on police stations, saves time, and ensures
                complaints are recorded safely. This system improves
                transparency, accountability, and helps law enforcement
                agencies take faster action.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}