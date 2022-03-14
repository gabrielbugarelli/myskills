import { useState, useEffect } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
} from 'react-native';

import { Button } from '../../components/Button';
import { SkillCard } from '../../components/SkillCard';

type MySkillType = {
  id: string;
  name: string;
}

export const Home = () => {
  const [newSkill, setNewSkill]  = useState('');
  const [mySkill, setMySkill] = useState<MySkillType[]>([]);
  const [greeting, setGreeting] = useState('');

  const handleAddNewSkill = () => {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill
    }

    if(newSkill.trim() !== '') {
      setMySkill([...mySkill, data]);
      setNewSkill('')
    }
  }

  const handleRemoveSkill = (skillId: string) => {
    setMySkill(oldState => oldState.filter(
      skill => skill.id !== skillId
    ))
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
        placeholder='type your skill'
        value={newSkill}
        onChangeText={value => setNewSkill(value)}
      />

      <Button
        title='Add'
        onPress={handleAddNewSkill}
      />

      <Text style={[styles.title, {marginTop: 15, marginBottom: 15}]}>Skills:</Text>

      <FlatList
        data={mySkill}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <SkillCard
            skill={item.name}
            onPress={() => handleRemoveSkill(item.id)}
          />
        )}
      />
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
    fontSize: 18,
    padding: 15,
    borderRadius: 7,
    backgroundColor: '#1A202C',
    color: '#EDF2F7'
  },
});
