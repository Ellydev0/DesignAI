const Visual = () => {
  const n = 2;
  const size = 1400 / n;
  const bg = ["var(--color-accent)", "var(--color-primary)"];
  return (
    <div className="w-full h-full absolute top-16 left-[30%]">
      <div className="blob-spin w-full h-full">
        {Array.from({ length: n }, (_, i) => {
          return (
            <div
              key={i}
              className="absolute rounded-full opacity-55 blur-[100px]"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                transform: `translate(${i * 27}vw, ${i * 27}vh)`,
                backgroundColor: bg[i % bg.length],
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Visual;
