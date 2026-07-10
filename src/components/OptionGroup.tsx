type Option<TValue extends string> = {
  value: TValue;
  label: string;
};

type OptionGroupProps<TValue extends string> = {
  label: string;
  tone: "time" | "energy" | "intention";
  value: TValue;
  options: Option<TValue>[];
  onChange: (value: TValue) => void;
};

function getOptionLabel(label: string) {
  if (label === "ไม่อยากอยู่เงียบ ๆ") {
    return (
      <>
        ไม่อยากอยู่
        <br />
        เงียบ ๆ
      </>
    );
  }

  return label;
}

export function OptionGroup<TValue extends string>({ label, tone, value, options, onChange }: OptionGroupProps<TValue>) {
  const toneClassName = `filterCard${tone[0].toUpperCase()}${tone.slice(1)}`;
  const moodClassName = tone === "intention" ? " filterCardMood" : "";
  const optionGridClassName = `optionGrid${tone === "intention" ? " optionGridMood" : ""}`;

  return (
    <section className={`filterCard ${toneClassName}${moodClassName}`} aria-labelledby={`${tone}-filter-title`}>
      <div className="filterHeader">
        <h3 id={`${tone}-filter-title`}>{label}</h3>
        <span className="filterAccent" aria-hidden="true" />
      </div>

      <div className={optionGridClassName}>
        {options.map((option) => {
          const isSelected = option.value === value;
          const isLongLabel = option.label.length > 12;
          const className = `optionButton${isSelected ? " optionButtonActive" : ""}${
            isLongLabel ? " optionButtonLong" : ""
          }`;

          return (
            <button
              key={option.value}
              className={className}
              type="button"
              aria-pressed={isSelected}
              onClick={() => onChange(option.value)}
            >
              <span className="optionButtonLabel">{getOptionLabel(option.label)}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
