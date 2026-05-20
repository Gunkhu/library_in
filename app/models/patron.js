import { DataTypes } from 'sequelize'
import sequelize from '../database/database.js'

const Patron = sequelize.define('patrons', {
    id: { type: DataTypes.INTEGER,  allowNull: false ,primaryKey: true },
    idNumber: { type: DataTypes.STRING,  allowNull: true  },
    fullName: { type: DataTypes.STRING,  allowNull: true  },
    email: { type: DataTypes.STRING,  allowNull: true }
}, {
    timestamps: true,
    freezeTableName: true
})

export default Patron
