# CodeGig

CodeGig is a web application built with Node.js that allows users to find and post coding gigs. It is designed to connect developers with potential freelance opportunities, making it easy for companies or individuals to find the right talent for their projects.

## Features

- **Browse Gigs**: Users can browse available coding gigs posted by companies or individuals.
- **Search Gigs**: Users can search for gigs based on specific criteria, such as programming language, project type, or location.
- **Post Gigs**: Companies or individuals can post their own coding gigs, specifying details like requirements, deadlines, and payment.
- **Gig Details**: View detailed information about each gig, including project description, required skills, and contact information.

## Technologies Used

- **Node.js**: Backend framework
- **Express.js**: Web application framework for routing and handling requests
- **Handlebars.js**: Templating engine for dynamic HTML rendering
- **PostgreSQL**: Database for storing gig details and user information
- **Sequelize**: ORM for managing database interactions
- **Bootstrap**: Frontend framework for responsive design

## Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/CodingWithMK/NodeJS-Codegig-App.git
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Set up environment variables**:
   - Create a `.env` file in the root directory.
   - Add the following environment variables:
     ```env
     DB_HOST=your_db_host
     DB_USER=your_db_user
     DB_PASS=your_db_password
     DB_NAME=your_db_name
     ```
4. **Run the application**:
   ```bash
   npm run dev
   ```
5. **Access the app**:
   - Open your browser and go to `http://localhost:3000`

## Contributing

Feel free to fork this repository, make enhancements, and submit pull requests. Contributions are welcome!

## License

This project is licensed under the MIT License.

---
