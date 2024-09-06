import { where } from "sequelize"
import db from "../models/index"
import bcrypt from "bcryptjs"
import user from "../models/user"
let handleUserLogin = (email, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userData = {}
            let isExist = await checkUserEmail(email);
            if (isExist) {
                //user already exist

                let user = await db.Users.findOne({
                    where: { email: email }
                })
                if (user) {
                    //compare password
                    //bcrypt.compareSync("not_bacon", hash)
                    let check = await bcrypt.compareSync(password, user.password)
                    if (check) {
                        userData.errCode = 0;
                        userData.errMessage = 'ok',
                            userData.user = user
                    } else {
                        userData.errCode = 3;
                        userData.errMessage = 'Wrong password'
                    }
                } else {
                    userData.errCode = 2;
                    userData.errMessage = "User's not found"
                }
            } else {
                //return err
                userData.errCode = 1
                userData.errMessage = "Your's email isn't exist in your system.Pls try other one"
            }
        } catch (e) {
            reject(e)
        }
    })
}
let checkUserEmail = (userEmail) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.Users.findOne({
                where: { email: userEmail }
            })
            if (user) {
                resolve(true)
            } else {
                resolve(false)
            }

        } catch (e) {
            reject(e);
        }
    })
}

module.exports = {
    handleUserLogin: handleUserLogin
}