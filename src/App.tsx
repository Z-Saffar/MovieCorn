import React from "react"
import "./App.css"
import MovieCard from "./components/MovieCard/MovieCard"

function App() {
  return (
    <div className="App">
      <MovieCard
        title="The Shawshank Redemption"
        year={1994}
        description="Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
        genres={["Drama"]}
        imageUrl="images/pic1.jpg"
        isFavorite={false}
        rate={9.2}
      />
    </div>
  )
}

export default App
