import React from "react";
import Cat1 from "../Resources/img/cat1.png";
import Cat2 from "../Resources/img/cat2.png";
import Cat3 from "../Resources/img/cat3.png";
import Cat4 from "../Resources/img/cat4.png";
import Cat5 from "../Resources/img/cat5.png";
import Cat6 from "../Resources/img/cat6.png";
import Cat7 from "../Resources/img/cat7.png";
import Cat8 from "../Resources/img/cat8.png";

const topics = [
  { name: "Microsoft Excel", icon: Cat1},
  { name: "AWS", icon: Cat2 },
  { name: "Python", icon: Cat3 },
  { name: "Java", icon: Cat4 },
  { name: "Web Design", icon: Cat5 },
  { name: "Web Development", icon: Cat6 },
  { name: "MySQL", icon: Cat7 },
  { name: "UI/UX Design", icon: Cat8 },
];

const Categories = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto text-center">
        {/* Heading */}
        <p className="uppercase font-semibold tracking-wide">
          ── Categories ──
        </p>
        <h2 className="text-3xl font-bold text-orange-500 mt-2">
          Popular Topics to Explore
        </h2>

        {/* Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 px-20">
          {topics.map((topic, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center hover:shadow-xl transition duration-300 hover:bg-orange-500 hover:text-white"
            >
              <img src={topic.icon} alt={topic.name} className="w-12 h-12 mb-4" />
              <h3 className="text-lg font-semibold">{topic.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
