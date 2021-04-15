import React, { useState } from "react";
import "./styles.css";

const movieDB = {
  Action: [
    { name: "The Road Warrior", rating: "5/5" },
    { name: "Aliens", rating: "4/5" },
    { name: "Die Hard ", rating: "4.5/5" },
    { name: "Terminator 2: Judgment Day ", rating: "3.5/5" }
  ],

  Horror: [
    {
      name: "Psycho ",
      rating: "5/5"
    },
    {
      name: "Rosemary's Baby",
      rating: "4.5/5"
    },
    {
      name: "The Exorcist",
      rating: "4/5"
    },
    {
      name: "The Shining",
      rating: "3/5"
    }
  ],
  Comedy: [
    {
      name: "Duck Soup",
      rating: "5/5"
    },
    {
      name: "Airplane! ",
      rating: "4/5"
    }
  ],
  ScienceFiction: [
    {
      name: "Star Wars ",
      rating: "5/5"
    },
    {
      name: "The Dark Knight ",
      rating: "5/5"
    },
    {
      name: "The Matrix ",
      rating: "4/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Action");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>🎬 Movie Recommender </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favourite list of recommended movies. Select a genre to get
        started.{" "}
      </p>

      <div>
        {Object.keys(movieDB).map((genre) => (
          <button className="Btn" onClick={() => genreClickHandler(genre)}>
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {movieDB[selectedGenre].map((movie) => (
            <li className="movie" key={movie.name}>
              {" "}
              <div style={{ fontSize: "larger" }}> {movie.name} </div>
              <div style={{ fontSize: "smaller" }}> {movie.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
