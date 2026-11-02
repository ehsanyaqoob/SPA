import type { ComponentType } from "react";
import {
  SiAndroidstudio,
  SiApple,
  SiDart,
  SiFastlane,
  SiFigma,
  SiFirebase,
  SiFlutter,
  SiGit,
  SiGithubactions,
  SiGooglemaps,
  SiGoogleplay,
  SiPostman,
  SiSupabase,
  SiSwift,
  SiVisualstudiocode,
  SiXcode,
} from "react-icons/si";
import {
  Activity,
  Bell,
  Boxes,
  Cloud,
  Database,
  FlaskConical,
  Gauge,
  HardDrive,
  LayoutGrid,
  Layers,
  MapPin,
  Palette,
  Plane,
  PlugZap,
  RefreshCw,
  Rocket,
  ScanLine,
  Send,
  Server,
  Share2,
  Sparkles,
  SquareStack,
  Wand2,
  WifiOff,
  Workflow,
  Wrench,
  Zap,
} from "lucide-react";
import { platformSkills, sections, sharedSkills, sharedSkillsTitle } from "@/site.config";
import SectionHeading from "@/components/SectionHeading";
import { SketchCircle, SketchCorners, SketchDouble, SketchMarker, SketchOval, SketchSwash, SketchWave } from "@/components/Sketch";

type Icon = ComponentType<{ className?: string; style?: React.CSSProperties }>;

const skillIcons: Record<string, { Icon: Icon; color?: string }> = {
  // iOS
  Swift: { Icon: SiSwift, color: "#F05138" },
  SwiftUI: { Icon: SiSwift, color: "#4F8CFF" },
  UIKit: { Icon: LayoutGrid },
  SwiftData: { Icon: Database },
  "Core Data": { Icon: HardDrive },
  "Swift Concurrency": { Icon: Zap },
  Combine: { Icon: Share2 },
  WidgetKit: { Icon: SquareStack },
  "Live Activities": { Icon: Activity },
  "App Intents": { Icon: Sparkles },
  "Core Location": { Icon: MapPin },
  Notifications: { Icon: Bell },
  XCTest: { Icon: FlaskConical },
  Instruments: { Icon: Gauge },
  // Flutter
  Dart: { Icon: SiDart, color: "#29B6F6" },
  Flutter: { Icon: SiFlutter, color: "#54C5F8" },
  "Custom widgets": { Icon: Palette },
  Animations: { Icon: Wand2 },
  Riverpod: { Icon: Workflow },
  Bloc: { Icon: Boxes },
  GetX: { Icon: Zap },
  Provider: { Icon: Share2 },
  Hive: { Icon: Database },
  "Platform channels": { Icon: PlugZap },
  "ML Kit": { Icon: ScanLine },
  "Google Maps": { Icon: SiGooglemaps, color: "#EA4335" },
  "Unit tests": { Icon: FlaskConical },
  "Widget tests": { Icon: FlaskConical },
  // Shared
  "Clean Architecture": { Icon: Layers },
  MVVM: { Icon: Boxes },
  "Offline-first sync": { Icon: WifiOff },
  "Design systems": { Icon: Palette },
  Supabase: { Icon: SiSupabase, color: "#3ECF8E" },
  Firebase: { Icon: SiFirebase, color: "#FFCA28" },
  "Cloud Messaging": { Icon: Send },
  "REST APIs": { Icon: Server },
  Fastlane: { Icon: SiFastlane, color: "#4CD964" },
  "GitHub Actions": { Icon: SiGithubactions, color: "#5AA9FF" },
  Shorebird: { Icon: RefreshCw },
  "App Store Connect": { Icon: SiApple, color: "#FFFFFF" },
  TestFlight: { Icon: Plane },
  "Play Console": { Icon: SiGoogleplay, color: "#34A853" },
  Xcode: { Icon: SiXcode, color: "#4F8CFF" },
  "Android Studio": { Icon: SiAndroidstudio, color: "#3DDC84" },
  "VS Code": { Icon: SiVisualstudiocode, color: "#3BA7F5" },
  Git: { Icon: SiGit, color: "#F05032" },
  Figma: { Icon: SiFigma, color: "#F24E1E" },
  Postman: { Icon: SiPostman, color: "#FF6C37" },
};

