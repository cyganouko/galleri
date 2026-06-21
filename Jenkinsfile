pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                echo "Building application..."
                sh 'node -v'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                curl -X POST https://api.render.com/deploy/srv-d8ns4smrnols73e4nd2g?key=GZJuKl2z_qc
                '''
            }
        }
    }

    post {
        success {
            echo "Pipeline successful"
        }

        failure {
            echo "Pipeline failed"
        }
    }
}
