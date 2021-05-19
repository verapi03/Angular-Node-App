const server = require("./server");
const {PORT, MONGO_URI} = require("./config");
const mongoose = require("mongoose");

mongoose
    .connect(MONGO_URI, {useNewUrlParser:true})
    .then(_ => {
        server.listen(PORT, () => {
            console.log(`TechnologiesApp backend running on port ${PORT}`);
        });
    })
    .catch(console.log);
