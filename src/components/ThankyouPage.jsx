import ThankyouImg from "../assets/illustration-thank-you.svg";

const ThankyouPage = () => {
  return (
    <div className="thank-you-card">
      <img src={ThankyouImg} alt="" className="thankyou-img" />
      <p className="result-text">You selected 4 out 5</p>
      <h1 className="thankyou-header">Thank you!</h1>
      <p className="thankyou-body">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
};

export default ThankyouPage;
