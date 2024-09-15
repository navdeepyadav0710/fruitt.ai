import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Paper, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import './Translator.css';

const Translator = () => {
  const [text, setText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [targetLanguage, setTargetLanguage] = useState('es');

  const handleTranslate = async () => {
    try {
      const response = await fetch('', {
        method: '',
        headers: {
          'Content-Type': '',
          'Authorization': `` 
        },
        body: JSON.stringify({
          q: text,
          target: targetLanguage
        })
      });

      const data = await response.json();
      if (data && data.data && data.data.translations) {
        setTranslatedText(data.data.translations[0].translatedText);
      } else {
        console.error('Unexpected API response format:', data);
      }
    } catch (error) {
      console.error('Error translating text:', error);
    }
  };

  return (
    <Container className="container">
      <Paper elevation={3} className="paper">
        <Typography variant="h4" className="header">
          Translator
        </Typography>
        <TextField
          label="Enter text"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="textField"
        />
        <FormControl fullWidth variant="outlined" className="languageSelect">
          <InputLabel>Target Language</InputLabel>
          <Select
            value={targetLanguage}
            onChange={(e) => setTargetLanguage(e.target.value)}
            label="Target Language"
          >
            <MenuItem value="es">Spanish</MenuItem>
            <MenuItem value="fr">French</MenuItem>
            <MenuItem value="de">German</MenuItem>
            <MenuItem value="zh">Chinese</MenuItem>
          </Select>
        </FormControl>
        <Button
          variant="contained"
          color="primary"
          onClick={handleTranslate}
          className="translateButton"
        >
          Translate
        </Button>
        {translatedText && (
          <Typography variant="h6" className="translatedText">
            {translatedText}
          </Typography>
        )}
      </Paper>
    </Container>
  );
};

export default Translator;
