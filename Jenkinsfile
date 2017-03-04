pipeline {
  agent any
  tools {
    nodejs 'Node 7.x'
  }
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }
    stage('Unit Test') {
      steps {
        sh 'npm test'
      }
    }
    stage('E2E Test') {
      steps {
        sh 'npm run pree2e'
        sh 'npm run e2e'
      }
    }
  }
}
