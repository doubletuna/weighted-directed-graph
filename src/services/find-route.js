
const { constants } = require('../constants')
const _ = require('lodash')

exports.findRoute = async (startNode) => {

  const routes = constants.ROUTES;
  let nodes = Object.assign({}, constants.NODES);
  const visited = []

  const findRoute = (node) => {
    if (routes[node] && !_.find(visited, e => e === node)) {
      if (visited.length === 0) {
        nodes[node] = 0
      }
      visited.push(node)
      _.forEach(_.sortBy(routes[node], ['value'], ['asc']), n => {
        if (nodes[n.key] > nodes[node] + n.value) {
          nodes[n.key] = nodes[node] + n.value
        }
        findRoute(n.key)
      })
    }
    return nodes;
  }

  return findRoute(startNode);
}