const platformStyles = [
  { Logo: SiSwift, logoColor: "#F05138", lineColor: "text-orange-400", Line: SketchWave, lineSize: "-bottom-3 h-2.5" },
  { Logo: SiFlutter, logoColor: "#54C5F8", lineColor: "text-sky-400", Line: SketchSwash, lineSize: "-bottom-4 h-4" },
];

const sharedIcons: Record<string, React.ReactNode> = {
  Architecture: <Layers className="h-5 w-5" />,
  Backend: <Cloud className="h-5 w-5" />,
  "Release & CI/CD": <Rocket className="h-5 w-5" />,
  Tools: <Wrench className="h-5 w-5" />,
};

function Skill({ name }: { name: string }) {
  const { Icon, color } = skillIcons[name];
  return (
    <li className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm font-medium text-gray-200">
      <Icon className={`h-4 w-4 shrink-0 ${color ? "" : "text-gray-400"}`} style={color ? { color } : undefined} />
      {name}
    </li>
  );
}

export default function Skills() {
  return (
    <section id={sections.skills.id} className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
      <SectionHeading title={sections.skills.title} subtitle={sections.skills.subtitle}>
        <SketchOval className="-inset-x-6 -inset-y-3 h-[calc(100%+1.5rem)] w-[calc(100%+3rem)]" />
      </SectionHeading>

      {/* The two disciplines */}
      <div className="mt-10 grid gap-6 md:mt-14 lg:grid-cols-2">
        {platformSkills.map(({ title, rows }, index) => {
          const { Logo, logoColor, lineColor, Line, lineSize } = platformStyles[index];
          return (
            <article key={title} className={`relative rounded-3xl bg-black/60 p-6 backdrop-blur-sm md:p-9 ${lineColor}`}>
              <SketchCorners />
              <div className="flex items-center gap-5">
                <div className="relative flex h-16 w-16 shrink-0 items-center justify-center">
                  <Logo className="h-8 w-8" style={{ color: logoColor }} />
                  <SketchCircle weight={0.5} className="absolute inset-0 h-full w-full" />
                </div>
                <h3 className="relative font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                  {title}
                  <span className={lineColor}>
                    <Line className={lineSize} />
                  </span>
                </h3>
              </div>

              <dl className="mt-9 space-y-5">
                {rows.map(({ label, items }) => (
                  <div key={label} className="grid gap-2 sm:grid-cols-[5rem_1fr] sm:items-start sm:gap-4">
                    <dt className="text-sm font-semibold text-muted sm:pt-2">{label}</dt>
                    <dd>
                      <ul className="flex flex-wrap gap-2">
                        {items.map((item) => (
                          <Skill key={item} name={item} />
                        ))}
                      </ul>
                    </dd>
                  </div>
                ))}
              </dl>
            </article>
          );
        })}
      </div>

      {/* What both share */}
      <h3 className="relative mt-16 inline-block font-display text-2xl font-semibold tracking-tight md:text-3xl">
        {sharedSkillsTitle}
        <span className="text-blue-500">
          <SketchDouble className="-bottom-3 h-3" />
        </span>
      </h3>
      <div className="mt-9 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {sharedSkills.map(({ title, items }) => (
          <article key={title} className="rounded-3xl border border-white/5 bg-black/60 p-6 backdrop-blur-sm">
            <h4 className="flex items-center gap-3 text-lg font-semibold">
              <span className="text-blue-400">{sharedIcons[title]}</span>
              <span className="relative isolate inline-block">
                {title}
                <span className="text-blue-500">
                  <SketchMarker />
                </span>
              </span>
            </h4>
            <ul className="mt-5 flex flex-wrap gap-2">
              {items.map((item) => (
                <Skill key={item} name={item} />
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
