function FruitPromoSection() {
  return (
     <div className="bg-gray-900 h-80 w-full py-5 justify-center items-center flex gap-5">
      <div className="max-w-4xl w-full flex flex-col md:flex-row items-center md:items-start gap-8 text-white">
        <div className="flex-1 flex justify-center md:justify-start">
          <h1 className="text-3xl md:text-4xl font-bold max-w-sm leading-tight">
            Just imagine <br /> seeds and <br /> summer in gell <br /> sunshine.
          </h1>
        </div>

        <div className="flex-1">
          <div className="rounded-xl overflow-hidden shadow-lg w-64 mx-auto md:mx-0">
            <img
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/61ad98fa-7c43-43e8-9f2c-34dfd6bccdcf.png"
              alt="Close-up of assorted fresh berries with strawberries, blackberries, raspberries, and blueberries on a dark slate plate with green basil leaves"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2069459a-b1d3-4c94-a587-1452344a9d06.png";
              }}
            />
          </div>
        </div>

        <div className="flex-1 bg-white rounded-xl p-8 max-w-xs text-gray-900 shadow-lg flex flex-col justify-between">
          <h2 className="font-semibold text-lg mb-2">EBEE WOUS BENEFIT.</h2>
          <p className="text-sm mb-6 leading-relaxed">
            Web & naï, hlabdlsmwqvel aimes <br /> PURECELL LORIOSION
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 transition-colors rounded-md py-3 text-white font-semibold">
            HEAD MORE
          </button>
        </div>
      </div>
    </div>
  );
}

export default FruitPromoSection;
