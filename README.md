# Todo App - React + Material UI
Simple demo project exploring [React](https://react.dev/) and [Material UI](https://mui.com/material-ui/).

## Quick Start
### Option 1: Docker
Pull the image from GitHub Container Registry:
```sh
docker run -dp 3000:80 --rm ghcr.io/amundsno/todo-react-mui:latest
```
Then open [http://localhost:3000](http://localhost:3000) in your browser.

### Option 2: Local Development
Clone the project:
```sh
git clone https://github.com/amundsno/todo-react-mui.git
cd todo-react-mui
```
Install dependencies and start development server:
```sh
npm install
npm run dev
```
Or, build and run in Docker:
```
docker build -t todo-react-mui:latest .
docker run -dp 3000:80 --rm todo-react-mui:latest
```