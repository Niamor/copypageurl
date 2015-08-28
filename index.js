require("sdk/context-menu").Item({
	label: "Copy Page URL",
	contentScript: 'self.on("click", function (node, data) {' +
				   '	self.postMessage(document.URL);' +
				   '});',
	onMessage: function (pageURL) {
		require("sdk/clipboard").set(pageURL);
	}
});
