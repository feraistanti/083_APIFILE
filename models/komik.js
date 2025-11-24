module.exports = (sequelize, DataTypes) => {
    const Komik = sequelize.define(
        "Komik",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            title: {
                type: DataTypes.STRING,
            },
            description: {
                type: DataTypes.STRING,
            },
            author: {
                type: DataTypes.STRING,
            },
            imageType: {
                type: DataTypes.STRING,
            },
            imageName: {
                type: DataTypes.STRING,
            },
            imageData: {
                type: DataTypes.BLOB('long'),
            },
            tahunTerbit: {
                type: DataTypes.INTEGER,
            },
            bidang: {
                type: DataTypes.ENUM('sosial', 'teknik'),
            }
        },
        {
            tableName: 'komik',
        }
    );

    return Komik;
};
