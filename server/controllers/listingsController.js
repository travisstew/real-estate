require('dotenv').config();

const getListing = async (req,res)=>{
  const {id} = req.params;
  return res.json({mssg: 'route' + id})
}


const getListings = async (req, res)=>{

  const axios = require("axios");

  // const options = {
  //   method: 'GET',
  //   url: 'https://realtor.p.rapidapi.com/properties/list-for-sale',
  //   params: {state_code: 'VA', city: 'chester', offset: '0', limit: '10', sort: 'relevance'},
  //   headers: {
  //     'X-RapidAPI-Key': '00b956d7c8msh458ab8d1c20369dp182f31jsn413e2da1e3e2',
  //     'X-RapidAPI-Host': 'realtor.p.rapidapi.com'
  //   }
  // };

  // await axios.request(options).then(function (response) {   
  //     return res.json(response.data.listings)
  //   }).catch(function (error) {
  //     console.error(error);
  // });
  

}

module.exports = {
  getListing,
  getListings

}