import { Button, type ButtonProps } from "@mui/material";
import { useFormikContext } from "formik";

type Props = ButtonProps;

export const FormikSubmitButton = ({ children, ...props }: Props) => {
	const { isSubmitting, isValid } = useFormikContext();

	return (
		<Button type="submit" disabled={isSubmitting || !isValid} {...props}>
			{children}
		</Button>
	);
};
