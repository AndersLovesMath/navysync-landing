import type { CSSProperties } from "react";
import { mapBounds, nationOutline, stateShapes } from "@/lib/usStates";

/* The coverage map: the states laid out on a board seen from the front and a
   little above, drawn as plain SVG so it ships no client script. A state with
   programs rises off the board as a column of its own outline: the first
   program lifts it a full block and each one after adds a short step, so busy
   states stand out without walling off the states behind them.

   The board is the flat Albers map squashed north-to-south. Columns are built
   by stacking copies of the outline one unit apart, which sweeps out solid
   sides for any shape. Every number here is in SVG user units. */
const DEPTH = 0.66; // north-south foreshortening of the board
const SLAB = 5; // thickness of the board
const BLOCK = 22; // height a state's first program lifts it
const STEP = 3; // extra height for each program after the first

const columnHeight = (count: number) => BLOCK + (count - 1) * STEP;

const programLabel = (count: number) =>
  `${count} program${count === 1 ? "" : "s"}`;

/* One copy of the outline per unit of height, from the base up. */
const stack = (from: number, to: number) =>
  Array.from({ length: to - from + 1 }, (_, i) => from + i);

/* The squash lives on a group around each layer, so offsets inside it are
   divided back out to land one screen unit apart. */
const squash = `scale(1 ${DEPTH})`;
const inside = (screenY: number) => screenY / DEPTH;

export default function UsMap({ counts }: { counts: Record<string, number> }) {
  const active = stateShapes.filter((state) => counts[state.code]);
  const tallest = Math.max(
    0,
    ...active.map((state) => columnHeight(counts[state.code])),
  );

  // Fit the viewBox to the board plus the tallest column so nothing clips as
  // counts grow. The board's top face sits on y = 0 after the squash.
  const top = mapBounds.y * DEPTH - tallest - 12;
  const bottom = (mapBounds.y + mapBounds.height) * DEPTH + SLAB;

  const summary = active
    .map((state) => `${state.name} ${counts[state.code]}`)
    .join(", ");

  return (
    <svg
      viewBox={`${mapBounds.x - 2} ${top} ${mapBounds.width + 4} ${bottom - top + 2}`}
      className="h-auto w-full"
      role="img"
      aria-label={`Map of the United States showing NJROTC programs using NavySync: ${summary}.`}
    >
      <defs>
        <path id="us-nation" d={nationOutline} />
        {stateShapes.map((state) => (
          <path
            key={state.code}
            id={`us-${state.code}`}
            d={state.d}
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </defs>

      {/* The board's edge, then every state flat on its top face. */}
      <g transform={squash}>
        {stack(1, SLAB).map((y) => (
          <use
            key={y}
            href="#us-nation"
            y={inside(y)}
            className="fill-primary-fixed-dim"
          />
        ))}
        {stateShapes.map((state) => (
          <g key={state.code} className="group">
            <title>
              {counts[state.code]
                ? `${state.name}: ${programLabel(counts[state.code])}`
                : `${state.name}: no programs yet`}
            </title>
            <use
              href={`#us-${state.code}`}
              className="fill-primary-fixed stroke-surface-container-lowest transition-colors group-hover:fill-secondary-container"
              strokeWidth={0.75}
            />
          </g>
        ))}
      </g>

      {/* Columns, back to front, so nearer states paint over farther ones. */}
      {active.map((state, order) => {
        const count = counts[state.code];
        const height = columnHeight(count);
        const x = state.cx;
        const y = state.cy * DEPTH - height;

        return (
          <g
            key={state.code}
            className="map-column group"
            style={{ "--i": order } as CSSProperties}
          >
            <title>{`${state.name}: ${programLabel(count)}`}</title>
            <g transform={squash}>
              {stack(1, height - 1).map((lift) => (
                <use
                  key={lift}
                  href={`#us-${state.code}`}
                  y={inside(-lift)}
                  className="fill-primary"
                />
              ))}
              <use
                href={`#us-${state.code}`}
                y={inside(-height)}
                className="fill-primary-container stroke-primary-fixed-dim transition-colors group-hover:fill-inverse-primary"
                strokeWidth={0.75}
              />
            </g>
            <text
              x={x}
              y={y}
              dy="-0.05em"
              textAnchor="middle"
              className="fill-on-primary font-headline text-[26px] font-extrabold transition-colors group-hover:fill-on-primary-fixed sm:text-[18px]"
            >
              {count}
            </text>
            <text
              x={x}
              y={y}
              dy="0.95em"
              textAnchor="middle"
              className="fill-on-primary/80 text-[13px] font-semibold transition-colors group-hover:fill-on-primary-fixed sm:text-[9px]"
            >
              {state.code}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
