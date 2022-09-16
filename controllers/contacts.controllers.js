const showPersonName = (req,res) => {
    res.send("Hello, Anita! You are so beautiful!!")
};

module.exports = {showPersonName: showPersonName};
// or modules.exports = showPersonName