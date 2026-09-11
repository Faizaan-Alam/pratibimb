import { useTheme } from "../hooks/useTheme";

export default function ThemeSwitcher() {
  const { theme, setTheme, themes } = useTheme();
  const current = themes.find((item) => item.id === theme) || themes[0];

  return (
    <div className="dropdown dropdown-end">
      <button
        type="button"
        tabIndex={0}
        className="btn btn-ghost min-h-9 h-9 rounded-sm px-2 font-display text-xs font-semibold tracking-wide"
        aria-haspopup="listbox"
        aria-label={`Theme, ${current.label}`}
      >
        <span className="hidden sm:inline">{current.label}</span>
        <span className="sm:hidden" aria-hidden="true">
          Aa
        </span>
      </button>
      <ul
        tabIndex={0}
        role="listbox"
        className="dropdown-content menu z-50 mt-2 w-52 rounded-sm border hairline bg-base-100 p-2 shadow-lg"
      >
        {themes.map((item) => (
          <li key={item.id} role="option" aria-selected={item.id === theme}>
            <button
              type="button"
              className={`rounded-sm ${item.id === theme ? "bg-base-200" : ""}`}
              onClick={() => {
                setTheme(item.id);
                if (document.activeElement instanceof HTMLElement) {
                  document.activeElement.blur();
                }
              }}
            >
              <span>
                <span className="block font-display text-sm font-semibold">
                  {item.label}
                </span>
                <span className="block font-serif text-xs text-base-content/60">
                  {item.description}
                </span>
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
