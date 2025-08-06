// src/server.js

import express from 'express';
import dotenv from 'dotenv';
import pino from 'pino-http';
import cors from 'cors';

import { getEnvVar } from './utils/getEnvVar.js';

const PORT = Number(getEnvVar('PORT', '3000'));

export const startServer = () => {
  const app = express();

  app.use(express.json());
  app.use(cors());
  dotenv.config();

  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

  app.get('/', (req, res) => {
    res.json({
      message: 'Hello world!',
    });
  });

  //   app.get('/contacts', (req, res) => {
  //     status: 200,
  // 	message: "Successfully found contact with id {contactId}!",
  // 	data: {

  //       });

  app.use((req, res, next) => {
    res.status(404).json({
      message: 'Not found',
    });
  });

  app.use((err, req, res, next) => {
    res.status(500).json({
      message: 'Something went wrong',
      error: err.message,
    });
  });

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
