FROM nginx:latest


# RUN mkdir -p /usrwebapp

VOLUME [ "/usr/share/build" ]
VOLUME [ "/usr/share/drawio" ]




# RUN ln -s /usr/build /usr/share/webapp/build
# RUN ln -s /usr/webapp /usr/share/nginx/html
RUN rm -rf /usr/share/nginx/html
RUN ln -s /usr/share/drawio /usr/share/nginx/html

RUN ln -s /usr/share/build /usr/share/nginx/html/

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]

