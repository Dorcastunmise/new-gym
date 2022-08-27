import React from 'react';
import { Box, Stack, TextField, Typography } from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from '../components/HorizontalScrollbar';

function SearchExercises({setExercises, bodyPart, setBodyPart}) {
  const [search, setSearch] = React.useState('')
  const [bodyParts, setBodyParts] = React.useState([])

React.useEffect(() => {
  const fetchExercisesData = async () => {
    const bodyPartsData = await fetchData
    ('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

    setBodyParts(['all', ...bodyPartsData]);
  }
  fetchExercisesData();
}, [])

  const handleSearch = async () => {
    if(search) {
      const exerciseData = await fetchData
      ('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

      const searchedExercise = exerciseData.filter(
        (item) => item.name.toLowerCase().includes(search)
        || item.target.toLowerCase().includes(search)
        || item.equipment.toLowerCase().includes(search)
        || item.bodyPart.toLowerCase().includes(search)
      );

      setSearch(' ');
      setExercises(searchedExercise);
    }
  }

  return (
    <Stack 
    alignItems='center'
    justifyContent='center' 
    mt='37px'
    p='20px'
    >
      <Typography
      fontWeight={700}
      mb='50px'
      textAlign='center'
      sx={{
        fontSize: { lg: '44px', xs: '30px'}
      }}
      >
        Awesome exercise YOU should try
      </Typography>
      <Box position='relative' mb='72px'>
        <TextField
        value={search}
        placeholder="Search please..."
        type="text"
        className='middle'
        onChange={(e) => 
          setSearch(e.target.value.toLowerCase())
        }
        />
        <button className='through'
        onClick={handleSearch}>
          Search
        </button>
      </Box>
      <Box
      sx={{ position: 'relative', 
      width: '100%', 
      p: '20px'}}
      >
        <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
      </Box>
    </Stack>
  )
}

export default SearchExercises;