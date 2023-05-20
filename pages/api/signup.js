import User from "../../models/User";
import connectDb from "../../middleware/monooges";

const handler = async (req, res) => {
  if (req.method === "POST") {
    let u = new User(req.body);
    await u.save();
    res.status(200).json({ success: "success" });
  } else {
    res.status(400).json({ message: "We only support POST" });
  }
};

export default connectDb(handler);
