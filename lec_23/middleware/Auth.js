const jwt = require("jsonwebtoken");

function isLogin(req, res, next) {
    try {
        let token = req.headers.authorization;
        if (!token) {
            return res.json({ success: false, message: "No token provided" });
        }
        const decoded = jwt.verify(token, "okkkk");
        if (!decoded) {
            return res.json({ success: false, message: "Invalid token" });
        }
        req.user = decoded.user;
        next();
    } catch (err) {
        return res.json({ success: false, message: "Invalid or expired token" });
    }
}
module.exports = isLogin;