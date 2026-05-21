import { DataTypes } from 'sequelize';

async function up({context: QueryInterface}) {
  await QueryInterface.createTable('patrons', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    idNumber: { type: DataTypes.STRING,  allowNull: true  },
    fullName: { type: DataTypes.STRING,  allowNull: true  },
    email: { type: DataTypes.STRING,  allowNull: true },
    createdAt: { type: DataTypes.DATE },
    updatedAt: { type: DataTypes.DATE }    
  });
}

async function down({context: QueryInterface}) {
  await QueryInterface.dropTable('patrons');
}

export { up, down }
