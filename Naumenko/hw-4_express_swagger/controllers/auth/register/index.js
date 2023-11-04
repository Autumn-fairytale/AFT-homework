export const set = (app) => {
  app.post("/api/register", (req, res) => {
    res.json(req.body);
  });
};
