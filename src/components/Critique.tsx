const StructuredCritique = () => {
  return (
    <div className="relative w-full max-w-lg rounded-2xl border border-neutral-500  p-6 shadow-sm">
      {/* Mock design canvas */}
      <div className="relative h-56 rounded-xl bg-white/20 overflow-hidden">
        {/*<div className="absolute inset-0 bg-gradient-to-br from-neutral-200/60 to-neutral-100" />*/}

        {/* Fake content blocks */}
        <div className="absolute top-6 left-6 h-6 w-40 rounded bg-neutral-300" />
        <div className="absolute top-16 left-6 h-3 w-56 rounded bg-neutral-300/80" />
        <div className="absolute top-24 left-6 h-3 w-48 rounded bg-neutral-300/60" />
        <div className="absolute bottom-6 left-6 h-10 w-28 rounded-lg bg-neutral-400" />

        {/* Annotations */}
        <Annotation label="Hierarchy" top="16%" left="65%" />
        <Annotation label="Spacing" top="45%" left="72%" />
        <Annotation label="Color" top="70%" left="60%" />
      </div>

      {/* Footer breakdown */}
      <div className="mt-4 grid grid-cols-3 gap-2 text-xs">
        <CritiqueItem label="Hierarchy" status="good" />
        <CritiqueItem label="Spacing" status="warn" />
        <CritiqueItem label="Color" status="good" />
      </div>
    </div>
  );
};

const Annotation = ({
  label,
  top,
  left,
}: {
  label: string;
  top: string;
  left: string;
}) => (
  <div className="absolute flex items-center gap-2" style={{ top, left }}>
    <span className="h-2 w-2 rounded-full bg-gradient-to-r from-primary to-accent" />
    <span className="rounded-md bg-white px-2 py-0.5 text-xs shadow">
      {label}
    </span>
  </div>
);

const CritiqueItem = ({
  label,
  status,
}: {
  label: string;
  status: "good" | "warn";
}) => (
  <div className="flex items-center justify-between rounded-lg border border-neutral-500 px-3 py-2">
    <span className="text-text">{label}</span>
    <span
      className={`text-xs font-medium ${
        status === "good" ? "text-green-600" : "text-yellow-600"
      }`}
    >
      {status === "good" ? "✓" : "!"}
    </span>
  </div>
);

export default StructuredCritique;
