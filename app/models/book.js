import { DataTypes } from 'sequelize'
import sequelize from '../database/database.js'

const Book = sequelize.define('books', {
    id: { type: DataTypes.INTEGER,  allowNull: false,primaryKey: true},
    isbn: { type: DataTypes.STRING,  allowNull: true  },
    title: { type: DataTypes.STRING,  allowNull: true },
    author: { type: DataTypes.STRING,  allowNull: true  },
    totalCopies: { type: DataTypes.INTEGER,  allowNull: true  }
}, {
    timestamps: true,
    freezeTableName: true
})

export default Book
