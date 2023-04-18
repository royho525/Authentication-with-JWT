
const authController = require("../controllers/authController");
const middlewareController = require("../controllers/middlewareController");
const router = require("express").Router();

router.post("/register", authController.registerUser);
router.post("/login", authController.loginUser);
//REFRESH
router.post("/refresh", authController.requestRefreshToken)
//LOGOUT
router.post("/logout", middlewareController.verifyToken, authController.userLogout)
module.exports = router;