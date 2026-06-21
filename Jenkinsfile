pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
pipeline {
    agent any

    environment {
        NODE_ENV = 'production'
        APP_NAME = 'galleri-app'
    }

    stages {

        stage('Checkout Code') {
            steps {
                echo 'Checking out source code...'
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing Node.js dependencies...'
                sh 'node -v'
                sh 'npm install'
            }
        }

        stage('Code Quality Check') {
            steps {
                echo 'Running basic code validation...'
                sh 'npm audit || true'
            }
        }

        stage('Build Application') {
            steps {
                echo 'Building application...'
                sh 'echo "No build step required for plain Node.js app"'
            }
        }

        stage('Run Tests') {
            steps {
                echo 'Executing automated tests...'
                sh 'npm test'
            }
        }

        stage('Security Scan (Optional)') {
            steps {
                echo 'Checking vulnerabilities...'
                sh 'npm audit --audit-level=high || true'
            }
        }

        stage('Deploy to Render') {
            steps {
                echo 'Triggering Render deployment...'
                sh '''
                    curl -X POST https://api.render.com/deploy/srv-d8ns4smrnols73e4nd2g?key=GZJuKl2z_qc
                '''
            }
        }
    }

    post {
          success {
        echo 'Pipeline completed successfully ✔'
        mail to: 'kegoyacygan@gmail.com',
             subject: "SUCCESS: Jenkins Pipeline - ${env.JOB_NAME} #${env.BUILD_NUMBER}",
             body: "Build succeeded.\n\nJob: ${env.JOB_NAME}\nBuild: ${env.BUILD_NUMBER}\nCheck Render deployment."
    }

    failure {
        echo 'Pipeline failed ❌'
        mail to: 'kegoyacygan@gmail.com',
             subject: "FAILED: Jenkins Pipeline - ${env.JOB_NAME} #${env.BUILD_NUMBER}",
             body: "Build failed.\n\nJob: ${env.JOB_NAME}\nBuild: ${env.BUILD_NUMBER}\nCheck Jenkins console output."
    }
    
}
