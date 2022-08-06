require('dotenv').config();

const getListing = async (req,res)=>{
  const {id} = req.params;

  console.log(id);
  return res.json({mssg: 'route' + id})
}


const getListings = async (req, res)=>{
  const axios = require("axios");

  // const options = {
  //   method: 'GET',
  //   url: 'https://realtor16.p.rapidapi.com/forsale',
  //   params: {location: 'santa monica', type: 'single_family,condos'},
  //   headers: {
  //     'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
  //     'X-RapidAPI-Host': 'realtor16.p.rapidapi.com'
  //   }
  // };
  
  //  await axios.request(options).then(function (response) {
  //   console.log(response.data);
  //   return res.json({list: response.data})
  
  // }).catch(function (error) {
  //   console.error(error);
  // });

}

module.exports = {
  getListing,
  getListings

}