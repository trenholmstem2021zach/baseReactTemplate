# Mock Json Server

To test back setup a mock server.

- [JSON-Server](https://github.com/typicode/json-server#custom-output-example)

# Install JSON Server

npm install -g json-server

Create a db.json file with some data

{
"posts": [
{ "id": 1, "title": "json-server", "author": "typicode" },
{ "id": 2, "title": "json-server", "author": "typicode" },
{ "id": 3, "title": "json-server", "author": "typicode" }
],
"comments": [
{ "id": 1, "body": "some comment", "postId": 1 }
],
"profile": { "name": "typicode" }
}

# Start Server

json-server -p 3001 --watch ./db.json
