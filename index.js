const app = require('./app');
require('./route')(app);

const port = 3000;

app.listen(port, () => console.log(`Listening on port ${port}!`));
