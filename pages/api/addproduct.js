import Product from "../../models/Product";
import connectDb from "../../middleware/monooges";

const handler = async (req, res) => {
  if (req.method === "POST") {
    for (let i = 0; i < req.body.length; i++) {
      let p = new Product({
        title: req.body[i].title,
        slug: req.body[i].slug,
        desc: req.body[i].desc,
        img: req.body[i].img,
        category: req.body[i].category,
        size: req.body[i].size,
        color: req.body[i].color,
        price: req.body[i].price,
      });
      await p.save();
    }
    res.status(200).json({ message: "Products added" });
  } else {
    res.status(400).json({ message: "We only support POST" });
  }
};

export default connectDb(handler);
