/*
 * Ideally the website shouldn't just throw all of the available info at the user at once. Instead
 * breaking down the site into different views that are relevant for different users would be important.
 * Using react rounter and some authentication context would be a good idea to make it so that users
 * with different roles in the community can access the views that are relevant to them, as well as have
 * 2 major views that are accessible to anonymous users (a general view of the data and a detailed view).
 */
import Homepage from "./views/Homepage";

import "./App.css";

function App() {
  return (
      <Homepage />
  )
}

export default App;
