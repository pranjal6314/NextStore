import Product from "../../models/Product";
import connectDb from "../../middleware/monooges";

const handler = async (req, res) => {
  if (req.method === "POST") {
    for (let i = 0; i < req.body.length; i++) {
      let p = await Product.findByIdAndUpdate(req.body[i]._id, req.body[i]);
    }
    res.status(200).json({ sussess: "success" });
  } else {
    res.status(400).json({ message: "We only support POST" });
  }
};

export default connectDb(handler);
