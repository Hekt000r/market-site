const express = require("express");
const app = express();
const port = 5172;
const cors = require("cors");
const { ObjectId } = require("mongodb");
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

// api endpoints
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/getLocations", async (req, res) => {
  const locationsCollection = myDB.collection("Locations");
  const docs = await locationsCollection.find().toArray();
  res.send(docs);
});

app.get("/api/getProducts", async (req, res) => {
  const productsCollection = myDB.collection("Products");
  const docs = await productsCollection.find().toArray();
  res.send(docs);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
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
// index.js
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
app.get("/api/product/:id", async (req, res) => {
  const id = req.params.id;

  const product = await myDB
    .collection("Products")
    .findOne({ _id: new ObjectId(id) });
  if (!product) {
    return res.status(404).json({ message: "Product not found." });
  }
  res.json(product);
});

app.get("/api/login", async (req, res) => {
  const username = req.query.username;
  const password = req.query.password;
  try {
    // Check if required fields exist
    if (!username || !password) {
      return res.status(400).json({
        message: "Username and password are required",
        success: false,
      });
    }
    
    // Check if username and password match to a document in database
    const authUser = await myDB.collection("Admins").findOne({username: username, password: password})
    if (authUser) {
      return res.status(200).json({
        message: "Successfully authenticated",
        success: true,
      });
    }

    return res.status(400).json({message: "Unable to login, incorrect username or password", success: false})
  } catch (err) {}
});
// ^^^ Authentication, currently in-progress

app.get("/api/edit", async (req, res) => {
  const documentID = req.query.documentID
  const dataToEdit = req.query.dataToEdit
  const dataValue = req.query.dataValue
  myDB.collection("Products").updateOne({_id: documentID}, {$set: {[dataToEdit]: [dataValue] }})
  res.status(200).json({message: "edited successfully", dataEdited: dataToEdit, valueSet: dataValue})
})
app.get("/api/getProductsByTag", async (req, res) => {
  try {
      const tag = req.query.tag;
      
      if (!tag) {
          return res.status(400).json({ 
              error: "Tag parameter is required" 
          });
      }

      const products = await myDB.collection("Products")
          .find({ tags: {"$in" : [tag]} })
          .toArray();

      res.json(products);
  } catch (error) {
      console.error(error);
      res.status(500).json({ 
          error: "Failed to fetch products" 
      });
  }
});
async function migrateDocuments(client) {
  const collection = myDB.collection("Products");

  try {
    await collection.updateMany(
      {}, // Match all documents
      [
        {
          $set: {
            tags: ["Product Tag"],
          },
        },
      ]
    );
    console.log("Migration completed.");
  } catch (error) {
    console.error(error);
  }
} // Migration function, used for migrating old documents into new ones
