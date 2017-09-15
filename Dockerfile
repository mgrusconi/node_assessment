FROM node:6.11.3

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

EXPOSE 80

COPY ./entrypoint.sh /
CMD ["/entrypoint.sh"]