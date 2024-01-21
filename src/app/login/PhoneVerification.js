import React, { useState } from "react";

const PhoneVerification = ({ onVerify }) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleVerification = async () => {
    // 여기에서 전화번호를 서버로 보내어 인증을 시작합니다.
    // 서버와의 통신은 Next.js에서 제공하는 API Routes를 활용할 수 있습니다.
    const response = await fetch('/api/verify-phone', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ phoneNumber }),
    });

    if (response.ok) {
      // 인증이 성공하면 다음 단계로 이동하는 콜백을 호출합니다.
      onVerify();
    } else {
      // 인증 실패 처리
      console.error('Phone verification failed');
    }
  };

  return (

    <div>
      <label for="phone">핸드폰번호</label>
      <div class="input_layout">
        <input name="phone" id="phone" type="number" placeholder="'-'빼고 입력해주세요." onblur="this.placeholder=''-'빼고 입력해주세요.'" onfocus="this.placeholder=''" onChange={handlePhoneNumberChange} value={phoneNumber}></input>
      </div>
      <button class="verify_btn" onClick={handleVerification}>인증하기</button>
    </div>

    // <div>
    //   <label htmlFor="phoneNumber">전화번호:</label>
    //   <input
    //     type="tel"
    //     id="phoneNumber"
    //     name="phoneNumber"
    //     value={phoneNumber}
    //     onChange={handlePhoneNumberChange}
    //   />
    //   <button onClick={handleVerification}>인증하기</button>
    // </div>
  );
};

export default PhoneVerification;