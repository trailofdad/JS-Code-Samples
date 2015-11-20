/**
 * Created by inet2005 on 11/20/15.
 */
var http = require('http')
var bl = require('bl')

http.get(process.argv[2], function (response) {
    response.pipe(bl(function (err, data) {
        if (err)
            return console.error(data)
        data = data.toString()
        console.log(data.length)
        console.log(data)
    }))
})