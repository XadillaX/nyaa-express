FROM xadillax/alinode:1.1.0

MAINTAINER XadillaX

RUN git clone https://github.com/XadillaX/nyaa-express.git /var/nyaa_express
WORKDIR /var/nyaa_express
RUN git checkout master &&\
        git pull

RUN source $TNVM_DIR/tnvm.sh &&\
        npm install
RUN source $TNVM_DIR/tnvm.sh &&\
        npm install -g nodemon

ENV PORT 80

EXPOSE 80
CMD [ "nodemon", "app.js" ]
