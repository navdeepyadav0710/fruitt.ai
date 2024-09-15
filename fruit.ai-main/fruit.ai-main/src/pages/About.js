
import React from 'react';
import { Container, Typography, Paper, Grid } from '@mui/material';
import './About.css'; 

const AboutPage = () => (
  <Container className="container">
    <Paper elevation={3} className="paper">
      <Typography variant="h2" className="header">
        About Fruit.ai
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h5" className="sectionTitle">
            What is Fruit.ai?
          </Typography>
          <Typography className="sectionContent">
            Fruit.ai is a comprehensive health management platform designed to help you make
            informed decisions about your nutrition and wellness. By leveraging advanced
            technology and user-friendly interfaces, Fruit.ai provides personalized recommendations
            and insights to help you achieve your health goals.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h5" className="sectionTitle">
            Our Mission
          </Typography>
          <Typography className="sectionContent">
            Our mission is to empower individuals with the knowledge and tools they need to
            lead healthier lives. We are committed to providing accurate, reliable, and
            actionable information about fruits and nutrition to help you make better choices
            for your well-being.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" className="sectionTitle">
            Meet the Team
          </Typography>
          <Typography className="sectionContent">
            Our team consists of dedicated professionals with expertise in health, nutrition,
            and technology. We work tirelessly to ensure that Fruit.ai meets the highest
            standards of quality and user satisfaction. Learn more about our team members below:
          </Typography>
          <ul className="teamList">
            <li><strong>Aarush Khanna</strong> Lead Developer</li>
          
          </ul>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" className="sectionTitle">
            Contact Us
          </Typography>
          <Typography className="sectionContent">
            If you have any questions, feedback, or suggestions, feel free to reach out to us:
          </Typography>
          <div className="contactInfo">
            <strong>Email:</strong> support@fruit.ai
            <br />
            <strong>Phone:</strong> (123) 456-7890
          </div>
        </Grid>
      </Grid>
    </Paper>
  </Container>
);

export default AboutPage;
