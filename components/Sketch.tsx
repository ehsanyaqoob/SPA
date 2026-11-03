// Hand-drawn marks, the site's signature. Each section uses a different gesture,
// so never repeat one line everywhere. Color comes from the parent's text color.

type SketchProps = { className?: string };

function Stretched({
  viewBox,
  className = "",
  strokeWidth = 3,
  paths,
}: SketchProps & { viewBox: string; strokeWidth?: number; paths: string[] }) {
  return (
    <svg
      viewBox={viewBox}
      preserveAspectRatio="none"
      aria-hidden="true"
      fill="none"
      className={`pointer-events-none absolute ${className}`}
    >
      {paths.map((path) => (
        <path
          key={path}
          d={path}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
      ))}
    </svg>
  );
}

// A fast underline that doubles back on itself.
export function SketchSwash({ className = "" }: SketchProps) {
  return (
    <Stretched
      viewBox="0 0 300 30"
      className={`left-0 w-full ${className}`}
      paths={["M4 12 C 70 3, 170 2, 292 8 C 250 13, 170 15, 96 20 C 140 19, 200 20, 244 25"]}
    />
  );
}

export function SketchWave({ className = "" }: SketchProps) {
  return (
    <Stretched
      viewBox="0 0 200 14"
      className={`left-0 w-full ${className}`}
      paths={["M2 7 Q 14 0, 26 7 T 50 7 T 74 7 T 98 7 T 122 7 T 146 7 T 170 7 T 197 7"]}
    />
  );
}

export function SketchDouble({ className = "" }: SketchProps) {
  return (
    <Stretched
      viewBox="0 0 200 14"
      className={`left-0 w-full ${className}`}
      strokeWidth={2.5}
      paths={["M2 4 C 60 1, 140 1, 198 3", "M34 11 C 80 8, 130 8, 172 10"]}
    />
  );
}

// A loose oval drawn around a word. Position it wider than the word it circles.
export function SketchOval({ className = "" }: SketchProps) {
  return (
    <Stretched
      viewBox="0 0 300 100"
      className={className}
      strokeWidth={2.5}
      paths={["M170 7 C 246 3, 296 24, 293 51 C 290 81, 210 96, 130 93 C 56 91, 5 75, 7 46 C 9 20, 84 4, 200 11"]}
    />
  );
}

// A thick highlighter stroke. Its parent needs `isolate` so it sits behind the text.
export function SketchMarker({ className = "" }: SketchProps) {
  return (
    <Stretched
      viewBox="0 0 200 20"
      className={`-bottom-0.5 left-[-4%] -z-10 h-3.5 w-[108%] opacity-40 ${className}`}
      strokeWidth={12}
      paths={["M4 12 C 60 7, 140 9, 196 10"]}
    />
  );
}

// A wobbly vertical line for timelines. It stretches to its parent's height.
export function SketchTimeline({ className = "" }: SketchProps) {
  return (
    <Stretched
      viewBox="0 0 12 200"
      className={`bottom-0 top-0 h-full w-3 ${className}`}
      strokeWidth={2}
      paths={["M6 0 C 1 30, 11 60, 6 100 C 1 140, 11 170, 6 200"]}
    />
  );
}

export function SketchDot({ className = "" }: SketchProps) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" fill="none" className={className}>
      <path d="M11 2.5 C 16 2.5, 18 7, 17.5 10.5 C 17 15, 13 17.5, 9.5 17 C 5 16.5, 2.5 13, 3 9 C 3.5 5, 7 2.5, 13 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="10" cy="10" r="3" fill="currentColor" />
    </svg>
  );
}

// A curved arrow that points right. Rotate or flip it with className.
export function SketchArrow({ className = "" }: SketchProps) {
  return (
    <svg
      viewBox="0 0 120 60"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M5 14 C 30 50, 72 56, 110 28" />
      <path d="M90 24 L 111 27 L 102 46" />
    </svg>
  );
}

// Three short strokes, like a little burst.
export function SketchSparks({ className = "" }: SketchProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      className={className}
    >
      <path d="M5 26 L 15 22" />
      <path d="M10 8 L 18 16" />
      <path d="M27 4 L 25 15" />
    </svg>
  );
}

// An underline with a single loop in the middle.
export function SketchLoop({ className = "" }: SketchProps) {
  return (
    <Stretched
      viewBox="0 0 200 24"
      className={`left-0 w-full ${className}`}
      strokeWidth={2.5}
      paths={["M2 14 C 40 10, 76 10, 108 14 C 128 17, 126 3, 110 4 C 94 6, 96 21, 122 19 C 150 17, 176 13, 198 12"]}
    />
  );
}

