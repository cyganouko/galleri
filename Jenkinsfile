pipeline {
    agent any

    environment {
        NODE_ENV = 'production'
        APP_NAME = 'galleri-app'
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies...'
                sh 'node -v'
                sh 'npm install'
            }
        }

        stage('Code Quality Check') {
            steps {
                echo 'Running npm audit...'
                sh 'npm audit || true'
            }
        }

        stage('Build') {
            steps {
                echo 'Build stage (no build tool required)'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                sh 'npx jest'
            }
        }

        stage('Deploy to Render') {
            steps {
                echo 'Deploying to Render...'
                sh '''
                    curl -X POST https://api.render.com/deploy/srv-d8ns4smrnols73e4nd2g?key=GZJuKl2z_qc
                '''
            }
        }
    }

    post {
        success {
            echo 'Pipeline SUCCESS ✔'
            mail to: 'kegoyacygan@gmail.com',
                 subject: "SUCCESS: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                 body:"Build successful.\nCheck Render deployment."
        }

        failure {
            echo 'Pipeline FAILED ❌'
            mail to: 'kegoyacygan@gmail.com',
                 subject: "FAILED: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                 body: "Check Jenkins logs."
        }
    }
}
          
