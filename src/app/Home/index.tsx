import { useState } from "react";
import { Alert, FlatList, Image, Text, TouchableOpacity, View } from "react-native";
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

export function Home() {
  const [activeFilter, setActiveFilter] = useState<FilterStatus | null>(null);
  const [items, setItems] = useState<ItemData[]>([]);
  const [currentText, setCurrentText] = useState("");

  function handleAddItem() {
    if (currentText.trim().length === 0) {
      Alert.alert("Add", "You must fill the input to add new item");
    }

    setItems((state) => {
      if (currentText.trim().length > 0) {
        const dateTime = Date.now();

        state.push({
          id: dateTime.toString(),
          status: "pending",
          description: currentText,
        });
      }

      console.log(state);

      return state.sort((a, b) => new Date(b.id).getTime() - new Date(a.id).getTime());
    });

    setCurrentText("");
  }

  function handleChangeStatus(data: ItemData) {
    setItems((state) =>
      state.map((item) =>
        item.id === data.id
          ? { ...item, status: item.status === "done" ? "pending" : "done" }
          : item
      )
    );
  }

  function handleRemoveItem(data: ItemData) {
    setItems((state) => state.filter((item) => item.id !== data.id));
  }

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("@/assets/logo.png")} />
      <View style={styles.form}>
        <Input
          placeholder="What you need to buy?"
          value={currentText}
          onChangeText={(value) => setCurrentText(value)}
        />
        <Button title="Add to car" onPress={handleAddItem} />
      </View>

      <View style={styles.content}>
        <View style={styles.header}>
          {FILTER_STATUS.map((filterStatus) => (
            <Filter
              key={filterStatus}
              status={filterStatus}
              isActive={activeFilter === filterStatus}
              onPress={() => setActiveFilter(filterStatus)}
            />
          ))}
          <TouchableOpacity style={styles.clearButton} onPress={() => setActiveFilter(null)}>
            <Text style={styles.clearText}>Clear</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={items.filter((item) => item.status === activeFilter || !activeFilter)}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Item
              data={item}
              onStatus={() => handleChangeStatus(item)}
              onRemove={() => handleRemoveItem(item)}
            />
          )}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={() => <Text style={styles.empty}>No items yet</Text>}
        />
      </View>
    </View>
  );
}
