FROM node:10

WORKDIR /app

COPY . .

RUN npm install -qy
RUN npm install build

ENV license_server_url "https://license.frinx.io/api/v1"
ENV license_server_auth_token ""

EXPOSE 3001

CMD ["sh", "-c", "LICENSE_SERVER_URL=${license_server_url} LICENSE_SERVER_AUTH_TOKEN=${license_server_auth_token} node server.js"]