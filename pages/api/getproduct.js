// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Product from "../../models/Product";
import connectDb from "../../middleware/monooges";

const handler = async (req, res) => {
  let products = await Product.find();
  console.log("products", products);
  res.status(200).json({ products });
};
export default connectDb(handler);
