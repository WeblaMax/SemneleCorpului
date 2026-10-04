import {
  Activity, FlaskConical, TestTube, ClipboardCheck, BatteryLow, Bone, HeartPulse, Moon, Brain, Wind,
  Apple, Droplets, ShieldCheck, Sparkles, Smile, ListChecks, CalendarCheck, Stethoscope, FileHeart, Circle,
} from 'lucide-react'

// Adaugă aici iconițele noi pe care vrei să le folosești în products.js / systems.js
const ICONS = {
  Activity, FlaskConical, TestTube, ClipboardCheck, BatteryLow, Bone, HeartPulse, Moon, Brain, Wind,
  Apple, Droplets, ShieldCheck, Sparkles, Smile, ListChecks, CalendarCheck, Stethoscope, FileHeart,
}

export default function Icon({ name, ...props }) {
  const C = ICONS[name] || Circle
  return <C aria-hidden="true" {...props} />
}
