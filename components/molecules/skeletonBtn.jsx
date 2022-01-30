export const SkeletonBtn = ({ count }) => {
  return (
    <div className="animate-pulse">
      <div className="flex justify-between flex-wrap">
        {[...Array(count).keys()].map((i) => (
          <button
            key={i}
            className=" mr-4 mb-4 transition-all h-12 w-32 bg-slate-300 ease-in-out rounded-md hover:scale-105 active:scale-90"
          ></button>
        ))}
      </div>
    </div>
  );
};
