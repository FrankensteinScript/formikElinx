import type { RegisterFormValues } from "../../types/RegisterFormValues";
import * as Yup from "yup";
export const registerInitialValues: RegisterFormValues = {
	firstName: "",
	lastName: "",
	nickName: "",
	email: "",
	region: [],
};

export const registerSchema = Yup.object({
	firstName: Yup.string().min(6, "Min. 6 char").required("First name is required"),
	lastName: Yup.string().min(6, "Min. 6 char").required("Last name is required"),
	nickName: Yup.string().optional(),
	email: Yup.string().email("Incorrect email").required("Required"),
	region: Yup.string().min(6, "Min. 6 char").required("Required"),
});
