# Vue.js를 이용한 날씨 정보 어플리케이션

### [링크]("https://eeong-weather-project.web.app")

## 스택

 - 프론트엔드  
	- Vue.js, Vue-cli, Vuex, VueRouter, ES6 
 
 - 퍼블리싱
	- PUG(JADE), SCSS(SASS), Bootstrap, JavaScript

 - 디자인
	- Adobe PhotoShop

 - 관리
	- Git, Vue-cli, Babel-Webpack

 - 배포
	- Firebase

## 구조

 1. Vue router를 통해 /Home, /Daily, /Weekly 라우팅. 

 2. 날씨 정보와 관련된 통신을 위한 저장소를 store에 만든다.

 3. store의 변화, 상태, 통신 등의 정보를 Vuex에서 접근하여 Vue 컴포넌트로 가져온다.

 4. 주소를 받으면 Vue 인스턴스의 created 메소드를 통해 store의 api에서 정보를 받아오는 함수를 실행한다.

 5. 도시 위치정보는 json파일을 통해 좌표를 도시 변수에 저장한다. 현재 위치 정보는 Promise 인스턴스를 생성하여 비동기로 받아온다.

 6. 도시 좌표 변수를 axios를 통해 api에 전달하여 비동기로 날씨 데이터를 받아온다. 
 
 7. 받아온 도시 정보를 Vuex의 mapGetters 헬퍼를 통해 전개하여 Vue에 렌더링한다.

 8. 도시 정보를 바꾸게 되면 store의 action의 도시정보를 변화시키고 리다이렉트하여 바뀐 날씨 컨텐츠를 렌더링 한다. 
