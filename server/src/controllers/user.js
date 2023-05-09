
const sequelize = require('../models/index');
const initModel = require('../models/init-models');
const models = initModel(sequelize)
const { v4 } = require('uuid')
const bcrypt = require('bcrypt');
const { succesCode, failCode, errorCode } = require('../reponse/reponse');
const jwt = require('jsonwebtoken')
const { Op } = require('sequelize')
const register = async (req, res) => {
    const { name, email, password, customer_phone } = req.body;
    try {
        let checkEmail = await models.user.findOne({
            where: {
                [Op.or]: [{ email: email }, { customer_phone: customer_phone }]
            }
        })
        if (checkEmail) {
            failCode(res, "Email hoặc số điện thoại đã tồn tại")
        } else {
            const user = await models.user.create({
                customer_phone,
                name,
                email,
                password: bcrypt.hashSync(password, 10),
                role: "1"
            })
            const token = jwt.sign({ user }, "BAOMAT", { expiresIn: '1d' })

            succesCode(res, { token, user }, "Register SuccessFull!!")
        }

    } catch (error) {
        errorCode(req, 'Lỗi Backend')
    }
}


const login = async (req, res) => {
    const { name, password } = req.body;
    try {
        const user = await models.user.findOne({ where: { name: name } });
        if (user) {
            const checkPass = bcrypt.compareSync(password, user.password);
            if (checkPass) {
                let token = jwt.sign({ user }, "BAOMAT", { expiresIn: '1d' })
                succesCode(res, { token, user }, "Login Thành Công")
            } else {
                failCode(res, "Sai Mật Khẩu")
            }
        } else {
            failCode(res, "Tài Khoản Không Tồn Tại")
        }
    } catch (error) {
        errorCode(res, "Lỗi Backend")
    }
}

module.exports = { register, login }