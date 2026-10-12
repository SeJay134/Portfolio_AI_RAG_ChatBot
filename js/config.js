// config.js

const API_URL =
    window.location.hostname === "localhost"
        ? "http://localhost:5005/chat"
        : "https://dangle-scarecrow-baguette.ngrok-free.dev/chat";