export async function createOrder(req, res) {
  // get user info
  if (erq.user == null) {
    res.status(403).json({
      message: "Please login and try again",
    });
    return;
  }

  const orderInfo = req.body;

  //add current user name if not provided
  //orderId generate
  //create order object
}
