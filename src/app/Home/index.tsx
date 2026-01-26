import { Image, Text, TouchableOpacity, View } from "react-native";
import { Button } from "@/components/button";
import { Filter } from "@/components/filter";
import { Input } from "@/components/Input";
import type { FilterStatus } from "@/types/filter-status";
import { styles } from "./styles";

const FILTER_STATUS: FilterStatus[] = ["pending", "done"];

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
      </View>
    </View>
  );
}
