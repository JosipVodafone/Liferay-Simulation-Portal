;(function() {
	AUI().applyConfig(
		{
			groups: {
				'field-form-builder-app': {
					base: MODULE_PATH + '/',
					combine: Liferay.AUI.getCombine(),
					filter: Liferay.AUI.getFilterConfig(),
					modules: {
						'form-builder-app-form-field': {
							condition: {
								trigger: 'liferay-ddm-form-renderer'
							},
							path: 'form-builder-app_field.js',
							requires: [
								'liferay-ddm-form-renderer-field'
							]
						}
					},
					root: MODULE_PATH + '/'
				}
			}
		}
	);
})();