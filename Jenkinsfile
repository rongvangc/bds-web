pipeline {
  agent any
  tools {
    nodejs '18.4.0'
  }
  environment {
    BUILD_ID = 'dontKillMe /var/lib/jenkins/workspace/bds-web-pineline'
  }
  stages {
    stage('Git clone') { 
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
    stage('Build app') { 
      steps {
        sh 'yarn build'
      }
    }
    stage('Delete current app') { 
      steps {
        sh 'pm2 delete bds-web-pineline'
      }
    }
    stage('Start web') { 
      steps {
        sh 'pm2 start --interpreter bash yarn --name bds-web-pineline -- start'
      }
    }
    stage('Save') { 
      steps {
        sh 'pm2 save'
      }
    }
  }
}