# Deployment with Docker

Build the Docker image.

```bash
docker build -t survey-terms .
```

Run the docker image with setting up ports.

```bash
docker run --name=survey-terms -d -p 4220:80 --restart always survey-terms
```
