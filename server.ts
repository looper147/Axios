const jsonServer = require("json-server");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const cryptoModule = require("crypto");

// Generate secret key
const secretKey = cryptoModule.randomBytes(32).toString("hex");

// Enable CORS
server.use(cors());

server.use(middlewares);
server.use(jsonServer.bodyParser);

// Authentication endpoint
server.post("/auth/login", (req, res) => {
  const { email, password } = req.body;

  // Find user by email and password
  const user = router.db.get("users").find({ email, password }).value();

  if (user) {
    // Generate token
    const token = jwt.sign({ id: user.id }, secretKey);

    // Save token to tokens array in db.json
    router.db.get("tokens").push(token).write();

    // Return the token in the response
    res.status(200).json({ token });
  } else {
    res.status(401).json({ error: "Invalid credentials" });
  }
});

server.use(router);

// Start the server
server.listen(3000, () => {
  console.log("JSON Server is running on port 3000");
});
