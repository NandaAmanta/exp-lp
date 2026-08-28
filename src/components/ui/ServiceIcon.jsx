import {
  Layers,
  MonitorSmartphone,
  Layout,
  BarChart2,
  Code2,
  ShoppingCart,
  Dumbbell,
  Receipt,
  Smartphone,
  Globe,
  TrendingUp,
  Sparkles,
  Cpu,
  Zap,
  Database,
  Server,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

const ICON_MAP = {
  Layers,
  MonitorSmartphone,
  Layout,
  BarChart2,
  Code2,
  ShoppingCart,
  Dumbbell,
  Receipt,
  Smartphone,
  Globe,
  TrendingUp,
  Sparkles,
  Cpu,
  Zap,
  Database,
  Server,
  ShieldCheck,
  CheckCircle2,
};

export default function ServiceIcon({ name, size = 24, className = "", style = {} }) {
  const Component = ICON_MAP[name] || Layers;
  return <Component size={size} className={className} style={style} />;
}
