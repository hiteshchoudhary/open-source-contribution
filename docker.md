# Docker Fundamentals

Docker is a platform for developing, shipping, and running applications inside containers. Containers are lightweight, portable, and ensure consistency across environments.

## Key Concepts

- **Image**: A read-only template with instructions for creating a container.
- **Container**: A runnable instance of an image.
- **Dockerfile**: A text file with instructions to build a Docker image.
- **Docker Hub**: A cloud-based registry for Docker images.

## Basic Docker Commands

### 1. Docker Version & Info

```sh
docker --version
docker info
```

### 2. Working with Images

- **Pull an image:**
    ```sh
    docker pull ubuntu
    ```
- **List images:**
    ```sh
    docker images
    ```
- **Remove an image:**
    ```sh
    docker rmi <image_name>
    ```

### 3. Working with Containers

- **Run a container:**
    ```sh
    docker run -it ubuntu bash
    ```
- **List running containers:**
    ```sh
    docker ps
    ```
- **List all containers:**
    ```sh
    docker ps -a
    ```
- **Stop a container:**
    ```sh
    docker stop <container_id>
    ```
- **Remove a container:**
    ```sh
    docker rm <container_id>
    ```

### 4. Building Images

- **Build from Dockerfile:**
    ```sh
    docker build -t myimage .
    ```

### 5. Docker Compose

- **Start services:**
    ```sh
    docker-compose up
    ```
- **Stop services:**
    ```sh
    docker-compose down
    ```

## Useful Resources

- [Docker Documentation](https://docs.docker.com/)
- [Docker Hub](https://hub.docker.com/)

---