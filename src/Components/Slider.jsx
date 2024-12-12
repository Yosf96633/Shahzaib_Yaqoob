import React, { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import cr1 from "../assets/cr1.png";
import cr2 from "../assets/cr2.png";

import cr3 from "../assets/cr3.png";

import cr4 from "../assets/cr4.png";

import cr5 from "../assets/cr5.png";

import cr6 from "../assets/cr6.png";
const Slider = () => {
  const [cards, setCards] = useState(cardData);

  return (
    <div className="grid h-[500px] w-full place-items-center bg-[#190b1f]">
      <h1 className="text-xl text-center text-white">Swipe left or right</h1>
      {cards.map((card) => (
        <Card key={card.id} cards={cards} setCards={setCards} {...card} />
      ))}
    </div>
  );
};

const Card = ({ id, url, setCards, cards }) => {
  const x = useMotionValue(0);
  const rotateRaw = useTransform(x, [-150, 150], [-18, 18]);
  const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0]);

  const isFront = id === cards[cards.length - 1].id;
  const isLastCard = cards.length === 1;

  const rotate = useTransform(() => {
    const offset = isFront ? 0 : id % 2 ? 6 : -6;
    return `${rotateRaw.get() + offset}deg`;
  });

  const handleDragEnd = (event, info) => {
    if (Math.abs(info.offset.x) > 60 && !isLastCard) {
      setCards((prevCards) => prevCards.filter((card) => card.id !== id));
    } else {
      // Reset position if not swiped far enough
      x.set(0);
    }
  };

  return (
    <motion.img
      src={url}
      alt="Placeholder alt"
      className="h-[28rem] w-[36rem] max-sm:h-80 max-sm:w-[24rem] origin-bottom rounded-lg bg-white object-cover hover:cursor-grab active:cursor-grabbing"
      style={{
        gridRow: 1,
        gridColumn: 1,
        x,
        opacity,
        rotate,
        transition: "0.125s transform",
        boxShadow: isFront
          ? "0 20px 25px -5px rgb(0 0 0 / 0.5), 0 8px 10px -6px rgb(0 0 0 / 0.5)"
          : undefined,
      }}
      animate={{
        scale: isFront ? 1 : 0.98,
      }}
      drag={isFront && !isLastCard ? "x" : false} // Disable drag if it is the last card
      dragConstraints={{ left: 0, right: 0 }} // Lock vertical drag
      onDragEnd={handleDragEnd} // Handle drag release
    />
  );
};

export default Slider;

const cardData = [
  {
    id: 1,
    url: cr1,
  },
  {
    id: 2,
    url: cr2,
  },
  {
    id: 3,
    url: cr3,
  },
  {
    id: 4,
    url: cr4,
  },
  {
    id: 5,
    url: cr5,
  },
  {
    id: 6,
    url: cr6,
  },
];
