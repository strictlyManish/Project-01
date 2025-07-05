function FruitPromoSection() {
  return (
    <div className="bg-gray-900 text-white py-12 px-6 flex">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Text */}
        <div className="md:w-1/3 text-left">
          <h2 className="text-3xl font-semibold leading-snug">
            Just imagine <br />
            seeds and <br />
            summer in gell <br />
            sunshine.
          </h2>
        </div>

        {/* Center Image */}
        <div className="md:w-1/3">
          <img
            src="https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2"
            alt="Berries"
            className="rounded-lg shadow-lg object-cover w-full"
          />
        </div>

        {/* Right Card */}
        <div className="md:w-1/3 bg-white text-gray-800 p-6 rounded-md shadow-lg max-w-sm">
          <h3 className="text-xl font-bold mb-1">EBEE WOUS BENEFIT.</h3>
          <p className="text-sm mb-2">With fresh, healthcare areas.</p>
          <p className="text-xs text-gray-500 mb-4">FURCHEEN LOCATION</p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md text-sm">
            HEAD MORE
          </button>
        </div>
      </div>
    </div>
  );
}

export default FruitPromoSection;
