"use client";

export function WindowControls() {
  return (
    <div className="flex items-center gap-2 p-2">
      <button
        onClick={() => window.close()}
        className="w-3 h-3 rounded-full bg-[#FF5F57] hover:bg-[#FF5F57]/80 transition-colors border border-black/10 cursor-default"
        aria-label="Close"
      />
      <button
        className="w-3 h-3 rounded-full bg-[#FEBC2E] hover:bg-[#FEBC2E]/80 transition-colors border border-black/10 cursor-default"
        aria-label="Minimize"
      />
      <button
        className="w-3 h-3 rounded-full bg-[#28C840] hover:bg-[#28C840]/80 transition-colors border border-black/10 cursor-default"
        aria-label="Maximize"
      />
    </div>
  );
}
