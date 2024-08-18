# Nginx and Node.js with Docker Compose

This guide will help you set up and start a Node.js application combined with Nginx using Docker Compose with feature Reverse Proxy, Cache, Load balancing.

## Installation

1. Clone the repository:

```bash
git clone git@github.com:danglevinhphuc/nginx-feature.git
cd nginx-feature
```

2. Start feature Reverse Proxy
```bash
docker-compose -f docker-compose-reverse-proxy.yaml up --build
```
3. Start feature Cache
```bash 
docker-compose -f docker-compose-cache.yaml up --build
```
4. Start feature Load balancing
```bash
docker-compose -f docker-compose-load-balancer.yaml up --build
```
5. If close service docker started ex feature Load balancing
```bash
docker-compose -f docker-compose-load-balancer.yaml down
```