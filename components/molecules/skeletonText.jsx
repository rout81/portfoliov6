export const SkeletonText = ({ count }) => {
  console.log([...Array(count).keys()]);
  return (
    <div className="animate-pulse w-2/3">
      <div className="grid grid-cols-3 gap-8">
        {[...Array(count).keys()].map((i) => (
          <div key={i} className="h-4 bg-slate-700 rounded"></div>
        ))}
      </div>
    </div>
  );
};
