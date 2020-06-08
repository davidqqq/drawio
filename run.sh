set -e
docker run --name drawio -v /Users/david/Desktop/ADSC/drawio/src/main/webapp:/usr/share/nginx/html:ro -v /Users/david/Desktop/ADSC/drawio/src/main/webcomponent/www/build:/usr/share/nginx/html/build:ro -p 8080:80 -d drawio-i

docker run --name draw-i -v /Users/david/Desktop/ADSC/drawio/src/main/webapp:/usr/share/drawio -v /Users/david/Desktop/ADSC/drawio/src/main/webcomponent/www/build:/usr/share/build -p 8080:80 -d draw.io