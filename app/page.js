"use client";
import { Box, Typography } from "@mui/material";
import { useState, useEffect } from 'react';

export default function Home() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      width="100vw"
      height="100vh"
      alignItems="center"
      justifyContent="center" m={0}
    >
      <Typography variant="h3">AI Rate My Professor hi</Typography>
    </Box>
  );
}
