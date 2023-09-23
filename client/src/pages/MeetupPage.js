import { useEffect, useState } from "react";
import MeetupItem from "../components/meetups/MeetupItem";
import { useParams } from "react-router-dom";

function MeetupPage() {
  const [meetup, setMeetup] = useState(null);
  const { meetupId } = useParams(); // Use destructuring to get the meetupId

  useEffect(() => {
    // Fetch the meetup data by ID from the API using the extracted meetupId
    fetch(`http://localhost:5000/api/meetups/${meetupId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch meetup.");
        }
        return response.json();
      })
      .then((data) => {
        setMeetup(data); // Set the meetup data in state
      })
      .catch((error) => {
        console.error(error);
      });
  }, [meetupId]); // Use meetupId as the dependency for useEffect

  return (
    <div>
      {meetup ? (
        <MeetupItem
        {...meetup}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default MeetupPage;
