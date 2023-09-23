import { Route, Routes } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import MeetupPage from "./pages/MeetupPage";
import FavouritesPage from "./pages/Favourites";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetupsPage />} />

        <Route path="/meetups" element={<AllMeetupsPage />} />

        <Route path="/meetups/:meetupId" element={<MeetupPage />}/>

        <Route path="/new-meetup" element={<NewMeetupPage />} />

        <Route path="/favourites" element={<FavouritesPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
