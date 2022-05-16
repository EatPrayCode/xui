const sayHi = (req, res) => {
  const name = req.query.name || 'there';

  fetch('https://www.deccanchronicle.com/nation/current-affairs/150522/call-to-reduce-workload-and-stress-of-medicos.html')
  .then(response => response.json())
  .then(formatedResponse =>    res.end(formatedResponse))

};
module.exports = sayHi;
