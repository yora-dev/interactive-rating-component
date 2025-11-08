import StarIcon from "../assets/icon-star.svg";

const RatingPage = ({
  selectedRating = null,
  onSelect = () => {},
  onSubmit = () => {},
}) => {
  const values = [1, 2, 3, 4, 5];

  return (
    <div className="rating-card" aria-live="polite">
      <div className="img-container">
        <img src={StarIcon} alt="star icon" className="star-icon" />
      </div>
      <h1 className="card-header">How did we do?</h1>
      <p className="card-body">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>

      <div className="rating-container">
        <div className="rating-values" role="radiogroup" aria-label="rating">
          {values.map((v) => (
            <button
              key={v}
              type="button"
              onClick={() => onSelect(v)}
              className={`rating ${selectedRating === v ? "selected" : ""}`}
              aria-pressed={selectedRating === v}
              aria-label={`Rate ${v} out of 5`}
            >
              {v}
            </button>
          ))}
        </div>

        <button
          className="submit-btn"
          type="button"
          onClick={onSubmit}
          disabled={!selectedRating}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default RatingPage;
