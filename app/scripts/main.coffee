viewModel =
	greetings: ko.observable "'Allo, 'Allo!"
	message: ko.observable "Always a pleasure scaffolding your apps."
	successMessage: ko.observable "Splendid!"

ko.applyBindings viewModel, $('html')[0]