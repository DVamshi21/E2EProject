import React, { useState } from "react";
import { Button, ButtonGroup } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { FaSearch } from 'react-icons/fa';
import { FaPerson } from 'react-icons/fa6';


const CustomButtonGroup = ({ onClickButton1, onClickButton2 }) => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleClick = (buttonId) => {
      setSelectedButton(buttonId);
      if (buttonId === 1) onClickButton1();
      else if (buttonId === 2) onClickButton2();
  };

  return (
      <ButtonGroup
          sx={{
        borderTop: '1px solid black',
        borderBottom: '1px solid black',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        position: 'absolute',
        top: 65,
        left: '70px',
      }}
      >
          <Button
              onClick={() => handleClick(1)}
              sx={{
                  backgroundColor: selectedButton === 1 ? 'blue' : 'white',
                  color: selectedButton === 1 ? 'white' : 'black',
              }}
              startIcon = <FaSearch/>
          >
              Search
          </Button>
          <Button
              onClick={() => handleClick(2)}
              sx={{
                  backgroundColor: selectedButton === 2 ? 'blue' : 'white',
                  color: selectedButton === 2 ? 'white' : 'black',
              }}
              startIcon = <FaPerson/>
              
          >
              Enrollment
          </Button>
      </ButtonGroup>
  );
};




  export default CustomButtonGroup;



  // const useStyles = makeStyles((theme) => ({
//   buttonGroup: {
//     position: 'absolute',
//     top: 65,
//     left: '70px',
//     right:0,
//     borderTop: '1px thin black',
//     borderBottom: '1px thin black',
//     mt: 10,
//     mb:2,
//     borderSpacing: 10
//   },
//   button: {
//     padding: '8px',
//     margin: 0.5,
//     borderColor: '1px solid black',
//     borderSpacing: 10,
//     border: '1px solid black',
//     '&.active': {
//       backgroundColor: 'blue',
//       color: 'white',
//     },
//   },
// }));

// const CustomButtonGroup = ({ buttons,onButtonClick}) => {
//   const classes = useStyles();
//   const [activeIndex, setActiveIndex] = useState(null);

  

//   return (
//     <ButtonGroup className={classes.buttonGroup}>
//       {buttons.map((button, index) => (
//         <Button
//           variant="outlined"
//           aria-label="Basic button group"
//           key={index}
//           className={`${classes.button} ${activeIndex === index ? "active" : ""}`}
//           onClick={() => onButtonClick(button.id)}
         
//           startIcon={button.icon}
//           style={{
//             backgroundColor: activeIndex === index ? 'blue' : 'white',
//             color: activeIndex === index ? 'white' : 'black',
//           }}
//         >
//           {button.name}
//         </Button>
//       ))}
//     </ButtonGroup>
//   );
// };

// export default CustomButtonGroup;




