import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID OHAzO6Fjx7QBzR_pgOizSiClPN3PA30aiePWzEYC1o0",
  },
});
