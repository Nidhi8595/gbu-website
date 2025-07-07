import SearchableWrapper from '../Searchbar/SearchableWrapper';

const PlacementsSection = () => {
  const placementStats = [
  { label: "Placement Rate", value: "85‑90%", color: "bg-green-500" },
  { label: "Highest Package", value: "₹51 LPA", color: "bg-blue-500" },
  { label: "Average Package", value: "₹6 LPA", color: "bg-purple-500" },
  { label: "Companies Visited", value: "150+", color: "bg-yellow-500" },
];


  return (
    <SearchableWrapper>
    <section
      id="placements"
      className="py-20 bg-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-800">
            Placements
          </h2>
          <p className="text-xl text-gray-600">
            Connecting talent with opportunities
          </p>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-6 rounded-full" />
        </div>

        {/* Hero Image */}
        <div className="relative mb-12 rounded-2xl overflow-hidden shadow-lg group">
          <img
            src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=1200&h=300&fit=crop"
            alt="Placement Drive"
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {placementStats.map((stat, index) => (
            <div
              key={index}
              className="text-center group bg-white shadow-md border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:scale-105 p-6 rounded-xl"
            >
              <div
                className={`w-20 h-20 ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg shadow-md group-hover:scale-110 transition-transform duration-300`}
              >
                {stat.value}
              </div>
              <h3 className="font-semibold text-blue-900 group-hover:text-blue-600 transition-colors duration-300">
                {stat.label}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
    </SearchableWrapper>
  );
};

export default PlacementsSection;
