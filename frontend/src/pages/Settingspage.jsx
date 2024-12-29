import React from "react";
import { useThemeStore } from "../Store/useThemeStore.js";
import { themes } from "../lib/themes";
const Settingspage = () => {
  const { theme, setTheme } = useThemeStore();
  return (
    <div className="h-[calc(700px-48px)] container mx-auto px-4 pt-20 max-w-5xl ">
      <div className="space-y-6">
        <div className="flex flex-col gap-1">
          <h2 className="text-lg font-semibold">Theme</h2>
          <p className="text-sm text-base-content/70">
            Choose a theme for your chat interface
          </p>
        </div>
      </div>
      <div className="grid  grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
        {themes.map((t) => {
          return (
            <button
              key={t}
              className={`group flex flex-col items-center gap-1.5 p-2 rounded-lg transistion-colors ${
                theme == t ? "bg-base-200" : "hover:bg-base-200/50"
              } `}
              onClick={() => setTheme(t)}
            >
              <div className="relative h-8 w-full rounded-md " data-theme={t}>
                <div className="absolute inset-0 grid grid-cols-6  auto-cols-auto gap-px p-1">
                  <div className="rounded bg-primary"></div>
                  <div className="rounded bg-secondary"></div>
                  <div className="rounded bg-accent"></div>
                  <div className="rounded bg-neutral"></div>
                </div>
              </div>
              <h4 className="text-[11px] font-medium truncate w-full text-center">
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </h4>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Settingspage;
