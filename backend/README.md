# SomethingUnique Backend

![License](https://img.shields.io/badge/license-MIT-blue.svg)

## Overview

SomethingUnique Backend is the server-side component of the SomethingUnique application. It provides APIs and handles business logic to support the frontend application.

## Features

- **User Authentication**: Secure login and registration functionalities.
- **Data Management**: CRUD operations for managing user data.
- **API Integration**: Interfaces with third-party services for extended features.

## Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

- **Node.js**: Ensure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).
- **npm**: Node.js package manager, which comes with Node.js.

### Installation

1. **Clone the repository**:

```
git clone https://github.com/UtsavSingh29/somethingunique-backend.git
```

2. Navigate to the project directory:
```
cd somethingunique-backend
```

3. Install dependencies:
```
npm install
```
4. Configuration
## Environment Variables: 
Create a .env file in the root directory and add the necessary environment variables.

### env
```
DATABASE_URL=your_database_url
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_nodemailer_mail
EMAIL_PASS=your_nodemailer_pass
```

#### Database Setup: 
Ensure your database is set up and accessible. Update the DATABASE_URL in the .env file accordingly.

5. Running the Application
Start the development server with:
```
npm run dev
```
The server should now be running at http://localhost:3000.

# Usage
API Documentation: Access the API endpoints documentation at http://localhost:3000/api-docs.
Frontend Integration: Connect this backend to the SomethingUnique Frontend.
## License
This project is licensed under the MIT License. See the LICENSE file for details.
