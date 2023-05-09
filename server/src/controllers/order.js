const sequelize = require('../models/index');
const initModel = require('../models/init-models');
const { succesCode, errorCode, failCode } = require('../reponse/reponse');
const models = initModel(sequelize)




const getOrder = async (req, res) => {
    try {

        let result = await models.orders.findAll({ include: ['order_items'] })
        succesCode(res, result, 'Lấy Danh Sách Order Thành Công')
    } catch (error) {
        errorCode(res, "Lỗi Backend")
    }
}


const getOrderById = async (req, res) => {
    const { id } = req.params;
    try {
        let result = await models.orders.findAll({
            where: { id: id },
            //  include: ['order_items']
            include: {
                model: models.order_items,
                as: 'order_items',
                include: {
                    model: models.phones,
                    as: 'phone'
                }
            }

        })

        succesCode(res, { result }, "Chi Tiết Đơn Hàng")
    } catch (error) {
        errorCode(res, 'Lỗi Backend')
    }
}

const productOrder = async (req, res) => {
    const { id } = req.params;
    try {
        let result = await models.order_items.findAll({ where: { id: id }, include: ['phone'] })
        succesCode(res, result, "Chi Tiết Sản Phẩm Đơn Hàng")
    } catch (error) {
        errorCode(res, 'Lỗi Backend')
    }
}
const createOrder = async (req, res) => {
    const { customer_name, customer_phone, customer_email, products } = req.body;
    try {
        const order = await models.orders.create({ customer_name, customer_phone, customer_email, total_price: 0 });
        const orderItems = await products.map(({ id, quantity, price }) => ({
            order_id: order.id,
            phone_id: id,
            quantity,
            price
        }));
        // Tạo một đối tượng Order mới


        // Tạo một mảng các Order Item để thêm vào đơn hàng

        const total = await orderItems.reduce((a, b) => a + b.price * b.quantity, 0);

        // Thêm các Order Item vào đơn hàng
        await models.order_items.bulkCreate(orderItems);
        await order.update({ total_price: total });
        succesCode(res, { order }, 'Tạo đơn hàng thành công');
    } catch (error) {
        console.log(error);
        errorCode(res, 'Lỗi backend');
    }
}



const getListOrder = async (req, res) => {
    const { id } = req.params;
    try {
        let result = await models.orders.findAll({ where: { customer_phone: id } })
        succesCode(res, result, 'Lấy danh sách lịch sử mua hàng thành công')
    } catch (error) {
        failCode(res, "Lổi backend")
    }
}
const getListOrderItem = async (req, res) => {
    const { id } = req.params;
    try {
        let result = await models.order_items.findAll({ where: { order_id: id }, include: ['phone'] })
        succesCode(res, result, 'Lấy danh sách lịch sử mua hàng thành công')
    } catch (error) {
        failCode(res, "Lổi backend")
    }
}

module.exports = { getOrder, getOrderById, productOrder, createOrder, getListOrder, getListOrderItem }

