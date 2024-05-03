### STAGE 1:BUILD ###
FROM node:alpine AS build
WORKDIR /dist/src/app
RUN npm cache clean --force
COPY . .
RUN npm install -g @angular/cli
RUN npm install
RUN ng build --configuration=production --base-href /surveyterms/

### STAGE 2:RUN ###
# Defining nginx image to be used
FROM nginx:latest AS ngi
COPY --from=build /dist/src/app/dist/survey_ma_s84352/browser /usr/share/nginx/html
COPY /nginx.conf  /etc/nginx/conf.d/default.conf
EXPOSE 80
