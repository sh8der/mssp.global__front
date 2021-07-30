// // Import jQuery module (npm i jquery)
// import $ from 'jquery'
// window.jQuery = $
// window.$ = $

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')

document.addEventListener('DOMContentLoaded', () => {

	;(function () {
		let tabButtons = document.querySelectorAll("button.check-request__tab[data-tab-id]");
		tabButtons.forEach(button => {
			button.addEventListener('click', function() {
				tabButtons.forEach(button => {
					button.classList.remove("check-request__tab--active");
				});
				this.classList.add("check-request__tab--active");
				let targerTabId = this.dataset.tabId;
				document.querySelectorAll(".check-request__tab-content").forEach(tab => {
					let currentTabId = tab.dataset.tabId;
					if (targerTabId === currentTabId) {
						tab.classList.add("check-request__tab-content--active");
					} else {
						tab.classList.remove("check-request__tab-content--active");
					}
				});
			})
		});
	})();

})
