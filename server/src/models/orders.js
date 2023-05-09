const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return orders.init(sequelize, DataTypes);
}

class orders extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    customer_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    customer_phone: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    customer_email: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    total_price: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'orders',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
