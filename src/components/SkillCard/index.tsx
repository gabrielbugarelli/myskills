import { Text, StyleSheet, TouchableOpacity, TouchableOpacityProps } from "react-native";

interface SkillCardProps extends TouchableOpacityProps {
  skill: string;
}

export const SkillCard = ({ skill, ...rest }: SkillCardProps) => {
  return (
    <TouchableOpacity
      style={styles.skillContainer}
      {...rest}
    >
      <Text style={styles.skillText}>
        {skill}
      </Text>
    </TouchableOpacity>
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
