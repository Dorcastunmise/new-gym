import React from 'react';
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';

function Home() {
  const [ bodyPart, setBodyPart ] = React.useState('all');
  const [ exercises, setExercises ] = React.useState([]);
  return (
    <div>
      <HeroBanner />
      <SearchExercises 
      setExercises={setExercises}
      setBodyPart={setBodyPart}
      bodyPart={bodyPart}
      />
      <Exercises
      setExercises={setExercises}
      exercises={exercises}
      bodyPart={bodyPart}
      />
    </div>
  )
}

export default Home;