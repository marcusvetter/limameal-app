node {
  stage('Checkout and Build') {
    checkout scm
    sh 'npm install'
  }

  stage('Unit Test') {
    sh 'npm test'
  }

  stage('E2E Test') {
    sh 'npm run e2e'
  }
}
