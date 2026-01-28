import { Trash } from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";
import type { FilterStatus } from "@/types/filter-status";
import { StatusIcon } from "../status-icon";
import { styles } from "./styles";

interface ItemData {
  id: string;
  status: FilterStatus;
  description: string;
}

interface ItemProps {
  data: ItemData;
  onRemove: () => void;
  onStatus: () => void;
}

export function Item({ data, onRemove, onStatus }: ItemProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.8} onPress={onStatus}>
        <StatusIcon status={data.status} />
      </TouchableOpacity>
      <Text style={styles.description}>{data.description}</Text>
      <TouchableOpacity onPress={onRemove}>
        <Trash size={18} color="#828282" />
      </TouchableOpacity>
    </View>
  );
}
