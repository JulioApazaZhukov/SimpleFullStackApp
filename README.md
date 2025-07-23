# Simple To-Do Full Stack App

Created this app following [this](https://www.youtube.com/watch?v=ldYcgPKEZC8&t) tutorial.

The key differences are that Deno was used instead of Node and Vite instead of create-react-app.

## Commands

The following bash commands should be enough to run the server, create the DB, and run the client.

**Setup server**

```bash
cd server
deno install
deno --npm i express pg cors
deno task dev
```

**Setup Client**

```bash
cd ../client
deno init --npm vite
deno run dev
```