var iso = require('iso-global/recontext')

var slice = Array.prototype.slice
var root = 'https://wzrd.in/standalone/'
var ats = /@[^\/]+\/?/g
var slashes = /\//g

function wzrd () {
  var args = slice.call(arguments)
  var root = args.shift().replace(/\/*$/, '/')
  var identifier = args.shift()
  var path = root + identifier.replace(slashes, '%2F')
  var name = identifier.replace(ats, '').replace(slashes, '')
  args.unshift(name)
  args.unshift(path)
  return iso.apply(iso, args)
}

module.exports = function () {
  var args = slice.call(arguments)
  var first = args[0]

  if (typeof first == 'string') {
    args.unshift(root)
    return wzrd.apply(wzrd, args)
  }

  return wzrd.bind(wzrd, (
    typeof first == 'object' &&
    typeof first.root == 'string' ?
      first.root || root :
      root
  ))
}
