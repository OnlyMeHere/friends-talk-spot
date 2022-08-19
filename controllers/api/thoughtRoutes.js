



app.get('/all-items', (req, res) => {
    // Using model in route to find all documents that are instances of that model
    Item.find({}, (err, result) => {
      if (err) {
        res.status(500).send({ message: 'Internal Server Error' });
      } else {
        res.status(200).json(result);
      }
    });
  });