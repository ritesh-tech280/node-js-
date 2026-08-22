const { getUser } = require("../service/auth");

function checkAuthorizeUser(req, res, next) {
  const tokenCookie = req.cookies?.token;
  req.user = null;
  if (!tokenCookie) return next();
  const token = tokenCookie
  const user = getUser(token);
  req.user = user;
  return next();
}

function restrictTo(roles = []) {
  return function (req, res, next) {
    if (!req.user) return res.redirect("/login");
    if (!req.user.role || !roles.includes(req.user.role)) {
      return res.end("UnAuthorize");
    }
    return next();
  };
}

module.exports = {
  checkAuthorizeUser,
  restrictTo,
};
