const DataTypes = require("sequelize").DataTypes;
const _SequelizeMeta = require("./SequelizeMeta");
const _brands = require("./brands");
const _order_items = require("./order_items");
const _orders = require("./orders");
const _phones = require("./phones");
const _user = require("./user");

function initModels(sequelize) {
  const SequelizeMeta = _SequelizeMeta(sequelize, DataTypes);
  const brands = _brands(sequelize, DataTypes);
  const order_items = _order_items(sequelize, DataTypes);
  const orders = _orders(sequelize, DataTypes);
  const phones = _phones(sequelize, DataTypes);
  const user = _user(sequelize, DataTypes);

  phones.belongsTo(brands, { as: "brand", foreignKey: "brand_id"});
  brands.hasMany(phones, { as: "phones", foreignKey: "brand_id"});
  order_items.belongsTo(orders, { as: "order", foreignKey: "order_id"});
  orders.hasMany(order_items, { as: "order_items", foreignKey: "order_id"});
  order_items.belongsTo(phones, { as: "phone", foreignKey: "phone_id"});
  phones.hasMany(order_items, { as: "order_items", foreignKey: "phone_id"});

  return {
    SequelizeMeta,
    brands,
    order_items,
    orders,
    phones,
    user,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
