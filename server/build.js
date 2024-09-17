const express = require("express");
const app = express();
const port = 5173;
const path = require("path");
const cors = require("cors")
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

const myDB = client.db("market-DB")

app.use(cors())

// ---------------------------------------------------------
// BUILD ONLY STUFF ! (i forgot this last time, now its a pain to re-do everything)
app.use(express.static(path.join(__dirname, "/dist")));

// client side routing
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/dist/index.html"));
  });



// api endpoints
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get("/api/getCategories", async (req, res) => {
  try {
    const categoriesCollection = myDB.collection("Categories")
    const docs = await categoriesCollection.find().toArray();
    console.table(docs)
    res.send(docs)
  } catch (err){
    console.error("error fetching documents", err)
    res.status("500").send({message: "Internal Server Error"})
  }
});
