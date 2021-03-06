const {merge} = require("lodash");

class InspectModule {
	constructor() {
		this.inspect = {};
		this.fullInspected = {};
		this.filePath = null;
	}
	set(obj) {
		if (obj.inspect) {
			if (obj.inspect.filePath) {
				this.filePath = obj.inspect.filePath;
			}
			this.inspect = merge({}, this.inspect, obj.inspect);
			this.fullInspected[this.filePath] = this.inspect;
		}
	}
}

module.exports = () => new InspectModule();
