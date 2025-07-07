function About() {
  return (
    <div className="w-full py-16 px-6  text-white">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <img
          src="https://images.unsplash.com/photo-1591189863430-ab87e120f312?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZCUyMGtpdGNoZW58ZW58MHx8MHx8fDA%3D"
          alt="restaurant interior"
          className="w-full md:w-1/2 rounded-lg shadow-lg object-cover"
        />
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-4xl font-bold uppercase">About Restro</h2>
          <p className="text-lg">
            Welcome to <strong>Restro</strong> – where flavors come alive and memories are made. We serve authentic dishes crafted with passion, using fresh ingredients and timeless recipes.
          </p>
          <p className="text-base text-gray-500">
            From traditional delights to modern twists, our chefs bring the best of culinary experience to your plate. Whether you're here for a family dinner or a special celebration, Restro offers warmth, taste, and an unforgettable atmosphere.
          </p>
          <p className="text-sm italic text-gray-500">Come hungry. Leave happy.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
