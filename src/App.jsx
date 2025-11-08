import "./App.css";
import { useState } from "react";
import RatingPage from "./components/RatingPage";
import ThankyouPage from "./components/ThankyouPage";

const App = () => {
  const [rating, setRating] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (value) => {
    setRating(value);
  };

  const handleSubmit = () => {
    if (rating) {
      setSubmitted(true);
    }
  };

  return (
    <>
      {!submitted ? (
        <RatingPage
          selectedRating={rating}
          onSelect={handleSelect}
          onSubmit={handleSubmit}
        />
      ) : (
        <ThankyouPage rating={rating} />
      )}
    </>
  );
};

export default App;
