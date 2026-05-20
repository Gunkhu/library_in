import { DataTypes } from 'sequelize';

async function up({context: QueryInterface}) {
  await QueryInterface.createTable('books', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    isbn: { type: DataTypes.STRING,  allowNull: true  },
    title: { type: DataTypes.STRING,  allowNull: true },
    author: { type: DataTypes.STRING,  allowNull: true  },
    totalCopies: { type: DataTypes.INTEGER,  allowNull: true  },
    createdAt: { type: DataTypes.DATE },
    updatedAt: { type: DataTypes.DATE }    
  });
}

async function down({context: QueryInterface}) {
  await QueryInterface.dropTable('books');
}

export { up, down }
