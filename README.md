# Compocrew ry website

Build steps:
1. Clone the repository
2. Copy .env.example to .env, change values where needed
3. `make build` to build the container
4. `make sh`, `npm install` and `exit` to install Svelte
5. `make dev` to start Svelte development server

To build the static site:
`make up` to build the website to `build` directory