import fastify from "fastify";
import "dotenv/config";

const server = fastify();

server.get("/ping", async (req, res) => {
  return { message: "donk" };
});

server.listen({ port: 6969 }, (err, address) => {
  err ? process.exit(1) : console.log(`Server listening at ${address}`);
});
