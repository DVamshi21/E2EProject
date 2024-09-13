import React, { useState } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  Button,
  Box,
  Grid,
  Typography,
} from '@mui/material';
import { MdExpandMore } from 'react-icons/md';

// const CustomAccordian = () => {
//   const [expanded, setExpanded] = useState(false);
//   const [textValues, setTextValues] = useState(Array(10).fill(''));
  
  

//   const handleAccordionChange = () => {
//     setExpanded(!expanded);
//   };

//   const handleTextChange = (index, event) => {
//     const updatedValues = [...textValues];
//     updatedValues[index] = event.target.value;
//     setTextValues(updatedValues);
//   };

//   const handleClick = () => {
//     console.log('Textbox Values:', textValues);
//   };

//   return (
//     <div>
      
//       <Accordion
//         expanded={expanded}
//         onChange={handleAccordionChange}
//         sx={{
//           top: 90,
//           backgroundColor: 'transparent',
//           color: 'white',
//           '&.MuiAccordion-root:before': {
//             backgroundColor: 'transparent',
//           },
//         }}
//       >
//         <AccordionSummary
//           expandIcon={<MdExpandMore sx={{ color: 'white' }} />}
//           sx={{backgroundColor: 'blue', color: 'white', borderBottom: '1px solid blue'}}
//         >
//           {expanded ? 'Enrollment search{id}' : 'Enrollment Search{id}'}
//         </AccordionSummary>
//         <AccordionDetails>
          
//           <Grid container spacing={2}>
//             {textValues.map((value, index) => (
//               <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
//                 <TextField
//                   value={value}
//                   onChange={(event) => handleTextChange(index, event)}
//                   label={`Text ${index + 1}`}
//                   variant="standard"
                  
//                   sx={{
//                     backgroundColor: 'white',
//                     borderRadius: '4px',
//                   }}
//                 />
//               </Grid>
//             ))}
//           </Grid>

        
//           <Box mt={2} justifyContent={'flex-end'} display='flex'>
//             <Button
//               variant="contained"
//               color="primary"
//               onClick={handleClick}
//               sx={{ backgroundColor: 'white' , color: 'blue',   }}
//             >
//               Submit
//             </Button>
//           </Box>
//         </AccordionDetails>
//       </Accordion>
//     </div>
//   );
// };
const CustomAccordian = ({ title, fields, onSubmit, onCancel }) => {
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <Accordion sx={{
                      top: 75,
                     
                      color: 'white',
                      '&.MuiAccordion-root:before': {
                        
                      },
                    }}>
            <AccordionSummary expandIcon={<MdExpandMore />}
            sx={{backgroundColor: 'blue', color: 'white', borderBottom: '1px solid blue' }}>
                <Typography>{title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Grid container spacing={2}>
                    {fields.map((field, index) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                            <TextField
                                variant="standard"
                                key={index}
                                label={field}
                                name={field}
                                margin="normal"
                                onChange={handleChange}

                                sx={{
                                    backgroundColor: 'white',
                                    borderRadius: '4px',
                                }}
                            />
                        </Grid>
                    ))}
                </Grid>
                {/* <Button variant="contained" color="primary" onClick={() => onSubmit(formData)}>
                    Submit
                </Button>
                <Button variant="outlined" color="secondary" onClick={onCancel}>
                    Cancel
                </Button> */}
                <Box mt={2} justifyContent={'flex-end'} display='flex' spacing= '4px'>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={()=> onSubmit(formData)}
                        sx={{ backgroundColor: 'blue', color: 'white', }}
                    >
                        Submit
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={onCancel}
                        sx={{ backgroundColor: 'white', color: 'blue', }}
                    >
                        Cancel
                    </Button>
                </Box>
            </AccordionDetails>
        </Accordion>
    );
};


 export default CustomAccordian;


