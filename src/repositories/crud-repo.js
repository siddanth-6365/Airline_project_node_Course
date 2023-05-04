const { Logger } = require("../config")

class CrudOperations {

    constructor(model) {
        this.model = model;
    }

    async create(data) {
        try {
            console.log("we are inside crud-repo");
            const responce = await this.model.create(data)
            return responce;
        }
        catch (error) {
            Logger.error("error while creating crud", error);
            throw error;
        }
    }
    async destroy(data) {
        try {
            const responce = await this.model.destroy({
                where: {
                    id: data,
                }
            })
            return responce;
        }
        catch (error) {
            Logger.error("error while destroy in crud-repo", error);
            throw error;
        }
    }
    async get(data) {
        try {
            const responce = await this.model.findByPk(123);
            return responce;
        }
        catch (error) {
            Logger.error("error while get in crud-repo", error);
            throw error;
        }
    }

    async getAll(data) {
        try {
            const responce = await this.model.findAll({
                attributes: ['modelNumber', 'capacity']
            });
            return responce;
        }
        catch (error) {
            Logger.error("error while getAll in crud-repo", error);
            throw error;
        }
    }

    async update(id, data) {
        try {
            const responce = await this.model.update(data, {
                where: {
                    id: id,
                }
            });
            return responce;
        }
        catch (error) {
            Logger.error("error while update in crud-repo", error);
            throw error;
        }
    }
}

module.exports =  CrudOperations;
