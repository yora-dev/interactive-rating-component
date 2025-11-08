import StarIcon from "../assets/icon-star.svg";

const RatingPage = () => {
  return (
    <div className="rating-card">
      <div className="img-container">
        <img src={StarIcon} alt="" className="star-icon" />
      </div>
      <h1 className="card-header">How did we do ?</h1>
      <p className="card-body">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>

      <div className="rating-container">
        <div className="rating-values">
          <button value={1} className="rating">
            1
          </button>
          <button value={2} className="rating">
            2
          </button>
          <button value={3} className="rating">
            3
          </button>
          <button value={4} className="rating">
            4
          </button>
          <button value={5} className="rating">
            5
          </button>
        </div>

        <button className="submit-btn">Submit</button>
      </div>
    </div>
  );
};

export default RatingPage;
