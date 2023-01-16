let baseURL;
if (process.env.REACT_APP_NODE_ENV === "development") {
  baseURL = "http://localhost:8080";
} else {
  baseURL = "https://phonebook-holon.vercel.app";
}

export default baseURL;
