# Backend repository  

---
#Coding convention

### General

+ 네임스페이스, 오브젝트, 함수, 그리고 인스턴스에는 camelCase 사용
+ 클래스나 constructor에는 PascalCase 사용
+ 클래스명과 변수명은 명사 사용
+ 메서드명은 동사 사용
+ 파일명은 lower_case 사용
+ 상수는 UPPER_CASE 사용
+ let 대신 var 사용
+ 객체, 배열 생성 시 리터럴 구문 사용 ex) `const item = {};`
+ 문자열의 하드 코딩을 피하기
+ 문자열은 single quotes 를 사용
+ 메소드는 작은 기능 단위로 생성
+ ES6 object-shorthand 사용 및 그룹화
+ 화살표 함수 사용
+ import / export 사용
+ 중복을 피하기 위해 한 곳에서 import ex) `import foo, {named1, named2} from "foo";`
+ export가 하나일 경우, default export를 사용 ex) `export default function foo() {}`
+ 불필요한 3항 연산자는 피한다
+ 탭은 두칸
+ 파일을 1개의 클래스로 export 하는 경우, 파일명은 클래스명과 완전히 일치시킨다

- 추가적인 스타일 가이드는 아래 링크 참고

https://github.com/naver/eslint-config-naver/blob/master/STYLE_GUIDE.md#classes--constructors
