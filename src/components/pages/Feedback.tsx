import React from 'react';
import Slider from 'react-slick';
import { Box, Typography, Avatar } from '@mui/material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const feedbacks = [
  {
    img: '/images/feedback1.jpeg',
    text: "As an actor, I've always believed in the power of storytelling, and Jackinfosoft LLP embodies that belief through technology. Their innovative solutions have transformed the way I connect with my audience. The team's dedication and creativity have made my projects seamless and more impactful. Whether it's through cutting-edge software or personalized service",
    name: "Vikram Thakor",
    title: "Gujarati Superstar"
  },
  {
    img: '/images/feedback2.jpeg',
    text: "Working with Jackinfosoft LLP has been a remarkable experience. As a producer, I understand the importance of technology in bringing creative visions to life, and Jackinfosoft has exceeded my expectations. Their innovative solutions and commitment to excellence have streamlined our processes, allowing us to focus on storytelling. The team is good",
    name: "Harsukh Patel",
    title: "Gujarati Producer"
  },
  {
    img: "/images/feedback3.jpeg",
    text: "We've been working with Jack Info Soft LLP for over 2 years and they've been amazing to work with. They've helped us grow our business and we couldn't be happier with the results. I highly recommend Jackinfosoft LLP to anyone in the industry looking to enhance their projects with top-notch technology. Thank you for being an invaluable partner in my filmmaking journey",
    name: "Sohil Rathore",
    title: "CEO, JOY TV PVT.LTD"
  }
];

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 8000,
  autoplay: true,
  autoplaySpeed: 0,
  slidesToShow: 3,
  slidesToScroll: 1,
  cssEase: 'linear',
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
};

   function Feedback ()  {
  return (
    <Box sx={{ width: '100%', py: 5, backgroundColor: '#f7f7f7' }}>
      <Slider {...sliderSettings}>
        {feedbacks.map((feedback, index) => (
          <Box key={index} sx={{ px: 2 }}>
            <Box
              sx={{
                p: 4,
                bgcolor: 'white',
                borderRadius: 2,
                boxShadow: 3,
                textAlign: 'center',
                height: '100%',
              }}
            >
              <Avatar
                src={feedback.img}
                alt={feedback.name}
                sx={{ width: 80, height: 80, margin: '0 auto', mb: 2 }}
              />
              <Typography variant="h6" gutterBottom>
                {feedback.name}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {feedback.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mt: 2,
                  color: 'textPrimary',
                  fontStyle: 'italic',
                }}
              >
                "{feedback.text}"
              </Typography>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Feedback;
