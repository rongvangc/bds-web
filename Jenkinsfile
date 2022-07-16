pipeline {
  agent any
  environment {
    BUILD_ID = 'dontKillMe /var/lib/jenkins/workspace/bds-web-pineline'
  }
  stages {
    stage('Git Clone') { 
      steps {
        git branch: 'Sprint02', credentialsId: 'github-private-key', url: 'git@github.com:rongvangc/bds-web.git'
      }
    }
    stage('Go to main folder') { 
      steps {
        sh 'cd /var/lib/jenkins/workspace/bds-web-pineline'
      }
    }
    stage('Install package') { 
      steps {
        sh 'yarn'
      }
    }
    stage('Start webapp') { 
      steps {
        sh 'yarn build'
      }
    }
    stage('Start webapp') { 
      steps {
        sh 'pm2 start --interpreter bash yarn --name bds-web-pineline -- start --log --watch'
      }
    }
    stage('Save') { 
      steps {
        sh 'pm2 save'
      }
    }
  }
}