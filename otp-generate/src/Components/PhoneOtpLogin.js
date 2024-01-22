import { useState } from "react";
import OtpInput from "./OtpInput";
const PhoneOtpLogin = () => {
  const [phoneNo, setPhoneNo] = useState("");
  const [showOtpField, setShowOtpField] = useState(false);
  const handlePhoneNumber = (event) => {
    setPhoneNo(event.target.value);
  };
  const handlePhoneSubmit = (event) => {
    event.preventDefault();
    // Perform Phone Validation
    const regex = /[^0-9]/g;
    if (phoneNo.length < 10 || regex.test(phoneNo)) {
      alert("Invalid Phone Number");
      return;
    }
    setShowOtpField(true);
  };
  const onOtpSubmit = () => {
    console.log("Otp Submit Sucessfully");
  };
  return (
    <div>
      {!showOtpField ? (
        <form onSubmit={handlePhoneSubmit}>
          <input
            type="text"
            value={phoneNo}
            onChange={handlePhoneNumber}
            placeholder="Enter Phone Number"
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>Enter the otp sent to : {phoneNo}</p>
          <OtpInput length={4} onOtpSubmit={onOtpSubmit} />
        </div>
      )}
    </div>
  );
};

export default PhoneOtpLogin;
