AUI.add(
	'form-builder-app-form-field',
	function(A) {
		var TimeField = A.Component.create(
			{
				ATTRS: {
					type: {
						value: 'form-builder-app-form-field'
					}
				},

				EXTENDS: Liferay.DDM.Renderer.Field,

				NAME: 'form-builder-app-form-field',

				prototype: {
				}
			}
		);

		Liferay.namespace('DDM.Field').Time = TimeField;
	},
	'',
	{
		requires: ['liferay-ddm-form-renderer-field']
	}
);