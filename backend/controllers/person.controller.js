const Person = require('./models/person.model');

module.exports = {
    findById: async (req, res) => {
        const { id } = req.body.id;
        const person = await Person.findById(id);

        return res.json(person);
    }
}