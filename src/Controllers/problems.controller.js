async function testController(req, res) {
  try {
    return res.json({ message: "Controller flow is working" });
  } catch (error) {
    console.log(error);
    throw error;
  }
}

module.exports = { testController };
