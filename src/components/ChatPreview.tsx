const ChatPreview = () => {
  return (
    <div className="w-full z-3 relative max-w-[50rem] rounded-2xl border border-neutral-500 p-4 shadow-sm mx-auto">
      <div className="space-y-4 text-sm">
        {/* Designer */}
        <div className="flex justify-end">
          <div className="max-w-[80%] rounded-xl bg-neutral-100 px-4 py-2 text-neutral-900">
            The hero feels flat. I want it to feel premium but not loud.
          </div>
        </div>

        {/* AI */}
        <div className="flex justify-start">
          <div className="w-6 h-6 mr-3 rounded-full bg-linear-to-br from-primary to-accent" />
          <div className="max-w-[80%] rounded-xl bg-neutral-800 px-4 py-2 text-neutral-100">
            Your hierarchy is too even. Increase the headline weight, reduce
            subtext opacity, and add more vertical spacing.
          </div>
        </div>

        {/* Designer */}
        <div className="flex justify-end">
          <div className="max-w-[80%] rounded-xl bg-neutral-100 px-4 py-2 text-neutral-900">
            What about color?
          </div>
        </div>

        {/* AI */}
        <div className="flex justify-start">
          <div className="w-6 h-6 mr-3 rounded-full bg-linear-to-br from-primary to-accent" />

          <div className="max-w-[80%] rounded-xl bg-neutral-800 px-4 py-2 text-neutral-100">
            Keep the palette. Add a subtle accent gradient at 8–12% opacity for
            depth.
          </div>
        </div>
      </div>

      {/* Footer hint */}
      <div className="mt-4 text-xs text-neutral-500">
        Structured critique • Layout • Color • Hierarchy
      </div>
    </div>
  );
};

export default ChatPreview;
