import { useState, useEffect } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
} from 'react-native';

import { Button } from '../../components/Button';
import { SkillCard } from '../../components/SkillCard';

export const Home = () => {
  const [newSkill, setNewSkill]  = useState('');
  const [mySkill, setMySkill] = useState([]);
  const [greeting, setGreeting] = useState('');

  const handleAddNewSkill = () => {
    setMySkill([...mySkill, newSkill]);
  }

  useEffect(() => {
    const dateTime = new Date().getHours();

    if(dateTime < 12) {
      setGreeting('Good morning, Gabriel!');
    } else if (dateTime > 12 && dateTime < 18) {
      setGreeting('Good afternoon, Gabriel!');
    } else {
      setGreeting('Good night, Gabriel!');
    }
  }, [])

  return (
    <View style={styles.container}>
      <Text
        style={[styles.title, {marginBottom: 15}]}
      >{greeting}</Text>

      <TextInput
        style={styles.textInput}
        placeholderTextColor="#EDF2F7"
        placeholder='Digite a sua skill'
        onChangeText={setNewSkill}
      />

      <Button
        onPress={handleAddNewSkill}
      />

      <Text style={[styles.title, {marginTop: 15, marginBottom: 15}]}>Skills:</Text>
      {/*
      <FlatList
        data={mySkill}
        keyExtractor={(item) => item}
        renderItem={({item}) => (
          <SkillCard
            skill={item} />
        )}
      /> */}

      <ScrollView>
        {
          mySkill.map((skill, key) => {
            return(
              <SkillCard
              key={key}
              skill={skill}
              />
            )
          })
        }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171923',
    paddingHorizontal: 30,
    paddingVertical: 20,
  },

  title: {
    color: '#EDF2F7',
    fontSize: 24,
    fontWeight: 'bold',
  },

  textInput: {
    fontWeight: 'bold',
    fontSize: 18,
    padding: 15,
    borderRadius: 7,
    backgroundColor: '#1A202C',
    color: '#EDF2F7'
  },
});
