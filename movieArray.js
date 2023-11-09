const movies = [
  {
    name: "Movie 1",
    time_length: 120,
    about: {
      director: "Director 1",
      studio: "Studio 1",
      actors: [{ actor_name: "Actor 1" }, { actor_name: "Actor 2" }],
      description: "A thrilling adventure.",
    },
    language: "English",
    thumbnail: "movie1_thumbnail.jpg",
    images: ["movie1_image1.jpg", "movie1_image2.jpg"],
    trailer: "https://www.youtube.com/watch?v=movie1",
    tickets: {
      cinema: {
        day: "Monday",
        time: "18:00",
        room: "Room 1",
      },
    },
    release_date: "2022-01-01",
    isReleased: true,
  },
  {
    name: "Movie 2",
    time_length: 150,
    about: {
      director: "Director 2",
      studio: "Studio 2",
      actors: [{ actor_name: "Actor 3" }, { actor_name: "Actor 4" }],
      description: "A heartwarming story.",
    },
    language: "Spanish",
    thumbnail: "movie2_thumbnail.jpg",
    images: ["movie2_image1.jpg", "movie2_image2.jpg"],
    trailer: "https://www.youtube.com/watch?v=movie2",
    tickets: {
      cinema: {
        day: "Tuesday",
        time: "20:00",
        room: "Room 2",
      },
    },
    release_date: "2022-02-15",
    isReleased: false,
  },
  // Add more movie objects as needed
];

export default movies;
