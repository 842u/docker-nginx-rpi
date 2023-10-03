# Docker Deployment with NGINX Reverse Proxy for Next.js Website

## Background

This project was built to gain a basic understanding of Docker, NGINX, and the development and deployment processes on private remote machines. It demonstrates basics of Docker images and containers usage and how they can be integrated with CI/CD pipeline.

## Technologies

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Docker](https://www.docker.com/)
- [NGiNX](https://nginx.org/)
- [Raspberry Pi 3B +](https://www.raspberrypi.com/products/raspberry-pi-3-model-b-plus/)

## Description

<details>

  <summary>Application</summary>

### Application

The core application framework is [Next.js](https://nextjs.org/) with [TypeScript](https://www.typescriptlang.org/) and [TailwindCSS](https://tailwindcss.com/).

While the frontend remains a simple Single Page Application (SPA) with a home screen providing a brief project description and there is no other functionality, the primary focus here is the integration of these technologies with containerization.

</details>

<details>

  <summary>Containerization</summary>

### Containerization

Containerization is an approach to package, distribute and manage applications alongside with other dependencies. It offers several reasons why it has been chosen for this project.

[Docker](https://www.docker.com/) was chosen as containerization tool because of its popularity and market share. That provides plenty of learning materials and a more mature ecosystem.

Compared to traditional virtual machines, containers share the same OS kernel with host machine which makes them more efficient. In situations where application is hosted on machine with limited resources such efficiency improvement is crucial.

It also encapsulates whole application, its dependencies and environment in which it runs in containers. That means it can be run consistently in different environments and on different machines. In this specific case, application was developed on Windows `x64` CPU architecture but hosted on Raspberry Pi OS Lite `AArch64/ARM64` CPU architecture.

Application can be easily started just by downloading Docker image and then running container based on that image or by running [Docker Compose](https://docs.docker.com/compose/) files without worrying about compatibility issues.

Containers also provides layer of isolation from both other containers and host machine. Each container has its own file system so it limits security issues.

To host Docker images, the project utilizes the [GitHub Packages](https://github.com/features/packages) container registry instead of another popular choice [Docker Hub](https://hub.docker.com/). This choice was made to centralize both the codebase and container images in one location and simplify image management.

In this project there are no images semantic versioning, instead, there are two latest versions of images based on `main` branch for different environments: `development` and `production`.

In general, there are two approaches to running this application production image. To provide request routing, between containers, host machine and web, [NGINX](https://nginx.org/) have to be installed.

- First approach (Single-Container) is to install [NGINX](https://nginx.org/) inside of container at image build step inside Dockerfile. This lets us enclose whole application as one image and store it in images repository as a whole which gives us a convenient and simple way to just download image and run container to start application.

- Second approach (Multi-Container) is to use a separate image of [NGINX](https://nginx.org/) and use it in [Docker Compose](https://docs.docker.com/compose/) file which will produce two separate services, one for application and second for [NGINX](https://nginx.org/). This provides another layer of separation but requires to build images by using [Docker Compose](https://docs.docker.com/compose/) which will lead to longer build and start time.

</details>

<details>

  <summary>Deployment</summary>

### Deployment

Deployment involves running the Docker containers on a private remote server hosted on [Raspberry Pi 3B+](https://www.raspberrypi.com/products/raspberry-pi-3-model-b-plus/).

Remote host machine uses Raspberry Pi OS Lite which is headless version of standard Raspberry Pi OS. Therefore whole deployment process and administration is done on local machine via [Secure Shell](https://en.wikipedia.org/wiki/Secure_Shell).

[NGINX](https://nginx.org/) is configured as simple reverse proxy and enables routing of incoming web traffic to the containerized application. This setup enhances security and performance while simplifying the management of containerized services.

</details>

<details>

  <summary>CI/CD</summary>

### CI/CD

Continuous Integration and Continuous Deployment pipelines are set up using [`GitHub Actions`](https://github.com/features/actions) workflow.

This workflow consists of:

- Building image.
- Tagging image version.
- Login to [GitHub Packages](https://github.com/features/packages) container registry.
- Pushing image to registry.
- Removing old versions of images.

</details>
