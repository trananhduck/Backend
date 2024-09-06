import userService from "../services/userService"
let handleLogin = async (req, res) => {
    let email = req.body.email;
    console.log("your email" + email)
    let password = req.body.password;
    if (!email || !password) {
        return res.status(500).json({
            errCode: 1,
            message: "Missing inputs parameters",

        })
    }
    let userData = await userService.handleUserLogin(email, password)
    //check email exist

    return res.status(200).json({
        errCode: userData.errCode,
        message: userData.message,
        userData
    })
}

module.exports = {
    handleLogin: handleLogin
}