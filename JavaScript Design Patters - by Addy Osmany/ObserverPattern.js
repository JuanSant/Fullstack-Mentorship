//Build the Subject base class
var Subject = (function(window, undefined){

	function Subject(){
		this._list = [];
	}

	//this method will handle adding observers to the internal list
	Subject.prototype.observe= function observeObject(obj){
		console.log('added new observer');
		this._list.push(obj);
	};

	Subject.prototype.unobserve = function unobserveObject(obj){
		for (var i = 0; i < this._list.length; i++) {
			if(this._list[i] === obj){
				this._list.splice(i, 1);
				console.log('remove existing observer');
				return true
			}
		}

		return false
	};

	Subject.prototype.notify = function notifyObservers(){
		var args = Array.prototype.slice.call(arguments, 0);
		for (var i = 0; i < this._list.length; i++) {
			this._list[i].update.apply(null, args);
		}
	};

	return Subject;

})(window);


//Setup an object that fetchs stocks
function StockGrabber(){
	var subject = new Subject();

	this.addObserver = function addObserver(newObserver){
		subject.observe(newObserver);
	};

	this.removeObserver = function removeObserver(deleteObserver){
		subject.unobserve(deleteObserver);
	}

	this.fetchStocks = function fetchStocks(){
		//fake fetching the stocks
		var stocks = {
			appl: 167.00,
			goog: 243.67,
			msft: 99.99
		};

		subject.notify(stocks);
	};
}

//define a couple of different observers
var StockUpdaterComponent = {
	update: function(){
		console.log('"Update" called on stockUpdater with: ', arguments);
	}
};

var StockChartsComponent = {
	update: function(){
		console.log('"update" called on StockCharts with: ', arguments);
	}
};

//example usage
var stockApp = new StockGrabber();
stockApp.addObserver (StockUpdaterComponent);
stockApp.fetchStocks(); //Console logs: "update" called on stockUpdater with
stockApp.addObserver(StockChartsComponent);
stockApp.fetchStocks(); //Console logs: "update" called on stockCharts with
stockApp.removeObserver(StockUpdaterComponent);
stockApp.fetchStocks(); //Console logs: "update" called on stockUpdater with
stockApp.removeObserver(StockChartsComponent);
stockApp.fetchStocks();//Console logs: "update" called on stockCharts with