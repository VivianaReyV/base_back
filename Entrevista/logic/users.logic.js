var data = require ('../data/emails.data.js')


class UsersLogic {
    constructor(){

    }
    getEmails(callback) {
        data.getEmails((error, result) => {
            if (error) {
                callback(error)
                return
            }
            callback(null, result.rows)
        })
    }

    postEmail(inputs, callback) {
        data.postEmail(inputs, (error, result) => {
            if (error) {
                callback(error)
            }
            callback(null, result.rows[0].id)
        })
    }
}

const user = new UsersLogic()

module.exports = user