
const getListing = async (req,res)=>{
  const {id} = req.params;

  console.log(id);
  return res.json({mssg: 'route' + id})
}



module.exports = {
  getListing

}