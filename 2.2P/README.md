
# SIT725 Task 2.2P - Express Web Server

## Overview

This project is a basic addition calculator built using Node.js
and Express. It allows users to enter two numbers through a
webpage or directly through a GET request.

The calculation runs on the server, which returns the result
to the browser.

## Technologies

- Node.js
- Express.js
- HTML

## How to run

1. Open a terminal in the 2.2P folder.
2. Install dependencies:

   npm install

3. Start the server:

   npm start

4. Open http://localhost:3000 in a browser.

## API endpoint

GET /add

The endpoint accepts two query parameters: a and b.

Example:

http://localhost:3000/add?a=10&b=20

Expected response:

The sum of 10 and 20 is 30

## Input validation

The server checks that both inputs are valid numbers.

For example:

http://localhost:3000/add?a=hello&b=20

Returns:

Please enter two valid numbers.

## Project files

- server.js: Express server and addition endpoint
- public/index.html: Calculator webpage
- package.json: Dependencies and start command
- README.md: Project instructions

## Learning outcomes

This activity helped me understand how Express handles GET
requests and how a webpage communicates with a server.
I also practised reading URL query parameters, validating
inputs and returning HTTP responses.
