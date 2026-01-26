import { CircleCheck, CircleDashed } from "lucide-react-native";
import type { FilterStatus } from "@/types/filter-status";

interface StatusProps {
  status: FilterStatus;
}

export function StatusIcon({ status }: StatusProps) {
  return <>{status === "pending" ? <CircleDashed size={18} /> : <CircleCheck size={18} />}</>;
}
