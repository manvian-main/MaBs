// API Configuration utility
const API_CONFIG = {
  // Backend API base URL
  BASE_URL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001',
  
  // API endpoints
  ENDPOINTS: {
    CAREER_APPLY: '/api/career/apply',
    CAREER_HEALTH: '/api/career/health',
    CAREER_FILE_TYPES: '/api/career/file-types',
    CAREER_APPLICATIONS: '/api/career/applications',
    CAREER_STATS: '/api/career/stats',
    CAREER_TEST_EMAIL: '/api/career/test-email'
  }
};

// Helper function to build full API URL
export const buildApiUrl = (endpoint) => {
  return `${API_CONFIG.BASE_URL}${endpoint}`;
};

// Helper function for API requests
export const apiRequest = async (endpoint, options = {}) => {
  const url = buildApiUrl(endpoint);
  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers
    }
  };
  
  const response = await fetch(url, { ...defaultOptions, ...options });
  
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
  }
  
  return response.json();
};

// Specific API functions
export const careerAPI = {
  apply: (data) => apiRequest(API_CONFIG.ENDPOINTS.CAREER_APPLY, {
    method: 'POST',
    body: JSON.stringify(data)
  }),
  
  health: () => apiRequest(API_CONFIG.ENDPOINTS.CAREER_HEALTH),
  
  fileTypes: () => apiRequest(API_CONFIG.ENDPOINTS.CAREER_FILE_TYPES),
  
  applications: (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    const endpoint = queryString ? 
      `${API_CONFIG.ENDPOINTS.CAREER_APPLICATIONS}?${queryString}` : 
      API_CONFIG.ENDPOINTS.CAREER_APPLICATIONS;
    return apiRequest(endpoint);
  },
  
  stats: () => apiRequest(API_CONFIG.ENDPOINTS.CAREER_STATS),
  
  testEmail: () => apiRequest(API_CONFIG.ENDPOINTS.CAREER_TEST_EMAIL, {
    method: 'POST'
  })
};

export default API_CONFIG;
