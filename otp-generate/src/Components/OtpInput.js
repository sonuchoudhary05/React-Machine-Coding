import { useRef, useState, useEffect } from "react";

const OtpInput = ({ length, onOtpSubmit = () => {} }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRefs = useRef([]);
  const handleChange = (index, e) => {
    const value = e.target.value;
    if (isNaN(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);
    const combinedOtp = newOtp.join("");
    if (combinedOtp === length) {
      onOtpSubmit();
      console.log("Otp Enter Sucessfully");
    }
    if (value && index < length - 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };
  const handleClick = (index) => {
    inputRefs.current[index].setSelectionRange(1, 1);
    if (index > 0 && !otp[index - 1]) {
      inputRefs.current[otp.indexOf("")].focus();
    }
  };
  const handleKeyDown = (index, e) => {
    if (
      e.key === "Backspace" &&
      !otp[index] &&
      index > 0 &&
      inputRefs.current[index - 1]
    ) {
      inputRefs.current[index - 1].focus();
    }
  };
  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);
  return (
    <div>
      {otp.map((value, index) => {
        return (
          <input
            key={index}
            ref={(input) => (inputRefs.current[index] = input)}
            type="text"
            value={value}
            onChange={(e) => {
              handleChange(index, e);
            }}
            onClick={() => {
              handleClick(index);
            }}
            onKeyDown={(e) => {
              handleKeyDown(index, e);
            }}
            className="otpInput"
          />
        );
      })}
    </div>
  );
};
export default OtpInput;
