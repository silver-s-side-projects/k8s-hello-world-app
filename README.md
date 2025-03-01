## k8s-hello-world-app
  
  
### 설명
- 자세한 내용은 이 글을 참고하세요. 배포 서버로는 맥북을 사용합니다.
- hello-world app입니다. 이름을 입력하면, 데이터베이스에 이름을 저장하고, "{이름} hello world"를 프린트해줍니다.
- 로컬 서버에 쿠버네티스 환경 구축하고, 이를 테스트하기 위해 만든 앱입니다.
- docker-compose.yml은 로컬 테스트용입니다.


### 구성
| 구성 요소 | 기술 스택 |
|----------|----------|
| 백엔드 | FastAPI |
| 데이터베이스 | MySQL |
| 프론트엔드 | React |
| 웹 서버 | Nginx |
| 로컬 개발 환경 | Docker Compose |
| CI/CD | GitHub Actions |
| 프로덕션 환경 | Kubernetes |

### 배포 흐름
| 단계 | 도구 | 설명 |
|------|------|------|
| 코드 작성 | Git | 소스 코드 버전 관리 |
| 코드 푸시 | GitHub | 코드 저장소 |
| 자동화 빌드 | GitHub Actions | 코드 변경 시 자동으로 Docker 이미지 빌드 |
| 이미지 저장 | Docker Registry | 빌드된 이미지 저장 |
| 로컬 테스트 | Docker Compose | 로컬 환경에서 전체 스택 테스트 |
| 배포 | Kubernetes | 프로덕션 환경에 애플리케이션 배포 |
| 모니터링 | Kubernetes Dashboard | 애플리케이션 상태 모니터링 |


### 파일 구조
| 파일/디렉토리 | 용도 |
|--------------|------|
| backend/ | FastAPI 백엔드 코드 |
| frontend/ | React 프론트엔드 코드 |
| nginx/ | Nginx 설정 파일 |
| k8s/ | Kubernetes 매니페스트 파일 |
| docker-compose.yml | 로컬 개발 환경 설정 |
| .github/workflows/ | GitHub Actions 워크플로우 정의 |

### 인프라 구성
| 구성 요소 | Kubernetes 리소스 | 설명 |
|----------|------------------|------|
| 백엔드 | Deployment, Service | API 요청 처리 |
| 프론트엔드 | Deployment, Service | 사용자 인터페이스 제공 |
| 데이터베이스 | Deployment, Service, PVC | 데이터 저장 |
| 웹 서버 | Deployment, Service, ConfigMap | 요청 라우팅 및 정적 파일 제공 |
| 설정 | ConfigMap, Secret | 환경 변수 및 비밀 정보 관리 |
| 네트워크 | Ingress | 외부 트래픽 라우팅 |