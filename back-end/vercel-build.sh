#!/bin/bash

# Run Prisma migrations
npx prisma migrate deploy

# Install dependencies and build the Nest.js app
npm install
npm run build

# Start the Nest.js app
npm start