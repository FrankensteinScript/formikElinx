import { Formik, Form } from "formik";
import { Grid } from "@mui/material";
import { type RegisterFormValues } from "../types/RegisterFormValues";
import { registerInitialValues, registerSchema } from "../utils/schemas/registerSchema";
import { FormikTextField } from "../components/form/FormTextField";
import { FormikSubmitButton } from "../components/form/FormSubmitButton";
import { fields } from "../utils/consts";

export const RegisterForm = () => {
	const handleSubmit = async (values: RegisterFormValues) => {
		console.log(values);
	};

	return (
		<Formik initialValues={registerInitialValues} validationSchema={registerSchema} onSubmit={handleSubmit}>
			<Form>
				<Grid container spacing={2}>
					{fields.map((field) => (
						<Grid key={field.name} size={field.grid}>
							<FormikTextField
								name={field.name}
								label={field.label}
								placeholder={field.placeholder}
								type={field.type}
							/>
						</Grid>
					))}

					<Grid size={{ xs: 12 }}>
						<FormikSubmitButton variant="contained" fullWidth>
							Odeslat
						</FormikSubmitButton>
					</Grid>
				</Grid>
			</Form>
		</Formik>
	);
};
