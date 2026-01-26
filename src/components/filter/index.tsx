import { Text, TouchableOpacity, type TouchableOpacityProps } from "react-native";
import type { FilterStatus } from "@/types/filter-status";
import { StatusIcon } from "../status-icon";
import { styles } from "./styles";

interface FilterProps extends TouchableOpacityProps {
  status: FilterStatus;
  isActive: boolean;
}

export function Filter({ status, isActive, ...props }: FilterProps) {
  return (
    <TouchableOpacity style={[styles.container, { opacity: isActive ? 1 : 0.5 }]} {...props}>
      <StatusIcon status={status} />
      <Text style={styles.title}>{status === "done" ? "Bought" : "Pending"}</Text>
    </TouchableOpacity>
  );
}
