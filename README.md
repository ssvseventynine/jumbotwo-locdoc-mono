## 📸 Application Preview
![Dashboard Preview](resources/Jumbo_2.jpg)

## Enterprise Location Document Monitor

> A specialized enterprise document tracking system designed to ingest, persist, and showcase location-based legal and corporate document metadata across unified registry views.

[![AWS AWS-ELB](https://img.shields.io/badge/Infrastructure-AWS%20ELB-232F3E?logo=amazon-aws&logoColor=white)](#)
[![Kubernetes Kubernetes](https://img.shields.io/badge/Orchestration-Kubernetes-326CE5?logo=kubernetes&logoColor=white)](#)
[![Docker Container](https://img.shields.io/badge/Container-Docker-2496ED?logo=docker&logoColor=white)](#)
[![Backend Spring Boot](https://img.shields.io/badge/Backend-Spring%20Boot-6DB33F?logo=springboot&logoColor=white)](#)
[![Frontend React](https://img.shields.io/badge/Frontend-ReactJS-61DAFB?logo=react&logoColor=white)](#)

---

## 🌐 Live Application

* **Live AWS Registry Endpoint:** [http://k8s-default-jumbotwo-1e228bbc7b-104841548488e7b4.elb.us-east-1.amazonaws.com](http://k8s-default-jumbotwo-1e228bbc7b-104841548488e7b4.elb.us-east-1.amazonaws.com)

---

## 📐 System Architecture & Workflow

Application ek monolithic Spring Boot service par grounded hai jisko ReactJS front-end asynchronous HTTP/REST calls ke dwara access karta hai. Application persistence layer Spring Data JPA or MySQL database dynamic synchronization handle karti hai, aur poora ecosystem Docker images dwara AWS environment mein Elastic Load Balancer (ELB) dwara managed Kubernetes cluster par deployed hai.

```
+-------------------+        HTTP / REST        +-----------------------------+
|                   |  -----------------------> |    Spring Boot Backend      |
|  ReactJS Client   |                           |    (Port 8080)              |
|  (Document UI)    |  <----------------------- |                             |
+-------------------+    JSON Data / Sync       +--------------+--------------+
  (Port 3000)                                                  |
                                                               | Spring Data JPA
                                                               v
                                                      +-----------------+
                                                      | MySQL Database  |
                                                      | (Port 3306)     |
                                                      +-----------------+
```

---

## ✨ Key Features & Capabilities

* **Document Metadata Entry:** Interactive React UI component provided to input and capture new document parameters such as Document Name, Detailed Description, and Valuation Price.
* **Transactional Persistence Engine:** Robust Spring Data JPA binding to store and index location-based document metrics securely in relational database tables.
* **Registry Dashboard View:** Dynamic Document Registry interface publishing realtime persistent entries to users for active monitoring.
* **Cloud Orchestration & Load Balancing:** Packaged using Docker Desktop containers, running inside AWS Kubernetes cluster, managed through Elastic Load Balancer.

---

## 🛠️ Tech Stack & Dependencies

* **Back-End:** Java JRE, Spring Boot, Spring Data JPA
* **Front-End:** ReactJS, HTML5/CSS3, JavaScript (ES6+)
* **Database:** MySQL
* **Cloud & DevOps:** Docker, AWS (Elastic Load Balancing), Kubernetes (k8s)

---

## 🔌 Port Configuration & Environment Setup

| Component | Service | Default Port | Protocol |
| :--- | :--- | :--- | :--- |
| **Front-End API** | React Application | `3000` | HTTP |
| **Back-End API** | Spring Boot Service | `8080` | HTTP |
| **Database** | MySQL Data Source | `3306` | TCP |

---

## 💻 Local Getting Started

### Prerequisites
* Java Development Kit (JDK 11+)
* Node.js (v16+) & npm
* MySQL Server 8.0+
* Docker Desktop

---

### 1. Database Setup

Create the target database in MySQL:

```sql
CREATE DATABASE location_doc_monitor_db;
```

Configure connection parameters in `src/main/resources/application.properties`:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/location_doc_monitor_db?useSSL=false&serverTimezone=UTC
spring.datasource.username=root
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL8Dialect
```

---

### 2. Build and Run Backend

Run commands to start Spring Boot backend server:

```bash
# Clone the repository
git clone https://github.com/your-username/location-document-monitor.git
cd location-document-monitor

# Build and start server
./mvnw clean spring-boot:run
```

Backend API active on `http://localhost:8080`.

---

### 3. Build and Run Frontend

Navigate to client workspace and initiate server:

```bash
# Navigate to client directory
cd client

# Install packages
npm install

# Start React app
npm start
```

Front-end web portal active on `http://localhost:3000`.

---

## 🚀 Cloud Deployment

The service uses containerized artifacts built via Docker Desktop:
1. Docker images are built and pushed to image registries.
2. Deployment descriptors apply pod specifications directly to the target AWS Kubernetes cluster.
3. Traffic is routed via AWS Elastic Load Balancer (ELB) directly onto the Kubernetes node ports.