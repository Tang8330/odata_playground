var account = require("./models/account");
module.exports = function (app) {
	app.get('/', function(req, res) {
		res.sendfile('app/index.html');
	});
	
	app.post("/new/user", function(req, res) {
		console.log('sap' + JSON.stringify(req.body.data));
		account.addAccount(req.body.data, function(err) {
			if (err) res.send(500);
			else res.redirect("back");
		});
	});
}
