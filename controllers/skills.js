const SkillModel = require('../models/skill')

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
    edit,
    update
}

function index(req, res) {
    res.render('skills/index', {
        skills: SkillModel.getAll()
    })
}

function show(req,res) {
    res.render('skills/show', {
        skill: SkillModel.getOne(req.params.id)
    })
}

function newSkill(req, res) {
    res.render('skills/new')
}

function create(req, res) {
    SkillModel.create(req.body)
    res.redirect('/skills')
}
function deleteSkill(req,res) {
    SkillModel.deleteOne(req.params.id)
    res.redirect('/skills')
}

function edit(req, res) {
    res.render('skills/edit', {
        skill: SkillModel.getOne(req.params.id)
    });
}

function update(req, res) {
    SkillModel.updateOne(req.params.id, req.body)
    res.redirect('/skills')
}