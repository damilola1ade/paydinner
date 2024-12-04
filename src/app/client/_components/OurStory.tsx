import React from "react";

const items = [
  {
    id: 1,
    item: "Authentic Global Flavors – A menu inspired by rich culinary traditions from around the world.",
  },
  {
    id: 2,
    item: "Exceptional Quality – Crafted with the finest ingredients and attention to detail.",
  },
  {
    id: 3,
    item: "Enchanting Ambiance – A tranquil oasis with warm, inviting decor.",
  },
  {
    id: 4,
    item: "Personalized Service – Hospitality that makes every guest feel special.",
  },
  {
    id: 5,
    item: "Sustainable & Fresh – Locally sourced ingredients, prepared with care for you and the planet.",
  },
];

export const OurStory = () => {
  return (
    <div className="bg-white mt-8 w-full p-6 rounded-xl">
      <h1 className="text-md font-semibold">Our story</h1>
      <p className="mt-2 text-xs md:text-sm font-normal mb-4 text-zinc-700">
        Nestled in the heart of the city, Saffron Oasis was born from a dream of
        blending flavors, cultures, and stories. Inspired by the vibrant essence
        of saffron—a spice that has traveled centuries across continents—Saffron
        Oasis is a sanctuary where the richness of the world’s cuisines comes
        alive. The founders, avid travelers and culinary enthusiasts, envisioned
        a place where each dish carries a tale of adventure. From the bustling
        spice markets of Marrakech to the serene tea gardens of Assam, every
        element of Saffron Oasis pays homage to the journey of flavor and
        tradition
      </p>
      <h1 className="mt-6 text-md font-semibold">Why dine with us?</h1>
      <ol type="1" className="list-decimal list-inside">
        {items.map(({ id, item }) => (
          <li
            key={id}
            className="mt-2 text-xs md:text-sm font-normal mb-4 text-zinc-700"
          >
            {item}
          </li>
        ))}
      </ol>
    </div>
  );
};
