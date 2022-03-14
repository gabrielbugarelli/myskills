import { View, Text, StyleSheet } from "react-native";

type SkillCardProps = {
  skill: string;
}

export const SkillCard = ({ skill }: SkillCardProps) => {
  return (
    <View style={styles.skillContainer}>
      <Text style={styles.skillText}>
        {skill}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  skillContainer: {
    paddingLeft: 40,
    paddingRight: 40
  },
  skillText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    backgroundColor: '#1A202C',
    marginTop: 10,
    padding: 15,
    borderRadius: 20
  }
})
