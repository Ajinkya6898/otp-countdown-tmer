import React, { useEffect, useState } from "react";
import "../styles/otp-counter.css";

const OTPCounter = () => {
  const [otp, setOtp] = useState();
  const [sec, setSec] = useState(59);
  const [min, setMin] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sec > 0) {
        setSec(sec - 1);
      } else {
        if (min === 0) {
          clearInterval(interval);
        } else {
          setMin(min - 1);
          setSec(59);
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [sec, min]);

  const handleResendOTP = () => {
    setMin(1);
    setSec(59);
  };

  return (
    <div className="container">
      <div>
        <h4>Verify OTP</h4>
        <input
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
        <div className="countdown-wrapper">
          <p>
            Time Remaining - {min < 10 ? "0" + min : min} :{" "}
            {sec < 10 ? "0" + sec : sec}
          </p>
          <button
            disabled={min === 0 && sec === 0 ? false : true}
            className="resend-otp-btn"
            onClick={handleResendOTP}
          >
            Re-send OTP
          </button>
        </div>
        <button className="submit-btn">SUBMIT</button>
      </div>
    </div>
  );
};

export default OTPCounter;
