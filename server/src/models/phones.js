const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return phones.init(sequelize, DataTypes);
}

class phones extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    brand_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'brands',
        key: 'id'
      }
    },
    price: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    image_url: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'phones',
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
        name: "brand_id",
        using: "BTREE",
        fields: [
          { name: "brand_id" },
        ]
      },
    ]
  });
  }
}
