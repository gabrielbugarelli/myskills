import { useState, useMemo } from 'react';

import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  ScrollView
} from 'react-native';

import { Button } from '../../components/Button';
import { SkillCard } from '../../components/SkillCard';

export const Home = () => {
  const [newSkill, setNewSkill]  = useState('');
  const [mySkill, setMySkill] = useState([]);

  const handleAddNewSkill = () => {
    setMySkill([...mySkill, newSkill]);
  }

  useMemo(() => {
    console.log();
  }, [])

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Text
        style={[styles.title, {marginBottom: 15}]}
      >Seja bem vindo, Gabriel!</Text>

      <TextInput
        style={styles.textInput}
        placeholderTextColor="#EDF2F7"
        placeholder='Digite o seu nome'
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
    paddingVertical: 100,
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
