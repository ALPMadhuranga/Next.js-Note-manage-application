# Note Management App
This is a simple Note Management application with CRUD functionalities and user authentication. Users can create, read, update, and delete notes after authenticating with their credentials.

## Technologies Used
- Next.js: A React framework for building server-side rendered (SSR) and statically generated web applications.
- MongoDB: A NoSQL database for storing note data.
- Tailwind CSS: A utility-first CSS framework for designing responsive and customizable UI components.

## Features
- User authentication with credentials.
- Create, read, update, and delete notes (CRUD operations).
- Responsive and intuitive UI design.

### Install dependencies
- Clone the repository: 
```
    git clone https://github.com/ALPMadhuranga/unwir-practical-test-nextjs.git
```
- Install dependencies:
```
  npm install
```
### Configuration
- Set up MongoDB database and obtain connection URI.
- Create a .env file in the root directory and add the MongoDB connection URI:
  ```
     - MONGODB_URI=your_mongodb_connection_uri
     - NEXTAUTH_SECRET= `abc123`
  ```
- Configure authentication settings as per your requirements.

### Getting Started
- First, run the development server:

```bash
   npm run dev
```
- Access the application in your browser: http://localhost:3000

## Demo
https://memo-flow-nextjs.vercel.app/
