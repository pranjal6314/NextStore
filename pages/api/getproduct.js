import Product from "../../models/Product";
import connectDb from "../../middleware/monooges";

const handler = async (req, res) => {
  let products = await Product.find();
  res.status(200).json({ products });
};
export default connectDb(handler);
