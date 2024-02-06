// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model { }

// set up fields and rules for Product model
Product.init(
  {
    //primary key, null values not allowed, data type integer
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    // product name allows null value, data type string
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // price allows null value, data type integer
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,      
      Validate: {
        isDecimal: true
      }
    },
    //stock default value is 0, validate numericvalues, data type integer.
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      Validate: {
        isNumeric: true
      }
    },
    // category id, allow null values, foriegn key category id from category model.
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      reference:{
        model: 'category',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;