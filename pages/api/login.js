import User from "../../models/User";
import connectDb from "../../middleware/monooges";

const handler = async (req, res) => {
  if (req.method === "POST") {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      if (
        req.body.email === user.email &&
        req.body.password === user.password
      ) {
        res
          .status(200)
          .json({ success: true, email: user.email, name: user.name });
      } else {
        res.status(200).json({ success: false, error: "wrong credentials " });
      }
    }
  } else {
    res.status(200).json({ success: false, error: "no user found" });
  }
};

export default connectDb(handler);
