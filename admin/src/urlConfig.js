const baseUrl = process.env.API || "http://localhost:3001/api"
//"https://flipkart-rest-server.herokuapp.com";
//const baseUrl = "http://localhost:2000";

export const api = `${baseUrl}/api`;

export const generatePublicUrl = (fileName) => {
  return `${baseUrl}/public/${fileName}`;
};