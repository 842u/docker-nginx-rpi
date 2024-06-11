# Overview

This project was built to gain a fundamental understanding of Docker, NGINX, and the development and deployment processes on private remote machines. Initially deployed on a Raspberry Pi private server, it is now hosted on AWS.

[Live demo](http://18.153.112.68)

## Tools & Technologies

[<img
    height="48"
    width="48"
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"
    alt="Docker"
/>](https://www.docker.com/)
[<img
    height="48"
    width="48"
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
    alt="GitHub"
/>](https://github.com/)
[<img
    height="48"
    width="48"
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-plain.svg"
    alt="Next.js"
/>](https://nextjs.org/)

<details>
  <summary>Others</summary>
  <table>
    <thead>
      <tr>
        <th></th>
        <th>Tool</th>
        <th>Used for/as</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <a href="https://nginx.org/" target="_blank">
            <img
              height="32"
              width="32"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg"
              alt="nginx"
            />
          </a>
        </td>
        <td>nginx</td>
        <td>reverse proxy, request forwarding</td>
      </tr>
      <tr>
        <td>
          <a href="https://www.raspberrypi.com/products/raspberry-pi-3-model-b-plus/" target="_blank">
            <img
              height="32"
              width="32"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/raspberrypi/raspberrypi-original.svg"
              alt="Raspberry Pi"
            />
          </a>
        </td>
        <td>Raspberry Pi</td>
        <td>private container hosting</td>
      </tr>
      <tr>
        <td>
          <a href="https://aws.amazon.com/" target="_blank">
            <img
              height="32"
              width="32"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
              alt="AWS"
            />
          </a>
        </td>
        <td>AWS</td>
        <td>container hosting</td>
      </tr>
      <tr>
        <td>
          <a href="https://code.visualstudio.com/" target="_blank">
            <img
              height="32"
              width="32"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg"
              alt="VS Code"
            />
          </a>
        </td>
        <td>VS Code</td>
        <td>remote development</td>
      </tr>
      <tr>
        <td>
          <a href="https://en.wikipedia.org/wiki/Secure_Shell" target="_blank">
            <img
              height="32"
              width="32"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ssh/ssh-original-wordmark.svg"
              alt="SSh"
            />
          </a>
        </td>
        <td>SSh</td>
        <td>remote development</td>
      </tr>
      <tr>
        <td>
          <a href="https://www.typescriptlang.org/" target="_blank">
            <img
              height="32"
              width="32"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
              alt="TypeScript"
            />
          </a>
        </td>
        <td>TypeScript</td>
      </tr>
      <tr>
        <td>
          <a href="https://tailwindcss.com/" target="_blank">
            <img
              height="32"
              width="32"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
              alt="TailwindCSS"
            />
          </a>
        </td>
        <td>TailwindCSS</td>
      </tr>
    </tbody>
  </table>
</details>

## Description

<details>
  <summary>Details</summary>

The main focus of this project was to get a grasp on containerization technology and the management of remote machines. At its core, it is a simple NextJS application. Incoming public requests are forwarded to the containerized application with NGiNX used as a reverse proxy, providing routing between containers, the host machine, and the web.

To centralize both the codebase and container images and simplify image management, the project utilizes GitHub Packages image registry.

The application takes two approaches on containerization strategy:

- Single-Container (`main` branch): In this approach, NGiNX is installed inside the container at the image build step in the Dockerfile. This method encloses the entire application in a single image, stored in the image repository. It provides a convenient way to download the image and run the container to start the application.

- Multi-Container (`multi-container` branch): Here, NGiNX is used as a separate image in a Docker Compose file. This method produces two separate services, one for the application and one for NGiNX. This adds a layer of separation but requires building images using Docker Compose, which results in longer build and start times.

Initially, the application was hosted on a Raspberry Pi 3B+ with a headless OS Lite and developed remotely in VS Code with the help of SSH. However, to ensure the demo application is always live regardless of private server availability and to learn how to deploy containers in the cloud, it was moved to AWS Elastic Container Service.

This project does not follow semantic versioning for images. Instead, there are two latest versions of images based on the `main` branch for different environments: `development` and `production`.

</details>

## Setup

<details>
  <summary>Single-Container</summary>

- Download image:
  ```bash
  docker pull ghcr.io/842u/docker-nginx-rpi:production
  ```
- Run container:
  ```bash
  docker run ghcr.io/842u/docker-nginx-rpi:production
  ```

</details>

<details>
  <summary>Multi-Container</summary>

- Checkout on `multi-container` branch.

- Build and run containers from docker-compose file:
  ```bash
  docker-compose -f ./docker/production/docker-compose.yaml up
  ```

</details>

## License

Code is under GNU GPLv3 license.
