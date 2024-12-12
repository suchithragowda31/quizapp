import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { RadioButton } from 'react-native-paper';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient'; 

export default function Question1() {
  const router = useRouter();
  const [checked, setChecked] = useState('Red'); 

  
  const handleNext = () => {
    router.push('/question2');  
  };

  return (
    <LinearGradient
      colors={['#511777', '#D1C0DC']} 
      style={styles.gradientContainer} 
    >
      <View style={styles.container}>
        
        
        <TouchableOpacity onPress={() => router.back()} style={styles.arrowIconContainer}>
          <EvilIcons name="arrow-left" size={20} color="white" />
        </TouchableOpacity>

        <Text style={styles.questionText}>Question 1: What color is your favorite color?</Text>

        <View style={styles.optionsContainer}>
          {['Red', 'Blue', 'Green', 'Yellow'].map((option) => (
            <TouchableOpacity key={option} style={styles.option} onPress={() => setChecked(option)}>
              <RadioButton value={option} status={checked === option ? 'checked' : 'unchecked'} onPress={() => setChecked(option)} color="#9C27B0" />
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity onPress={() => router.push('/question2')}>
          <LinearGradient
            colors={['#411C59', '#7B28B1']} 
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
            style={styles.gradientButton} 
          >
            <Text style={styles.nextButtonText}>Next</Text>
          </LinearGradient>
        </TouchableOpacity>

        <View style={styles.darkLine}></View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradientContainer: { 
    flex: 1 
  },
  container: { 
    flex: 1, 
    padding: 20,
    justifyContent: 'center' 
  },
  arrowIconContainer: { 
    position: 'absolute',
    top: 20, 
    left: 10 
  },
  questionText: { 
    fontSize: 20, 
    fontWeight: 'bold', 
    marginBottom: 30, 
    textAlign: 'center', 
    color: '#FFFFFF', 
    fontFamily:'"CharmanSerif"',
  },
  optionsContainer: {
    marginBottom: 30,
    fontFamily:"NotoSans"
  },
  option: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: '#FFFFFF', 
    marginBottom: 10, 
    borderRadius: 8,
    padding: 10 
  },
  optionText: { 
    fontSize: 16, 
    color: '#000', 
    marginLeft: 10 
  },
  gradientButton: { 
    borderRadius: 8, 
    paddingVertical: 15, 
    paddingHorizontal: 20, 
    alignItems: 'center' 
  },
  nextButtonText: { 
    color: '#FFFFFF', 
    fontSize: 18, 
    fontWeight: 'bold' 
  },
  darkLine: { 
    width: '50%', 
    height: 2, 
    backgroundColor: '#000000', 
    alignSelf: 'center', 
    marginTop: 20 
  },
});
