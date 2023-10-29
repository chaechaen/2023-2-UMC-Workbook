import Movie from './Components/Movie/Movie';
import {movies} from './movieDummy';

function App() {
  return (
    <div className="app-container">
      {
      movies.results.map((item)=> {
        return (
          <Movie
          title={item.title}
          poster_path={item.poster_path}
          vote_average={item.vote_average}
          overview={item.overview}
          />
        )
      }) 
      }
      
    </div>
  );
}

export default App;
