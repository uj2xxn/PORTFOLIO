import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className = "main-header">
        <h1>LEE YOU JIN</h1>
        <h2>FRONTEND</h2>
      </header>
      <section id = "title">
        <h1>[이유진 포트폴리오]</h1>
        <div className = "image-yj">
          <img src = "yj.png" alt = "이유진" style = {{maxWidth: '200px', height: 'auto'}} />
        </div>
        <h2>자기소개</h2>
        <p>Frontend 개발자</p>
        <p>이유진</p>
      </section>
      <section id="education">
        <h2>학교 및 전공</h2>
        <p>한국외국어대학교 서울캠퍼스 본전공 : 행정학과 / 이중전공 : AI 융합학부</p>
      </section>
      <section id="contact">
        <h2>Contact</h2>
        <p>깃허브 아이디 : uj2xxn</p>
        <p>전화번호 : 010 - 8975 - 1724</p>
        <p>이메일 : youjin1724@naver.com</p>
      </section>
      <section id="values">
        <h2>가치관</h2>
        <p>지속적이고 꾸준한 개발 및 코딩 학습은 필수라고 생각합니다.</p>
        <p>"성공의 지름길은 꾸준한 노력입니다."</p>
      </section>
      <section id="strengths">
        <h2>강점</h2>
        <p>끈기 / 열정 / 끊임없는 학구열</p>
      </section>
      <section id="activities">
        <h2>활동내역</h2>
        <p>멋쟁이사자처럼 한국외국어대학교 서울캠퍼스 12기</p>
      </section>
      <footer>
        <p>© 2024 나의 포트폴리오. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;