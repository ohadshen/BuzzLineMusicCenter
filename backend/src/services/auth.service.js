import { firebaseAdmin } from "../index.js";


const verify = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    console.error("No authorization header");
    res.status(401).json({ message: "No authorization header" });
  } else {
    const token = authorization.split(" ")[1];
    firebaseAdmin.auth().verifyIdToken(token)
    .then(decodedToken => {
      if (decodedToken) {
        req.user = decodedToken;
        return next();
      }
      return res.status(403).json({ message: 'Unauthorized' });
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).json({ message: 'Internal error while verifing user'});
    })
  }
};

export { verify };
