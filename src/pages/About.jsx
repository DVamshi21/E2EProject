import React, {useState} from 'react'
import CustomButtonGroup from '../common/CustomButtonGroup'

import CustomAccordian from '../common/CustomAccordian';




const About = ()=> {
  
  const [currentAccordion, setCurrentAccordion] = useState(null);
  const [submittedData, setSubmittedData] = useState(null);
  const [newButtonGroupVisible, setNewButtonGroupVisible] = useState(false);

  const handleButton1Click = () => {
      setCurrentAccordion(1);
  };

  const handleButton2Click = () => {
      setCurrentAccordion(2);
  };

  const handleSubmit = (data) => {
      setSubmittedData(data);
      setNewButtonGroupVisible(true); // Show new button group on submit
      alert('Data submitted successfully!');
  };

  const handleCancel = () => {
      setCurrentAccordion(null); // Close the accordion on cancel
  };

  return (
      <div style={{ padding: '20px' }}>
          <CustomButtonGroup onClickButton1={handleButton1Click} onClickButton2={handleButton2Click} />
          
          {currentAccordion === 1 && (
              <CustomAccordian
                  title="Enrollment Search Criteria"
                  fields={['Field 1', 'Field 2', 'Field 3', 'Field 4', 'Field 5', 'Field 6', 'Field 7', 'Field 8', 'Field 9', 'Field 10']}
                  
              />
          )}

          {currentAccordion === 2 && (
              <CustomAccordian
                  title="New Enrollment"
                  fields={['Field A', 'Field B', 'Field C', 'Field D', 'Field E', 'Field F', 'Field G', 'Field H', 'Field I', 'Field J']}
                  
              />
          )}

          {newButtonGroupVisible && (
              <CustomButtonGroup onClickButton1={() => alert('New Button 1 clicked')} onClickButton2={() => alert('New Button 2 clicked')} />
          )}
      </div>
  );
};

export default About;
