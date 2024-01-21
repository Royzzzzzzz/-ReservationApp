import React from "react";

const JoinForm = () => {
  return (
    <div class="join_container">
      <h3>포장의 민족 하나로 모든 배달 끝!</h3>
      <div class="member_form">
        <div>
          <label for="email">이메일</label>
          <div class="input_layout">
            <input name="email" id="email" type="text" maxLength={20} placeholder="이메일을 입력하세요" onblur="this.placeholder='이메일을 입력하세요'" onfocus="this.placeholder=''"></input>
          </div>
        </div>
        <div>
          <label for="password">비밀번호</label>
          <div class="input_layout">
            <input name="password" id="password" type="password" maxLength={18} placeholder="8~16자리, 영문 대소문자, 특수문자 포함" onblur="this.placeholder='8~16자리, 영문 대소문자, 특수문자 포함'" onfocus="this.placeholder=''"></input>
          </div>
        </div>
        <div>
          <label for="name">이름</label>
          <div class="input_layout">
            <input name="name" id="name" type="text" placeholder="이름을 입력하세요" onblur="this.placeholder='이름을 입력하세요'" onfocus="this.placeholder=''"></input>
          </div>
        </div>
        <div>
          <label for="birth">생년월일</label>
          <div class="input_layout">
            <input name="birth" id="birth" type="number" placeholder="YYYYMMDD" onblur="this.placeholder='YYYYMMDD'" onfocus="this.placeholder=''"></input>
          </div>
        </div>
        <div>
          <label for="birth">생년월일</label>
          <div class="input_layout">
            <input name="birth" id="birth" type="number" placeholder="YYYYMMDD" onblur="this.placeholder='YYYYMMDD'" onfocus="this.placeholder=''"></input>
          </div>
          <button></button>
        </div>
        <div>
          
        </div>
      </div>
      <div class="terms">
        <h4>약관</h4>
        <div class="agree_box"></div>
      </div>

    </div>
  );
}

export default JoinForm