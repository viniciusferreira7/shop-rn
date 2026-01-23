import { TextInput, type TextInputProps } from "react-native";
import { styles } from "./styles";

type InputProps = TextInputProps;

export function Input(props: InputProps) {
  return <TextInput style={styles.container} {...props} />;
}
