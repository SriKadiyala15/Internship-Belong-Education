const express = require('express');
const app = express();
const cors = require('cors');

const productRoutes = require('./routes/products');
const authRoutes = require('./routes/auth');

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running successfully!");
});

app.use('/products', productRoutes);
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
