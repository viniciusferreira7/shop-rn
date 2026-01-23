import { Image, View } from "react-native";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { styles } from "./styles";

export function Home() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("@/assets/logo.png")} />
      <Input placeholder="What you need to buy?" />
      <Button title="Add to car" />
    </View>
  );
}
