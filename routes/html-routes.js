// Not sure if I need these

const path = require("path");

module.exports = app => {

    // Index route loads index.html

    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    app.get("/exercise"), (req, res) => {
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    }
    
    // Do I need to have one for "/exercise?"?

    app.get("/stats"), (req, res) => {
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    }

};
