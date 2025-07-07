function Service() {
  const services = [
    {
      title: "Dine-In Experience",
      desc: "Enjoy our cozy ambiance, courteous service, and freshly prepared meals right at your table.",
      icon: "🍽️",
    },
    {
      title: "Online Ordering",
      desc: "Get your favorite dishes delivered hot and fresh to your doorstep with just a few clicks.",
      icon: "📦",
    },
    {
      title: "Takeaway",
      desc: "Short on time? Order ahead and pick up your meal ready to go.",
      icon: "🥡",
    },
    {
      title: "Event Catering",
      desc: "From birthday parties to corporate events, we offer customized catering to suit all occasions.",
      icon: "🎉",
    },
  ];

  return (
    <div className="w-full py-16 px-6 text-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold uppercase mb-4 text-white">Our Services</h2>
        <p className="text-gray-500 mb-12 text-lg">We provide quality services to make every meal memorable.</p>

        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-600 p-6 rounded-lg shadow-md text-left hover:shadow-xl transition-all">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-2 text-white ">{service.title}</h3>
              <p className="text-white">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Service;
