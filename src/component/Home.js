
import { quotes } from "../utils/mockData";
import './Home.css';

const Home = () => {
  return (
    <div>
      {quotes && (
        quotes.map((data, index) => (
          <div className="card" key={index}>
            <div className="card-data">{data.data}</div>
            <div className="card-author">- {data.author}</div>
          </div>
        ))
      )}
    </div>
  )
}

export default Home