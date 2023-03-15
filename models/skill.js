const skills = [
    {id: 12101, skill: 'JavaScript', isProficient: true},
    {id: 62315, skill: 'Node/Express', isProficient: false},
    {id: 74124, skill: 'React', isProficient: false}
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    updateOne
}

function getAll() {
    return skills
}

function getOne(id) {
    return skills.find(skill => skill.id === parseInt(id))
}

function create(skill) {
    skill.id = Date.now() % 10000;
    skills.push(skill)
}

function deleteOne(id) {
    const idx = skills.findIndex(skill => skill.id === parseInt(id))
    skills.splice(idx, 1)
}

function updateOne(id, body) {
    const idx = skills.findIndex(skill => skill.id === parseInt(id))
    skills[idx].skill = body.skill
    skills[idx].isProficient = !!body.isProficient
}