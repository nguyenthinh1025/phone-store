const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return order_items.init(sequelize, DataTypes);
}

class order_items extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'orders',
        key: 'id'
      }
    },
    phone_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'phones',
        key: 'id'
      }
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'order_items',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "order_id",
        using: "BTREE",
        fields: [
          { name: "order_id" },
        ]
      },
      {
        name: "phone_id",
        using: "BTREE",
        fields: [
          { name: "phone_id" },
        ]
      },
    ]
  });
  }
}
