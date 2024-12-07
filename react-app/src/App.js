import "./App.css";
import Wishlist from "./Wishlist";

// fetch all items from backend
// list items in 4 separate categories: <25, <50, >50, other/giftcards
// each item will have: image thumbnail, title, link to buy, price, and "checkbox/claim" button
// if someone clicks checkbox/claim, it moves to a separate category at the bottom
// maintain states across people
// mobile-first development

/** Fetch wishlist from server */

/** Sets gift status to claimed on server*/

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Wishlist />
      </header>
    </div>
  );
}

export default App;
