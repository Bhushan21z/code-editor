import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Card, Grid, CardMedia, CardContent, Typography, Chip, Button } from "@mui/material";
import { motion } from "framer-motion";
import challengesData from "../Constants/challenges.json";

export default function ChallengesList() {
  const navigate = useNavigate();
  console.log(challengesData);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #0f0c29, #302b63, #24243e)",
        color: "white",
        py: 6,
        px: { xs: 2, md: 6 },
      }}
    >
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Typography
          variant="h3"
          align="center"
          fontWeight="bold"
          sx={{
            background: "linear-gradient(90deg, #ff8a00, #e52e71)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            mb: 4,
          }}
        >
          Available Challenges
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {Object.keys(challengesData).map((key) => {
            const challenge = challengesData[key];
            
            return (
              <Grid item xs={12} sm={6} md={4} key={key}>
                <Card
                  sx={{
                    backgroundColor: "#1e1e2f",
                    borderRadius: "15px",
                    overflow: "hidden",
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": { transform: "scale(1.05)" },
                  }}
                >
                  <CardMedia component="img" height="180" image={challenge.preview} alt={challenge.title} />
                  <CardContent sx={{ textAlign: "center" }}>
                    <Typography variant="h5" fontWeight="bold" color="white" gutterBottom>
                      {challenge.title}
                      <Chip
                        label={challenge.difficulty}
                        size="small"
                        sx={{
                          backgroundColor:
                            challenge.difficulty === "Beginner" ? "#4caf50" :
                            challenge.difficulty === "Intermediate" ? "#ff9800" :
                            "#f44336",
                          color: "white",
                          fontWeight: "bold",
                          ml: 2,
                        }}
                      />
                    </Typography>

                    <Typography variant="body2" color="gray" mb={2}>
                      {challenge.description}
                    </Typography>

                    <Box sx={{ display: "flex", justifyContent: "center", gap: 1, mb: 2 }}>
                      {challenge.recommendedTechnologies.map((framework) => (
                        <Chip
                          key={framework}
                          label={framework}
                          sx={{
                            backgroundColor:
                              framework === "React" ? "#61dafb33" :
                              framework === "Vue" ? "#42b88333" :
                              framework === "Angular" ? "#dd003133" : "#333",
                            color: "#fff",
                          }}
                        />
                      ))}
                    </Box>

                    <Button
                      variant="contained"
                      fullWidth
                      sx={{
                        backgroundColor: "#ff8a00",
                        borderRadius: "30px",
                        fontSize: "16px",
                        fontWeight: "bold",
                        "&:hover": { backgroundColor: "#e52e71" },
                      }}
                      onClick={() => navigate(`/editor/${key}`)}
                    >
                      Load Challenge
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </motion.div>
    </Box>
  );
}
