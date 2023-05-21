import User from "../../models/User";
import connectDb from "../../middleware/monooges";
var CryptoJS = require("crypto-js");
const handler = async (req, res) => {
  if (req.method === "POST") {
    let user = await User.findOne({ email: req.body.email });
    const bytes = CryptoJS.AES.decrypt(user.password, "sec1234");
    var decryptedData = bytes.toString(CryptoJS.enc.Utf8);
    // var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

    if (user) {
      if (
        req.body.email === user.email &&
        decryptedData === req.body.password
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
