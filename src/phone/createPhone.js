const create = async (event) =>{
//const {title} = event.body;
console.log ("title", event.body);
return {
    statuscode: 200
}
}

module.exports = {create};