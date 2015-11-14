FROM xadillax/alinode:1.1.0

MAINTAINER XadillaX

RUN mkdir /var/nyaa_express
WORKDIR /var/nyaa_express

ADD .. /var/nyaa_express

RUN source $TNVM_DIR/tnvm.sh &&\
        npm install
RUN source $TNVM_DIR/tnvm.sh &&\
        npm install -g pm2

ENV PORT 80

EXPOSE 80
CMD [ "pm2", "start", "app.js" ]
