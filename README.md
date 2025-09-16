# MaBS - Manvian Business Solutions

A modern React application built with Vite for Manvian Business Solutions.

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd MaBS
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   ```bash
   # Copy environment template
   cp env.example .env
   
   # Edit .env file with your configuration
   VITE_API_BASE_URL=http://localhost:3001
   VITE_NODE_ENV=development
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

## 🔧 Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Backend API Configuration
VITE_API_BASE_URL=http://localhost:3001

# Environment
VITE_NODE_ENV=development
```

### Environment Variables Explained

- `VITE_API_BASE_URL`: The base URL for your backend API
  - Development: `http://localhost:3001`
  - Production: `https://your-api-domain.com`
- `VITE_NODE_ENV`: Environment mode (development/production)

## 🏗️ Project Structure

```
MaBS/
├── src/
│   ├── Components/          # React components
│   ├── assets/             # Static assets (images, videos)
│   ├── utils/              # Utility functions and API config
│   └── main.jsx           # Application entry point
├── backend/               # Node.js backend server
├── public/               # Public assets
└── .env                  # Environment configuration
```

## 📧 Career Application System

The application includes a career application system with:

- **Frontend**: React form with file upload
- **Backend**: Node.js API with MongoDB integration
- **Email**: Professional email notifications
- **Database**: MongoDB Atlas for application storage

### API Integration

The frontend uses environment variables for API configuration:

```javascript
// API calls automatically use VITE_API_BASE_URL
import { careerAPI } from './utils/api';

// Submit career application
const result = await careerAPI.apply(applicationData);
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🚀 Deployment

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Update environment variables for production**
   ```bash
   VITE_API_BASE_URL=https://your-production-api.com
   VITE_NODE_ENV=production
   ```

3. **Deploy the `dist` folder to your hosting service**

## 📚 Technologies Used

- **Frontend**: React, Vite, Tailwind CSS
- **Backend**: Node.js, Express, MongoDB
- **Email**: Nodemailer
- **Deployment**: Vite build system

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.
