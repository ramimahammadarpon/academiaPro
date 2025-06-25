# AcademiaPro (A Course Management System)

The project is a Course Management System where users can browse available courses, enroll in them, and view their enrolled courses. Developing this project helps solidify core concepts like JWT authentication, Axios interceptors, MongoDB queries, and secure CRUD operations, all in a practical, real-world setting. The system works by allowing users to log in, receive a JWT token, browse available courses, and enroll with a single click. They can also view a list of courses they’ve enrolled in, with all interactions secured via protected APIs.

## 🖼️ Screenshot

![academiaPro Screenshot](https://i.ibb.co/cStbmj3J/image.png)

## Live URL:

https://b11a11-course-management-system-ramim.netlify.app/

## 🛠️ Built With

- React.js
- Node.js
- Express.js
- MongoDB
- Tailwind CSS

## Key Features:

1. Show and Hide Password Upon Clicking the Eye button.
2. Added firebase varification on enrollment route
3. Added some conditions like showing user lgoin first if not login, users can't enroll more than three course at the same time, and a single course can't take more than 10 enrollments if seats exceds user will see no seats available at the place of enroll to the enroll button of coure details page.
4. In the statistic section, users will be able to see a graph of total number of courses, and enrollments in this website
5. Users Have to login to access private route.
6. Auth redirection
7. Edit Course info
8. remove enrollments

## 📦 Dependencies

| Package            | Version    |
|--------------------|------------|
| @tailwindcss/vite  | ^4.1.8     |
| axios              | ^1.9.0     |
| firebase           | ^11.9.0    |
| lottie-react       | ^2.4.1     |
| motion             | ^12.16.0   |
| react              | ^19.1.0    |
| react-dom          | ^19.1.0    |
| react-icons        | ^5.5.0     |
| react-router       | ^7.6.2     |
| react-slick        | ^0.30.3    |
| react-toastify     | ^11.0.5    |
| recharts           | ^2.15.3    |
| slick-carousel     | ^1.8.1     |
| sweetalert2        | ^11.22.0   |
| tailwindcss        | ^4.1.8     |



# Clone the repository
```git clone https://github.com/ramimahammadarpon/academiaPro.git```

# Navigate to the project directory
cd academiaPro

# Install frontend dependencies
npm install

# Start the frontend development server
npm run dev

