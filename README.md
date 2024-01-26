<img width=160 src="https://github.com/codestates-seb/seb39_main_015/assets/41741221/c30102a7-02d1-4472-b907-0cad9a5fc19d">
<img width=160 alt="qrcode" src="https://github.com/codestates-seb/seb39_main_015/assets/41741221/2b69220b-5264-48f1-81c0-46272748f51b">

# 걸어볼래 - 위치 기반 산책 기록 서비스


[1. 프로젝트 소개 - 기간, 팀구성, 서비스 소개 등](#1-프로젝트-소개)  
[2. 주요 기능 데모](#2-주요-기능-데모)  
[3. 나의 작업(기능 구현)](#3-나의-주요-작업-기여도-100가-아닌-것은-따로-표시)

<br>

***** [2024-01-22] 현재 서버 문제로 서비스를 이용할 수 없습니다. 기존 유저 데이터 손실 및 기타 오류 발생. 처리 중 입니다. *****  

<br>

## 1. 프로젝트 소개

- 프로젝트 명 : 걸어볼래
- 기간 : 2023.05 ~ 2023.06 (6주)
- 팀 구성 : 6명 (FrontEnd 3, BackEnd 3)
- 나의 역할 : 프로젝트 팀장, 프론트엔드 팀장
- 서비스 소개 : 산책을 하면서 걸은 경로와 걸으면서 작성한 메모(사진, 텍스트)를 기록할 수 있는 서비스 (모바일 최적화)
- 서비스 링크 : https://www.would-you-walk.com/

<br>

## 2. 주요 기능 데모

|걷기시작(경로추적)|순간기록작성|걷기종료(기록저장)|기록조회|
|:---:|:---:|:---:|:---:|
|<img width="220" src="https://github.com/fivethreeeo/would-you-walk/assets/41741221/1c6eb3cb-4f90-4056-b3c3-bfb0b13a0eb9">|<img width="220" src="https://github.com/fivethreeeo/would-you-walk/assets/41741221/ca13d44b-6364-42dc-992b-c0f172e72168">|<img width="220" src="https://github.com/fivethreeeo/would-you-walk/assets/41741221/573ba337-318c-4372-a6c2-c8496893ecc1">|<img width="180" src="https://github.com/fivethreeeo/would-you-walk/assets/41741221/687b24a4-f41d-4fa0-96a3-beaa36f78f89">|



<br>

## 3. 나의 주요 작업 (기여도 100%가 아닌 것은 따로 표시)

#### 재사용 지도 컴포넌트 구현 (실시간 위치와 움직이는 경로 그리기, 저장된 경로 그리기)

- [기술발표영상 - 리액트 훅으로 재사용하는 구글 맵 만들기](https://youtu.be/5vPsaEICJC4?t=503)
- [[PR] Google Map 설정](https://github.com/codestates-seb/seb43_main_028/pull/145)
- [[PR] 구글맵 보기옵션 추가 및 오류 수정](https://github.com/codestates-seb/seb43_main_028/pull/345)
- [[PR] 걷기 중 실시간 경로 렌더링 / 정적 경로렌더링 구현](https://github.com/codestates-seb/seb43_main_028/pull/355)

#### 좌표 값 Web Socket 통신 구현

- [[PR] 실시간 좌표 웹소켓으로 서버 전송](https://github.com/codestates-seb/seb43_main_028/pull/392)

#### PWA(Progressive Web Application) 구현

- [[PR] - PWA 적용 & Vercel 자동배포 설정](https://github.com/codestates-seb/seb43_main_028/pull/14)

#### [기여도 50%]자동로그인 (JWT) 구현

- [[PR] - Refactor: axios interceptors로 토큰리프레시 & localStorage로 엑세스토큰 관리 & authAtom 통합](https://github.com/codestates-seb/seb43_main_028/pull/370)

#### Sprite SVG Icon 구현

- [[PR] - Feat: Sprite SVG로 Icon 컴포넌트 구현](https://github.com/codestates-seb/seb43_main_028/pull/63)

#### 기타

- [내가 발행한 PR LIST](https://github.com/codestates-seb/seb43_main_028/pulls?q=is%3Apr+author%3Afivethreeeo+is%3Aclosed)







