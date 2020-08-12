
const { constants } = require('../constants')
const _ = require('lodash')

exports.getRoute = async (req, res, next) => {
  
  const startNode = req.params.start
  const endNode = req.params.end

  const routes = constants.ROUTES; 
  let nodes = Object.assign({}, constants.NODES);
  const visited = []

  const findRoute = (node) => {
    if (routes[node] && !_.find(visited, e => e === node)) {
      if (visited.length === 0) {
        nodes[node] = 0
      }
      visited.push(node)
      _.forEach(routes[node], (n, key) => {
        if (nodes[key] > nodes[node] + n) {
          nodes[key] = nodes[node] + n
        }
        findRoute(key)
      })
    }
    return nodes;
  }

  const result = findRoute(startNode);

  res.status(200).send({ data: result, distance: result[endNode] })
}

