/**
 * Created by inet2005 on 11/20/15.
 */
var filterFn = require('./makeitmodularfilter.js')
var dir = process.argv[2]
var filterStr = process.argv[3]

filterFn(dir, filterStr, function (err, list) {
    if (err)
        return console.error('There was an error:', err)

    list.forEach(function (file) {
        console.log(file)
    })
})