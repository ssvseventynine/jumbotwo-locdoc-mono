# Step 1: Use an official OpenJDK runtime image optimized for Java 21
FROM eclipse-temurin:21-jre-jammy

# Step 2: Set the internal working directory inside the container
WORKDIR /app

# Step 3: Copy the compiled jar file from your target folder into the container
COPY target/jumbotwo-locdoc-mono-0.0.1-SNAPSHOT.jar app.jar

# Step 4: Expose the backend port
EXPOSE 8080

# Step 5: Command to run the application execution engine
ENTRYPOINT ["java", "-jar", "app.jar"]