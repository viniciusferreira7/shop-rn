import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { Button } from "@/components/button";
import { Filter } from "@/components/filter";
import { Input } from "@/components/Input";
import { Item } from "@/components/item";
import type { FilterStatus } from "@/types/filter-status";
import { styles } from "./styles";

interface ItemData {
  id: string;
  status: FilterStatus;
  description: string;
}

const FILTER_STATUS: FilterStatus[] = ["pending", "done"];
const mockItems: ItemData[] = [
  {
    id: "1706000000000",
    status: "pending",
    description: "Buy packaging materials",
  },
  {
    id: "1706086400000",
    status: "done",
    description: "Post new products on Instagram",
  },
  {
    id: "1706172800000",
    status: "pending",
    description: "Reply to customer messages",
  },
  {
    id: "1706259200000",
    status: "done",
    description: "Ship today's orders",
  },
  {
    id: "1706345600000",
    status: "pending",
    description: "Update product stock manually",
  },
  {
    id: "1706432000000",
    status: "done",
    description: "Organize invoices and receipts",
  },
  {
    id: "1706518400000",
    status: "pending",
    description: "Prepare weekend promotions",
  },
  {
    id: "1706604800000",
    status: "done",
    description: "Check daily sales balance",
  },
];

export function Home() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("@/assets/logo.png")} />
      <View style={styles.form}>
        <Input placeholder="What you need to buy?" />
        <Button title="Add to car" />
      </View>

      <View style={styles.content}>
        <View style={styles.header}>
          {FILTER_STATUS.map((filterStatus) => (
            <Filter key={filterStatus} status={filterStatus} isActive />
          ))}
          <TouchableOpacity style={styles.clearButton}>
            <Text style={styles.clearText}>Clear</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={mockItems}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Item data={item} onStatus={() => {}} onRemove={() => {}} />}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={() => <Text style={styles.empty}>No item yet</Text>}
        />
      </View>
    </View>
  );
}
