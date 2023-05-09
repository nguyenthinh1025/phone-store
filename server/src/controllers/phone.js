const sequelize = require('../models/index');
const initModel = require('../models/init-models');
const { succesCode, errorCode, failCode } = require('../reponse/reponse');
const models = initModel(sequelize)
const { Op } = require('sequelize');

const getPhone = async (req, res) => {
    try {
        let result = await models.phones.findAll({ include: ['brand'] })
        succesCode(res, result, "Lấy Danh Sách Điện Thọai Thành Công!!!")
    } catch (error) {
        errorCode(res, "Lỗi Backend")
    }
}

const getType = async (req, res) => {
    try {
        let result = await models.brands.findAll({ include: ['phones'] })
        succesCode(res, result, "Lấy Danh Sách Loại Điện Thọai Thành Công!!!")
    } catch (error) {
        errorCode(res, "Lỗi Backend")
    }
}
const getListType = async (req, res) => {
    try {
        let result = await models.brands.findAll()
        succesCode(res, result, "Lấy Danh Sách Loại Điện Thoại Thành Công!!")
    } catch (error) {
        errorCode(res, "Lổi Backend")
    }
}

const createPhone = async (req, res) => {
    const { name, brand_id, price, description, image_url, detail, quantity } = req.body;
    try {
        let result = await models.phones.create({
            name,
            brand_id,
            price,
            description,
            image_url,
            detail,
            quantity
        })
        succesCode(res, result, "Tạo Mới Điện Thọai Thành Công!!!")
    } catch (error) {
        errorCode(res, "Lỗi Backend")
    }
}


const paganation = async (req, res) => {
    const { offset, limit } = req.params;
    try {
        let result = await models.phones.findAll({
            raw: true,
            nest: true,

            offset: +offset * +limit - +offset,
            limit: +offset,
            include: ['brand']
        })
        succesCode(res, result, "Lấy Danh Sách Điện Thoại Phân Trang Thành Công")
    } catch (error) {
        errorCode(res, 'Lỗi Backend')
    }
}



const searchPhone = async (req, res) => {
    const { name, price } = req.query;
    const filter = {};

    if (name) {
        filter.name = { [Op.like]: `%${name}%` };
    }

    if (price) {
        filter.price = { [Op.lt]: price };
    }

    try {
        let result = await models.phones.findAll({
            where: filter,
            include: ['brand']
        });
        succesCode(res, result, "Tìm Kiếm Thành Công")
    } catch (error) {
        errorCode(res, "Lỗi Backend")
    }
}



const updatePhone = async (req, res) => {
    const { name, brand_id, price, description, image_url, quantity } = req.body;
    const { id } = req.params;

    try {
        let result = await models.phones.findOne({ where: { id: id } })
        if (result) {
            let data = await models.phones.update({
                name,
                brand_id,
                price,
                description,
                image_url,
                quantity
            }, { where: { id: id } })
            let phone = await models.phones.findOne({ where: { id: id }, include: ['brand'] });
            succesCode(res, phone, "Cập Nhật Điện Thọai Thành Công!!!")
        } else {
            failCode(res, "Điện Thoại Không Có Trong Danh Sách")
        }
    } catch (error) {
        errorCode(res, "Lỗi Backend")
    }

}
const getPhoneById = async (req, res) => {
    const { id } = req.params;
    try {
        let result = await models.phones.findOne({ where: { id: id }, include: ['brand'] })

        succesCode(res, result, "Lấy Điện Thọai Thành Công!!!")

    } catch (error) {
        errorCode(res, "Lỗi Backend")
    }

}
const getPhoneByIdType = async (req, res) => {
    const { id } = req.params;
    try {
        let result = await models.brands.findAll({ where: { id: id }, include: ['phones'] })

        succesCode(res, result, "Lấy Điện Thọai Thành Công!!!")

    } catch (error) {
        errorCode(res, "Lỗi Backend")
    }

}


const deletePhone = async (req, res) => {
    const { id } = req.params;
    try {
        let result = await models.phones.destroy({ where: { id: id } })
        succesCode(res, result, "Xóa Thành Công")
    } catch (error) {
        failCode(res, 'Lỗi Backend')
    }
}
module.exports = { getPhone, getType, paganation, searchPhone, createPhone, updatePhone, getPhoneById, getListType, getPhoneByIdType, deletePhone }


