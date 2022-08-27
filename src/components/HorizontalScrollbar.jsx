import React, { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import BodyPart from './BodyPart';
import LeftArrowIcon from '../assets/icons/left-arrow.png';
import RightArrowIcon from '../assets/icons/right-arrow.png'

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon}></img>
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography 
    onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon}></img>
    </Typography>
  );
};
function HorizontalScrollbar({ data, setBodyPart, bodyPart }) {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item) => (
        <Box 
        key={item.id || item}
        itemID={item.id || item}
        title={item.id || item}
        m="0 20px"
        >
          <BodyPart 
          item={item}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}/>
        </Box>
      )
      )}
    </ScrollMenu>
  )
}

export default HorizontalScrollbar