import React from "react";

const features = [
  {
    icon: "🎓",
    title: "Learn anything",
    description:
      "Explore any interest or trending topic, take prerequisites, and advance your skills.",
  },
  {
    icon: "💰",
    title: "Save money",
    description:
      "Spend less money on your learning if you plan to take multiple courses this year.",
  },
  {
    icon: "🧠",
    title: "Flexible learning",
    description:
      "Learn at your own pace, move between multiple courses, or switch to a different course.",
  },
  {
    icon: "📜",
    title: "Unlimited certificates",
    description:
      "Earn a certificate for every learning program that you complete at no additional cost.",
  },
];



const Feature = () => {
  return (
    <section className="text-center py-12">
    <h2 className="text-3xl font-bold text-orange-500">Invest in your professional goals with Next Academy</h2>
    <p className="text-gray-600 mt-2 mb-8">
      Get unlimited access to over 90% of courses, Projects, Specializations, and Professional Certificates on Coursera, taught by top instructors.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6">
      {features.map((feature) => (
        <div key={feature.id} className="bg-white p-6 rounded-lg shadow-md text-center transition-transform transform text-gray-700 hover:-translate-y-1 hover:bg-orange-500 hover:text-white">
          <div className="text-5xl mb-4">{feature.icon}</div>
          <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
          <p className="">{feature.description}</p>
        </div>
      ))}
    </div>
  </section>
  );
};

export default Feature;