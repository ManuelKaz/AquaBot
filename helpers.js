function successfullMessage(msg) {
    return "✅ *KAZ*:  ```" + msg + "```"
}
function errorMessage(msg) {
    return "🛑 *KAZ*:  ```" + msg + "```"
}
function infoMessage(msg) {
    return "⏺️ *KAZ*:  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}
