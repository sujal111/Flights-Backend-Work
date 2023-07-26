const {City}= require('../models/index');
class CityRepository{
async createCity({name}){
    try{
        const city=await City.create({
            name
        })
    }catch(error){
        console.log("Something went wrong in the repo layer")
        throw {error}
    }
}

async updateCity(cityId, data) { // {name: "Prayagraj"}
    try {
        // The below approach also works but will not return updated object
        // if we are using Pg then returning: true can be used, else not
        // const city = await City.update(data, {
        //     where: {
        //         id: cityId
        //     },
        //      
        // });
        // for getting updated data in mysql we use the below approach
        const city = await City.findByPk(cityId);
        city.name = data.name;
        await city.save();
        return city;
    } catch (error) {
        console.log("Something went wrong in the repository layer");
        throw {error};
    }
}
async getCity(cityId) {
    try {
        const city = await City.findByPk(cityId);
        return city;
    } catch (error) {
        console.log("Something went wrong in the repository layer");
        throw {error};
    }
}

}
