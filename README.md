# Taimoor's Portfolio - MERN Stack Application

A modern, fully functional portfolio website built with the MERN stack (MongoDB, Express.js, React.js, Node.js) featuring an admin dashboard for content management.

## 🚀 Features

### Frontend (React)
- **Modern UI/UX**: Beautiful, responsive design with smooth animations
- **Dynamic Content**: All content is fetched from the backend API
- **Admin Authentication**: Secure login system for content management
- **Responsive Design**: Works perfectly on all devices
- **Real-time Updates**: Content updates reflect immediately

### Backend (Node.js/Express)
- **RESTful API**: Complete CRUD operations for all content
- **Authentication**: JWT-based authentication system
- **Data Validation**: Input validation and sanitization
- **Security**: Rate limiting, CORS, and security headers
- **File Upload**: Support for images and documents

### Database (MongoDB)
- **Structured Data**: Well-organized schemas for all content types
- **Relationships**: Proper data relationships and indexing
- **Scalable**: Easy to scale and maintain

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (v14 or higher)
- **MongoDB** (v4.4 or higher)
- **npm** or **yarn**

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd taimoor-portfolio-mern
   ```

2. **Install backend dependencies**
   ```bash
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd client
   npm install
   cd ..
   ```

4. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   NODE_ENV=development
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/taimoor-portfolio
   JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
   ```

5. **Start MongoDB**
   Make sure MongoDB is running on your system.

## 🚀 Running the Application

### Development Mode
```bash
# Run both frontend and backend concurrently
npm run dev

# Or run them separately:
# Backend only
npm run server

# Frontend only (in another terminal)
npm run client
```

### Production Mode
```bash
# Build the frontend
npm run build

# Start the production server
npm start
```

## 📁 Project Structure

```
taimoor-portfolio-mern/
├── client/                 # React frontend
│   ├── public/
│   │   ├── components/     # Reusable components
│   │   ├── contexts/       # React contexts
│   │   ├── pages/          # Page components
│   │   └── App.js
│   └── package.json
├── models/                 # MongoDB schemas
├── routes/                 # API routes
├── middleware/             # Custom middleware
├── server.js              # Express server
└── package.json
```

## 🔐 Admin Access

### Default Credentials
- **Username**: `admin`
- **Password**: `123456`

### Creating New Admin User
You can create a new admin user by making a POST request to `/api/auth/register`:

```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "newadmin",
    "email": "admin@example.com",
    "password": "securepassword"
  }'
```

## 📊 API Endpoints

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration
- `GET /api/auth/user` - Get current user

### Profile
- `GET /api/profile` - Get profile information
- `POST /api/profile` - Create/update profile
- `PUT /api/profile` - Update profile

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get project by ID
- `POST /api/projects` - Create project
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project

### Skills
- `GET /api/skills` - Get all skills
- `GET /api/skills/category/:category` - Get skills by category
- `POST /api/skills` - Create skill
- `PUT /api/skills/:id` - Update skill
- `DELETE /api/skills/:id` - Delete skill

### Experience
- `GET /api/experience` - Get all experience entries
- `POST /api/experience` - Create experience entry
- `PUT /api/experience/:id` - Update experience entry
- `DELETE /api/experience/:id` - Delete experience entry

### Research
- `GET /api/research` - Get all research entries
- `GET /api/research/featured` - Get featured research
- `POST /api/research` - Create research entry
- `PUT /api/research/:id` - Update research entry
- `DELETE /api/research/:id` - Delete research entry

## 🎨 Customization

### Styling
The application uses a combination of:
- **CSS-in-JS** with styled-jsx
- **Global CSS** for utility classes
- **CSS Variables** for consistent theming

### Content Management
All content is managed through the admin dashboard:
1. Login to the admin panel
2. Navigate to different sections
3. Add, edit, or delete content
4. Changes are reflected immediately on the frontend

## 🔧 Configuration

### Environment Variables
- `NODE_ENV`: Application environment (development/production)
- `PORT`: Server port (default: 5000)
- `MONGODB_URI`: MongoDB connection string
- `JWT_SECRET`: Secret key for JWT tokens

### Database Configuration
The application uses MongoDB with the following collections:
- `users` - Admin users
- `profiles` - Portfolio profile information
- `projects` - Portfolio projects
- `skills` - Technical skills
- `experiences` - Work experience
- `research` - Research publications

## 🚀 Deployment

### Heroku Deployment
1. Create a Heroku account
2. Install Heroku CLI
3. Create a new Heroku app
4. Set environment variables in Heroku dashboard
5. Deploy using Git:
   ```bash
   heroku create your-app-name
   git push heroku main
   ```

### Vercel Deployment (Frontend)
1. Install Vercel CLI
2. Deploy the client folder:
   ```bash
   cd client
   vercel
   ```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**M Taimoor Basit**
- Email: mohammad.taimoor850@gmail.com
- LinkedIn: [Taimoor's LinkedIn](https://www.linkedin.com/in/mohammad-taimoor/)

## 🙏 Acknowledgments

- React.js team for the amazing framework
- MongoDB team for the database
- Express.js team for the web framework
- All the open-source contributors whose packages made this possible

---

**Note**: This is a fully functional MERN stack application. Make sure to change the default credentials and JWT secret in production environments. 