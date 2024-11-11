const express = require("express");
const app = express();
const port = 5173;
const path = require("path");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://hektorzaimidev:AtcyADMzMIT96Qzv@market-db.9xdzr.mongodb.net/?retryWrites=true&w=majority&appName=market-db";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
  }
}
run().catch(console.dir);

const myDB = client.db("market-DB");

app.use(cors());

// ---------------------------------------------------------
// BUILD ONLY STUFF ! (i forgot this last time, now its a pain to re-do everything)
app.use(express.static(path.join(__dirname, "/dist")));

// client side routing
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/dist/index.html"));
});
app.get("/flyers", (req, res) => {
  res.sendFile(path.join(__dirname, "/dist/index.html"));
});
app.get("/flyer/:id", (req, res) => {
  res.sendFile(path.join(__dirname, "/dist/index.html"));
});
app.get("/adminpage", (req, res) => {
  res.sendFile(path.join(__dirname, "/dist/index.html"));
});

// api endpoints
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get("/api/getProducts", async (req, res) => {
  const productsCollection = myDB.collection("Products");
  const docs = await productsCollection.find().toArray();
  res.send(docs);
});

app.get("/api/getFlyers", async (req, res) => {
  try {
    const flyersCollection = myDB.collection("Flyers");
    const docs = await flyersCollection.find().toArray();
    console.table(docs);
    res.send(docs);
  } catch (err) {
    console.error("error fetching documents", err);
    res.status("500").send({ message: "Internal Server Error" });
  }
});
app.get("/api/createProduct", async (req, res) => {
  try {
    const productOBJ = JSON.parse(req.query.productOBJ);
    console.table(productOBJ);

    const productsCollection = myDB.collection("Products");
    const result = await productsCollection.insertOne(productOBJ);

    res
      .status(201)
      .json({ message: "Product created successfully", id: result.insertedId });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "Error creating product", error: err.message });
  }
});

app.get("/api/getCategories", async (req, res) => {
  try {
    const categoriesCollection = myDB.collection("Categories");
    const docs = await categoriesCollection.find().toArray();
    console.table(docs);
    res.send(docs);
  } catch (err) {
    console.error("error fetching documents", err);
    res.status("500").send({ message: "Internal Server Error" });
  }
});
app.get("/api/flyer/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const document = await myDB
      .collection("Flyers")
      .findOne({ _id: new ObjectId(id) });
    if (!document) {
      return res.status(404).json({ message: "Document not found" });
    }

    res.json(document);
  } catch (error) {
    console.error("error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});
