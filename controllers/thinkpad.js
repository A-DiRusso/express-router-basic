
//POST Create
function create(req, res) {
    
    res.json({message: "You created"});
}

//GET Retrieve
function retrieveAll(req, res) {
    // const allthinkpads = await thinkpad.getAll();
    res.json({message: "You retrieved all"});
}

//PUT Update
function update(req, res) {
    res.json({message: "You updated"});
}

//DELETE Delete
function deleteOne(req, res) {
    res.json({message: "You deleted"});
}

module.exports = {
    create,
    retrieveAll,
    update,
    deleteOne
};