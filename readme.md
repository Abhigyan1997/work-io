# Worko Backend

## Getting Started

### Prerequisites
- Node.js
- MongoDB

### Installation
1. Clone the repository:
    ```bash
    git clone <repo-url>
    ```
2. Navigate to the project directory:
    ```bash
    cd worko-backend
    ```
3. Install dependencies:
    ```bash
    npm install
    ```

### Configuration
1. Create a `.env` file in the root directory of the project.
2. Add the following environment variables to your `.env` file:

    ```plaintext
    PORT=3000
    DB_URL="mongodb+srv://your_username:your_password@your_cluster_url/your_database_name"
    JWT_SECRET=your_jwt_secret_key
    ```
   Replace `your_username`, `your_password`, `your_cluster_url`, `your_database_name`, and `your_jwt_secret_key` with your actual MongoDB connection details and JWT secret key.

### Running the Application
- To start the server, run:
    ```bash
    npm start
    ```
  or
    ```bash
    node src/server.js
    ```
  depending on your setup.

### Testing
- Use Postman or any API testing tool to interact with the API endpoints.
