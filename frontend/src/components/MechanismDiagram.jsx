import { Reveal } from "./Reveal";
import { DIAGRAM } from "../data/site";

export const MechanismDiagram = () => (
    <Reveal className="w-full">
        <div
            data-testid="mechanism-diagram"
            className="glass-panel led-edge relative overflow-hidden rounded-2xl p-4 sm:p-8"
        >
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-sky-500/10 blur-3xl" />
            <p className="mb-4 font-mono-tech text-[10px] uppercase tracking-[0.3em] text-sky-400/80">
                {DIAGRAM.fig}
            </p>
            <svg viewBox="0 0 600 340" className="w-full" role="img" aria-label={DIAGRAM.aria}>
                <defs>
                    <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#00A3FF" stopOpacity="0.9" />
                        <stop offset="60%" stopColor="#00A3FF" stopOpacity="0.15" />
                        <stop offset="100%" stopColor="#00A3FF" stopOpacity="0" />
                    </radialGradient>
                </defs>
                {DIAGRAM.nodes.map((n) => (
                    <line
                        key={n.id}
                        x1="250"
                        y1="170"
                        x2={n.x}
                        y2={n.y}
                        stroke="#38BDF8"
                        strokeOpacity="0.55"
                        strokeWidth="1.5"
                        className="dash-flow"
                    />
                ))}
                <circle cx="250" cy="170" r="95" fill="url(#coreGlow)" />
                <circle cx="250" cy="170" r="46" fill="#05050C" stroke="#00A3FF" strokeWidth="2" />
                <circle cx="250" cy="170" r="56" fill="none" stroke="#38BDF8" strokeOpacity="0.25" strokeWidth="1" />
                <circle cx="250" cy="170" r="5" fill="#D4AF37" />
                <text x="250" y="150" textAnchor="middle" fill="#38BDF8" fontSize="10" fontFamily="JetBrains Mono" letterSpacing="1.5">
                    {DIAGRAM.centerTop}
                </text>
                <text x="250" y="196" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="700" fontFamily="Unbounded">
                    {DIAGRAM.centerName}
                </text>
                <text x="250" y="212" textAnchor="middle" fill="#9CA3AF" fontSize="8" fontFamily="JetBrains Mono" letterSpacing="1.5">
                    {DIAGRAM.centerSub}
                </text>
                {DIAGRAM.nodes.map((n) => (
                    <g key={n.id}>
                        <circle cx={n.x} cy={n.y} r="34" fill="#05050C" stroke="#38BDF8" strokeWidth="1.5" strokeOpacity="0.8" />
                        <circle cx={n.x} cy={n.y} r="42" fill="none" stroke="#38BDF8" strokeOpacity="0.2" strokeWidth="1" />
                        <text x={n.x} y={n.y + 4} textAnchor="middle" fill="#FFFFFF" fontSize={n.label.length > 5 ? 9 : 12} fontWeight="700" fontFamily="JetBrains Mono">
                            {n.label}
                        </text>
                        <text x={n.x} y={n.y + 62} textAnchor="middle" fill="#9CA3AF" fontSize="9" fontFamily="Manrope">
                            {n.desc}
                        </text>
                    </g>
                ))}
            </svg>
        </div>
    </Reveal>
);
