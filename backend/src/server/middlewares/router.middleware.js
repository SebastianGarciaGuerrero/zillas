export const tracker = (req, _, next) => {
  const logInfo = {
    method: req.method,
    path: req.path,
    query: req.query,
    body: req.body,
    timestamp: new Date()
  }

  if (req.body && req.body.password) {
    logInfo.originalPassword = req.body.password
  }

  console.log(logInfo)
  next()
}
