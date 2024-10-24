# Fullstack Challenge

## Getting Started

Follow the steps below to set up and run the project locally.

### Prerequisites

- Ensure you have Docker and Docker Compose installed.
- Node.js and npm should be installed on your machine.

### Backend Setup

1. **Navigate to the Server Directory**
   ```bash
   cd server
   
2. **Copy the Environment Configuration**
   ```bash
   cp .env.example .env
   
- Optionally, modify any necessary values in the .env file to suit your configuration.

3. **Install Dependencies**
   ```bash
   npm install
   
4. **Start Docker Container with MySQL database**
   ```bash
   docker compose up -d

5. **Apply Prisma Migrations**
   ```bash
   npm run prisma:apply

6. **Start the Server**
   ```bash
   npm start
   
### Frontend Setup

1. **Navigate to the Client Directory**
   ```bash
   cd ../client
   
2. **Copy the Environment Configuration**
   ```bash
   cp .env.example .env
- Optionally, modify any necessary values in the .env file to suit your configuration.

3. **Install Dependencies**
   ```bash
   npm install

4. **Build the Project**
   ```bash
   npm run build

5. **Start the Build Application**
   ```bash
   npm start

### Usage
Once both the backend and frontend applications are running, you can access the frontend at http://localhost:3000.