// The road through the process steps. It stretches across the row of stops.
export function SketchRoute({ className = "" }: SketchProps) {
  return (
    <Stretched
      viewBox="0 0 1000 150"
      className={className}
      strokeWidth={2.5}
      paths={["M30 36 C 100 8, 190 124, 280 92 C 350 66, 440 2, 530 36 C 600 64, 690 126, 780 92 C 850 66, 930 40, 996 58"]}
    />
  );
}

function Doodle({ className, children }: SketchProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 64 64"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {children}
    </svg>
  );
}

// Two overlapping speech bubbles.
export function SketchTalk({ className = "" }: SketchProps) {
  return (
    <Doodle className={className}>
      <path d="M10 13 C 20 10, 34 10, 42 12 C 45 19, 45 27, 42 33 C 34 35, 25 35, 18 34 L 9 42 L 11 33 C 7 26, 7 19, 10 13 Z" />
      <path d="M48 24 C 53 25, 57 26, 57 27 C 59 33, 59 40, 56 45 L 58 53 L 49 47 C 42 48, 35 47, 30 44" />
      <path d="M17 21 L 35 20" />
      <path d="M17 27 L 28 27" />
    </Doodle>
  );
}

// A rough wireframe of two screens.
export function SketchScreens({ className = "" }: SketchProps) {
  return (
    <Doodle className={className}>
      <path d="M8 10 C 15 9, 23 9, 29 10 C 30 24, 30 40, 29 54 C 22 55, 15 55, 9 54 C 7 40, 7 24, 8 10 Z" />
      <path d="M12 17 L 25 17 L 25 29 L 12 29 Z" />
      <path d="M12 36 L 25 35" />
      <path d="M12 42 L 21 42" />
      <path d="M36 10 C 43 9, 50 9, 57 10 C 58 24, 58 40, 57 54 C 50 55, 43 55, 37 54 C 35 40, 35 24, 36 10 Z" />
      <path d="M40 18 L 53 18" />
      <path d="M40 25 L 53 25" />
      <path d="M40 32 L 49 32" />
      <path d="M41 46 C 45 44, 50 44, 53 46" />
    </Doodle>
  );
}

// A phone with a tick on the screen.
export function SketchPhone({ className = "" }: SketchProps) {
  return (
    <Doodle className={className}>
      <path d="M19 6 C 27 5, 37 5, 45 6 C 48 7, 48 9, 48 12 C 49 26, 49 40, 48 53 C 47 57, 46 58, 43 58 C 35 59, 27 59, 20 58 C 17 58, 16 56, 16 53 C 15 39, 15 25, 16 11 C 16 8, 17 7, 19 6 Z" />
      <path d="M27 11 L 37 11" />
      <path d="M24 33 L 30 40 L 41 25" />
      <path d="M28 52 L 36 52" />
    </Doodle>
  );
}

// A paper plane leaving, with its trail behind it.
export function SketchStore({ className = "" }: SketchProps) {
  return (
    <Doodle className={className}>
      <path d="M57 8 L 9 27 L 25 35 L 34 52 Z" />
      <path d="M57 8 L 25 35" />
      <path d="M6 44 C 10 42, 13 42, 16 44" />
      <path d="M8 55 C 13 52, 18 52, 23 56" />
    </Doodle>
  );
}

// Hand-drawn brackets on two opposite corners of a positioned parent.
export function SketchCorners({ className = "" }: SketchProps) {
  const corner = "M3 44 C 2 28, 3 14, 6 6 C 16 3, 30 2, 46 3";
  return (
    <span aria-hidden="true" className={`pointer-events-none absolute inset-0 ${className}`}>
      <svg viewBox="0 0 48 48" fill="none" className="absolute -left-1 -top-1 h-14 w-14">
        <path d={corner} stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
      <svg viewBox="0 0 48 48" fill="none" className="absolute -bottom-1 -right-1 h-14 w-14 rotate-180">
        <path d={corner} stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    </span>
  );
}

// Two loose loops that overlap at their ends, like a circle drawn by hand.
export function SketchCircle({ className = "", weight = 1 }: SketchProps & { weight?: number }) {
  return (
    <svg viewBox="0 0 400 400" aria-hidden="true" fill="none" strokeLinecap="round" className={className}>
      <path
        d="M214 12 C 318 14, 392 96, 388 204 C 384 312, 298 392, 192 388 C 86 384, 8 300, 14 192 C 20 88, 104 8, 232 20"
        stroke="#3B82F6"
        strokeWidth={3.5 * weight}
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M120 46 C 218 -6, 340 34, 374 138 C 408 246, 346 358, 236 380 C 122 402, 26 332, 12 226 C -2 130, 50 66, 138 36"
        stroke="#A78BFA"
        strokeWidth={2 * weight}
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
