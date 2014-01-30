
exports.viewProject = function(req, res) {
  var name = req.params.name;
  console.log(name);
  res.render('project', {
    'projectName': name
  });
};
