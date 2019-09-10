package com.liferay.docs.formfieldtype.form.field;

import com.liferay.dynamic.data.mapping.form.field.type.BaseDDMFormFieldType;
import com.liferay.dynamic.data.mapping.form.field.type.DDMFormFieldType;

import org.osgi.service.component.annotations.Component;

/**
 * @author josip
 */
@Component(
	immediate = true,
	property = {
		"ddm.form.field.type.description=form-builder-app-description",
		"ddm.form.field.type.display.order:Integer=10",
		"ddm.form.field.type.icon=text",
		"ddm.form.field.type.js.class.name=Liferay.DDM.Field.Time",
		"ddm.form.field.type.js.module=form-builder-app-form-field",
		"ddm.form.field.type.label=form-builder-app-label",
		"ddm.form.field.type.name=formBuilderApp"
	},
	service = DDMFormFieldType.class
)
public class TimeDDMFormFieldType extends BaseDDMFormFieldType {

	@Override
	public String getName() {
		return "formBuilderApp";
	}

}