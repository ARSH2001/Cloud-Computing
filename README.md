# ☁️ Cloud Computing Course Projects - Fall 2022

[![Made With](https://img.shields.io/badge/Made%20with-Python%20%26%20Cloud%20Platforms-blue)]()
[![University](https://img.shields.io/badge/University-IUT-orange)]()

---

## 📚 Table of Contents

- [About The Repository](#about-the-repository)
- [Folders](#folders)
  - [Docker](#docker)
  - [Kubernetes](#kubernetes)
  - [Hadoop and MapReduce](#hadoop-and-mapreduce)
  - [OpenStack Cloud](#openstack-cloud)
  - [Presentation: Deep Learning and Apache Spark](#presentation-deep-learning-and-apache-spark)
  - [Theory: Theoretical Homeworks](#theory-theoretical-homeworks)
- [How to Use](#how-to-use)

---

## 📖 About The Repository

This repository contains practical and theoretical assignments from the **Cloud Computing** course at **Isfahan University of Technology (Fall 2022)**.

The assignments cover Docker containerization, Kubernetes orchestration, distributed processing with Hadoop/MapReduce, cloud platform management with OpenStack, and a presentation about combining Deep Learning with Apache Spark.

---

## 📁 Folders

### Docker
- Build a simple Node.js web service.
- Create a **Dockerfile** to containerize the application.
- Upload Docker images to **DockerHub**.
- Use **Docker Compose** to orchestrate multi-container applications (backend + PostgreSQL database).
- Bind mount volumes and setup internal Docker networking.

📄 Reference: [`HW2_practical_Cloud_ECE_IUT.pdf`](./path/to/HW2_practical_Cloud_ECE_IUT.pdf)

---

### Kubernetes
- Deploy applications on a local Kubernetes cluster using **Minikube** or **Kind**.
- Create a **Deployment YAML** for Nginx with 3 replicas.
- Expose the service on port 3000.
- Manage Pods, ReplicaSets, and Services.
- Port-forward service for browser testing.

📄 Reference: [`HW3_cloud.pdf`](./path/to/HW3_cloud.pdf)

---

### Hadoop and MapReduce
- Write a simple **WordCount** application using **Java** or **Python**.
- Run the application on large files (~64MB, 640MB, and 300MB).
- Analyze the number of Map and Reduce tasks in different cases.
- Tune parameters to control the number of tasks.
- Study the relationship between file size and number of MapReduce tasks.

📄 Reference: [`HW5_MapReduce.pdf`](./path/to/HW5_MapReduce.pdf)

---

### OpenStack Cloud
- Perform operations using **OpenStack Horizon Dashboard**:
  - Create Zones, Flavors, Volumes, and Instances.
  - Attach and detach Volumes.
  - Take Snapshots.
  - Experiment with Networking and IP settings.
- Use **OpenStack SDK** for programmatic interaction.
- Understand concepts of **Proxy Layer**, **Resource Layer**, and **Cloud Layer**.

📄 Reference: [`openstackcloud-401.pdf`](./path/to/openstackcloud-401.pdf)

---

### Presentation: Deep Learning and Apache Spark
- Overview of integrating **Deep Learning** with **Apache Spark**.
- Tools and libraries discussed:
  - **Elephas**, **BigDL**, **HopsML**, **Horovod**, **TensorFlowOnSpark**.
- Topics:
  - Distributed Training
  - Model Parallelism vs Data Parallelism
  - Kubernetes Model Serving
  - Model Monitoring with Spark Streaming

📄 Reference: [`Deep Learning and Apache Spark.pdf`](./path/to/Deep%20Learning%20and%20Apache%20Spark.pdf)

---

### Theory: Theoretical Homeworks
- Theoretical exploration of key cloud concepts:
  - **Region vs Zone** distinctions.
  - **I/O methods with SAN** and **Block Virtualization**.
  - **Data Striping** vs **Data Replication**.
  - Concepts of **Elasticity** and **Scalability**.
  - **BigTable**, **HBase**, and **Megastore** architecture comparisons.

📄 Reference: [`HW1_Theory_Cloud_ECE_IUT.pdf`](./path/to/HW1_Theory_Cloud_ECE_IUT.pdf)

---

## 🚀 How to Use

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ARSH2001/Cloud-Computing.git
2. Explore individual folders for practical and theoretical assignments.

3. Install needed platforms/tools like Docker, Minikube, Hadoop, OpenStack SDK, etc., according to the assignment requirements.
