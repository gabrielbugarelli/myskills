import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export const Button = ({title, onPress }: ButtonProps) => {
  return (
    <TouchableOpacity
      style={styles.buttonAdd}
      onPress={onPress}
    >
      <Text style={styles.textButton}> {title} </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonAdd: {
    backgroundColor: '#805AD5',
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 25,
  },

  textButton: {
    color: "#EDF2F7",
    padding: 15,
    fontSize: 18,
    fontWeight: 'bold'
  }
})
