// rendering homepage
module.exports.home = function(req,res){
    return res.render('home',{
        title:'O-Auth | Home'
    })
}