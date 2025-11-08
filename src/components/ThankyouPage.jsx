import ThankyouImg from "../assets/illustration-thank-you.svg";

const ThankyouPage = ({ rating = null }) => {
  return (
    <div className="thank-you-card">
      <img
        src={ThankyouImg}
        alt="thank you illustration"
        className="thankyou-img"
      />
      <p className="result-text">
        {rating
          ? `You selected ${rating} out of 5`
          : "You did not select a rating"}
      </p>
      <h1 className="thankyou-header">Thank you!</h1>
      <p className="thankyou-body">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
};

export default ThankyouPage;
