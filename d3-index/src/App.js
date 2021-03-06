import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WarningSign from './Components/WarningSign';
import MyBadge from './Components/MyBadge';
import SingleBook from './Components/SingleBook';
import horrorArray from './Data/horror.json';
import scifi from "./Data/scifi.json"
import BookList from './Components/BookList';
import { Row } from "react-bootstrap";
import FilterBookList from './Components/FilterBookList';


function App() {
  return (
    <div>
      <div className="App">
        <WarningSign alertText="This is a Danger alert — check it out!" />
      </div>

      <div className="warning-sign">
        <MyBadge color="warning" badgeName="This is your last warning" />

      </div>

      <SingleBook book={horrorArray[0]} />

      {/* <div>
        <BookList books={horrorArray} />
  </div>*/}

      <div>
        <FilterBookList book={scifi} />
      </div>

    </div>
  );
}

export default App;
