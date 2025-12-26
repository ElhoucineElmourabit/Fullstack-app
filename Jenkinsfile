pipeline {
    agent any
    environment {
        DOCKER_HUB_USER = "houss03"
        APP_IP = "${env.APP_SERVER_IP}"
        RDS_LINK = "${env.RDS_ENDPOINT}"
    }
    stages {
        stage('Build Backend') {
            steps {
                dir('backend') {
                    sh 'mvn clean package -DskipTests'
                    sh "docker build -t ${DOCKER_HUB_USER}/products-backend:latest ."
                }
            }
        }
        stage('Build Frontend') {
            steps {
                dir('frontend') {
                    sh "docker build --build-arg NEXT_PUBLIC_API_URL=http://${APP_IP}:8080 -t ${DOCKER_HUB_USER}/products-frontend:latest ."
                }
            }
        }
        stage('Push to DockerHub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'USER', passwordVariable: 'PASS')]) {
                    sh "echo $PASS | docker login -u $USER --password-stdin"
                    sh "docker push ${DOCKER_HUB_USER}/products-backend:latest"
                    sh "docker push ${DOCKER_HUB_USER}/products-frontend:latest"
                }
            }
        }
        stage('Deploy') {
            steps {
                sshagent(['ec2-ssh-key']) {
                    withCredentials([
                        string(credentialsId: 'RDS_USER', variable: 'DB_USER'),
                        string(credentialsId: 'RDS_PASS', variable: 'DB_PASS')
                    ]) {
                        sh "scp -o StrictHostKeyChecking=no docker-compose.yml ubuntu@${APP_IP}:/home/ubuntu/"
                        
                        sh """
                        ssh -o StrictHostKeyChecking=no ubuntu@${APP_IP} "
                            export DOCKER_HUB_USER=${DOCKER_HUB_USER}
                            export DB_URL=jdbc:mysql://${RDS_LINK}:3306/product_db
                            export DB_USERNAME=${DB_USER}
                            export DB_PASSWORD=${DB_PASS}
                            docker-compose pull
                            docker-compose up -d
                        "
                        """
                    }
                }
            }
        }
    }
}