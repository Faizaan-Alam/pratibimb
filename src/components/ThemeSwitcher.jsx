import { useTheme } from "../hooks/useTheme";

export default function ThemeSwitcher() {
  const { theme, setTheme, themes } = useTheme();
  const current = themes.find((item) => item.id === theme) || themes[0];

  return (
    <div className="dropdown dropdown-end">
      <button
        type="button"
        tabIndex={0}
        className="btn btn-ghost min-h-9 h-9 gap-2 rounded-sm px-2 font-display text-xs font-semibold tracking-wide"
        aria-haspopup="listbox"
        aria-label={`Theme, ${current.label}`}
      >
        <span
          className="inline-block h-3.5 w-3.5 rounded-sm border border-base-content/30"
          style={{ background: `linear-gradient(135deg, ${current.paper} 50%, ${current.accent} 50%)` }}
          aria-hidden="true"
        />
        <span className="hidden sm:inline">{current.label}</span>
        <span className="sm:hidden" aria-hidden="true">
          Aa
        </span>
      </button>
      <ul
        tabIndex={0}
        role="listbox"
        className="dropdown-content menu z-50 mt-2 max-h-[calc(100dvh-4.5rem)] w-72 overflow-y-auto rounded-sm border hairline bg-base-100 p-2 shadow-lg"
      >
        {themes.map((item) => {
          const selected = item.id === theme;
          return (
            <li key={item.id} role="option" aria-selected={selected}>
              <button
                type="button"
                className={`!py-1.5 rounded-sm ${selected ? "bg-base-200" : ""}`}
                onClick={() => {
                  setTheme(item.id);
                  if (document.activeElement instanceof HTMLElement) {
                    document.activeElement.blur();
                  }
                }}
              >
                <span
                  className="flex h-8 w-8 shrink-0 flex-col justify-between border p-1"
                  style={{ background: item.paper, borderColor: item.ink, color: item.ink }}
                  aria-hidden="true"
                >
                  <span className="block h-1 w-4" style={{ background: item.ink }} />
                  <span className="block h-2 w-full" style={{ background: item.accent }} />
                </span>
                <span className="min-w-0">
                  <span className="block font-display text-sm font-semibold">{item.label}</span>
                  <span className="block font-serif text-xs text-base-content/60">{item.description}</span>
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
