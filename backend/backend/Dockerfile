FROM eclipse-temurin:17-jdk-alpine

WORKDIR /app

COPY target/*.jar app.jar

EXPOSE 8080

# Limit memory for t3.micro
ENTRYPOINT ["java", "-Xms256m", "-Xmx512m", "-jar", "app.jar"]
