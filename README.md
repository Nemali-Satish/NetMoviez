# NetMoviez 🎬

**NetMoviez** is a Netflix clone built using React.js, Tailwind CSS, Clerk for authentication, and The Movie Database (TMDb) API to fetch movie and TV show details. This application is fully responsive and offers a seamless user experience across different devices.

## Features

- **User Authentication**: Secure user authentication using Clerk for signing up, logging in, and OTP verification.
- **Browse Movies & TV Shows**: Discover trending, popular, top-rated, and currently playing movies and TV shows.
- **Search Functionality**: Search for any movie, TV show, or actor directly using the search feature.
- **Detailed Information**: View details about movies/TV shows, including trailers, ratings, cast, release dates, and overviews.
- **Watch Trailers**: Watch trailers directly on the movie/TV show detail pages.
- **Fully Responsive**: Optimized for all screen sizes including mobile, tablet, and desktop.
- **Scroll-to-load more**: Infinite scrolling implemented for the explore and search pages to load more results.

## Screenshots

![Dashboard](/public/Dashboard.png)
![Dashboard](/public/landingPage.png)
![Dashboard](/public/explore.png)
![Dashboard](/public/loginPage.png)
![Dashboard](/public/RegisterPage.png)
![Dashboard](/public/MobileDashboard.png)
![Dashboard](/public/MobileRegister.png)

## Getting Started

### Prerequisites

To run this project locally, ensure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** or **yarn** (package manager)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/nemali-satish/netmoviez.git
   ```

2. Navigate to the project directory:

   ```bash
   cd netmoviez
   ```

3. Install the dependencies:

   Using npm:

   ```bash
   npm install
   ```

   Using yarn:

   ```bash
   yarn install
   ```

### Configuration

To fetch data from the TMDb API, you need to set up an environment variable for your API key.

1. Create a `.env` file in the root directory:

   ```bash
   touch .env
   ```

2. Add the following environment variable:

   ```
   REACT_APP_TMDB_API_KEY=your_tmdb_api_key_here
   ```

   Replace `your_tmdb_api_key_here` with your actual TMDb API key. You can get the key by signing up at [TMDb](https://www.themoviedb.org/).

### Running the Application

Once the setup is complete, you can start the development server:

Using npm:

```bash
npm run dev
```

Using yarn:

```bash
yarn dev
```

The app will be running at [http://localhost:5173](http://localhost:5173).

### Building for Production

To create an optimized production build, run:

Using npm:

```bash
npm run build
```

Using yarn:

```bash
yarn build
```

## Folder Structure

```bash
├── public
├── src
│   ├── components     # Reusable UI components like Cards, Banners, etc.
│   ├── hooks          # Custom hooks for fetching data from TMDb API
│   ├── pages          # Pages for routing (Home, Explore, Details, Search, etc.)
│   ├── redux          # Redux store and slices for managing state
│   ├── App.jsx        # Main App component
│   └── index.js       # Entry point of the React application
├── .env               # Environment variables for API keys
└── README.md          # Project documentation
```

## API Usage

NetMoviez fetches data from the [TMDb API](https://www.themoviedb.org/documentation/api). Below are the primary endpoints used:

- **Trending Movies/TV Shows**: `/trending/{media_type}/{time_window}`
- **Now Playing Movies**: `/movie/now_playing`
- **Top Rated Movies**: `/movie/top_rated`
- **Popular TV Shows**: `/tv/popular`
- **Search**: `/search/multi?query={query}`

## Technologies Used

- **React.js**: Front-end JavaScript library for building the user interface.
- **Tailwind CSS**: Utility-first CSS framework for responsive design.
- **Redux**: For managing global state across the app.
- **Clerk**: User authentication system.
- **TMDb API**: Source of movie and TV show data.
- **Axios**: For making API requests.
- **React Router**: For routing between different pages.

## How to Contribute

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/new-feature`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin feature/new-feature`).
6. Create a new Pull Request.

## License

This project is licensed under the MIT License.

---

Enjoy watching your favorite movies and TV shows with **NetMoviez**! 🎬
