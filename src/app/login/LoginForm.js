import React from 'react';
import '../../styles/loginform.css';
import dynamic from 'next/dynamic';

const LoginComponent = dynamic(() => import('./LoginComponent.js'), { ssr: false });

const LoginForm = () => {
  return (
    <div class="wrap" id="wrap">
    <div class="container">
      {/* 로그인 */}
      <div class="sign-up-container">
        <form action="#" method="post">
          <h2 class="login_title"><span>포장의 민족</span>에 오신 것 을 환영합니다.</h2>
          <fieldset>
            <ul>
              <li>
                <input type="email" placeholder="이메일을 입력하세요" onblur="this.placeholder='이메일을 입력하세요'" onfocus="this.placeholder=''" />
              </li>
              <li>
                <input type="password" placeholder="비밀번호를 입력하세요" onblur="this.placeholder='비밀번호를 입력하세요'" onfocus="this.placeholder=''" />
              </li>
            </ul>
          </fieldset>
          <div class="check_box">
            <input type="checkbox" name="check" />
            <label for="check">이메일 기억하기</label>
          </div>

          <div>
            <button class="login_btn"><span>로그인</span></button>
            <LoginComponent />
          </div>
        
          <ul class="login_join">
            <li>
              <p>Forgot your Email or Password?</p>
            </li>
            <li>
              <a href="#"><span>이메일 찾기</span></a>
              <a href="#"><span>비밀번호 찾기</span></a>
           
            </li>
          </ul>
        </form>
      </div>
      {/* 로그인 end */}
      
      {/* overlay */}
      <div class="overlay">
        <div class="overlay_inner">
          <h2>반갑습니다!</h2>
          <p>비회원이시라면 회원가입 후 시작하세요.</p>
          <button class="sign_in_click">회원가입</button>
        </div>
      </div>
     {/* overlay end */}
    </div>
  </div>
  );
}

export default LoginForm