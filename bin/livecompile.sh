# call me from parent dir!

if [ ! "$PORT" ]
then
  PORT=3000
fi

static -H '{"Cache-Control": "no-cache, must-revalidate"}' --port $PORT &
nodemon --exec "sh $(pwd)/bin/build.sh" -e jade,styl
