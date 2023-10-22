const app = require("./app")
const port = process.env.PORT || 3000

app.listen(port, () => 
    console.log("Aplikacja dziala na porcie 3000")
)
