# StayVia

StayVia is a full-stack accommodation listing and review web application built with MongoDB, Express.js, Node.js, and EJS. It allows users to browse stays, create listings, upload images, manage reviews, search destinations, and interact with location-based listing data.

## Live Demo

https://stayvia-neec.onrender.com/listings

## Features

- User registration, login, and logout
- Secure authentication using Passport.js
- Create, view, edit, and delete accommodation listings
- Upload listing images using Cloudinary
- Add and delete reviews
- Star rating system
- Listing ownership authorization
- Review ownership authorization
- Category-based listing browsing
- Search functionality
- Location support using Mapbox
- Flash messages for user feedback
- Server-side validation using Joi
- MongoDB-backed session storage
- EJS-based server-side rendering
- Responsive frontend styling

## Tech Stack

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose

### Frontend

- EJS
- CSS
- JavaScript

### Authentication and Security

- Passport.js
- Passport Local Strategy
- Passport Local Mongoose
- Express Session
- Connect Mongo

### Image and Location Services

- Cloudinary
- Multer
- Multer Storage Cloudinary
- Mapbox SDK

### Validation and Utilities

- Joi
- Method Override
- Connect Flash
- dotenv

## Project Structure

```text
StayVia/
│
├── Images/
├── controllers/
├── init/
├── models/
├── public/
├── routers/
├── utils/
├── views/
│
├── app.js
├── Cloud_Config.js
├── cron-refresher.js
├── middlewares.js
├── schema.js
├── package.json
├── package-lock.json
└── .gitignore
````

## Installation

Clone the repository:

```bash
git clone https://github.com/hammadem/StayVia.git
```

Move into the project folder:

```bash
cd StayVia
```

Install dependencies:

```bash
npm install
```

Create a `.env` file in the root directory:

```env
ATLAS_DB=your_mongodb_connection_string
SECRET=your_session_secret

CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret

MAP_TOKEN=your_mapbox_access_token
```

## Running Locally

Start the development server:

```bash
npm start
```

The application will run at:

```text
http://localhost:8080
```

## Core Functionality

### Listings

Users can create, view, update, and delete accommodation listings. Each listing includes details such as title, description, image, price, location, country, and category.

### Reviews

Authenticated users can add reviews to listings. Reviews include a rating and comment. Users can only delete reviews they created.

### Authentication

StayVia uses Passport.js for local authentication. Users can sign up, log in, and log out securely.

### Image Uploads

Listing images are uploaded and stored using Cloudinary. Multer handles the file upload process.

### Location Support

Mapbox is used for geocoding and location-based listing functionality.

## Environment Variables

| Variable           | Description                        |
| ------------------ | ---------------------------------- |
| `ATLAS_DB`         | MongoDB database connection string |
| `SECRET`           | Secret key for session management  |
| `CLOUD_NAME`       | Cloudinary cloud name              |
| `CLOUD_API`        | Cloudinary API key                 |
| `CLOUD_API_SECRET` | Cloudinary API secret              |
| `MAP_TOKEN`        | Mapbox access token                |

## Authorization Rules

* Only logged-in users can create listings.
* Only the listing owner can edit or delete their listing.
* Only logged-in users can add reviews.
* Only the review author can delete their review.

## Deployment

Before deployment, make sure all required environment variables are added to the hosting platform.

## Author

Developed by [hammadem](https://github.com/hammadem)

## License

This project is licensed under the ISC License.
