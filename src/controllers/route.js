const routeService = require('../services/find-route')

exports.getRoute = async (req, res) => {

  const startNode = req.params.start
  const endNode = req.params.end

  const result = await routeService.findRoute(startNode)

  res.status(200).send({ data: result, distance: result[endNode] })
}

