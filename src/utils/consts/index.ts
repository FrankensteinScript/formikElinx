import type { RegisterFormField } from "../../types/RegisterFormField";

export const fields: RegisterFormField[] = [
	{
		name: "firstName",
		label: "Jméno",
		placeholder: "Vaše jméno",
		grid: { xs: 6 },
	},
	{
		name: "lastName",
		label: "Příjmení",
		placeholder: "Vaše příjmení",
		grid: { xs: 6 },
	},
	{
		name: "nickName",
		label: "Uživatelské jméno",
		placeholder: "Vaše uživatelské jméno",
		grid: { xs: 6 },
	},
	{
		name: "email",
		label: "Email",
		placeholder: "Váš e-mail",
		type: "email",
		grid: { xs: 6 },
	},
	{
		name: "region",
		label: "Kraj",
		placeholder: "Vyberte...",
		grid: { xs: 6 },
	},
];
