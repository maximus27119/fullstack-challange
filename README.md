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

## Architecture Overview

### Backend

The backend is developed using Express.js, with a modular architecture that separates functionality into controllers, services and routes, similar to Nest.js. This design promotes better maintainability and readability. The use of Prisma as the ORM improves database management, offering versatility across various databases, type safety, and an intuitive querying experience. This combination results in a robust and scalable backend that efficiently handles business logic.

### Frontend

On the frontend, we utilized Next.js to make development faster. The framework is highly recommended for use with React due to its built-in features like server-side rendering and static site generation. These capabilities improve application performance and SEO, making development faster and less complex. Material UI was used for its extensive library of customizable components, ensuring a consistent and modern user interface. 

---

Throughout the development process, we implemented Clean Code principles on both the frontend and backend, focusing on readability, maintainability, and modularity to create a high-quality codebase that is easy to navigate and extend.