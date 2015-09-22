'use strict';

function loadModule(path, success, notFound, fail) {
	var module;
	try {
		module = require(path);
	} catch (error) {
		if (error.code === 'MODULE_NOT_FOUND') {
			return notFound();
		}
		if (fail) {
			return fail(error);
		}
		throw error;
	}

	return success(module);
}

module.exports = loadModule;
