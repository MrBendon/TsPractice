const starPosition = [
  { id: 1, x: 30, y: 30 },
  { id: 2, x: 50, y: 90 },
  { id: 3, x: 25, y: 75 },
  { id: 4, x: 90, y: 85 },
  { id: 5, x: 10, y: 85 },
  { id: 6, x: 70, y: 65 },
  { id: 7, x: 90, y: 85 },
  { id: 8, x: 40, y: 70 },
  { id: 9, x: 55, y: 75 },
  { id: 10, x: 75, y: 25 },
  { id: 11, x: 25, y: 25 },
  { id: 12, x: 20, y: 25 },
];

const Star = () => {
  return (
    <>
      {starPosition.map((star) => (
        <div
          key={star.id}
          className={`absolute even:w-[3px] even:h-[3px] odd:w-[2px] odd:h-[2px] odd:bg-yellow-500 even:bg-white/90 rounded-full even:animate-pulse`}
          style={{ top: `${star.y}%`, left: `${star.x}%` }}
        ></div>
      ))}
    </>
  );
};

export default Star;
