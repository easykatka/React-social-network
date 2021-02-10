import { TextField } from "@material-ui/core"


interface IProps {
	label: string,
	errors: string | undefined,
	touched: boolean | undefined,
	[x: string]: any;
}
export const CustomTextField: React.FC<IProps> = ({ label, errors, touched, ...props }) => {
	return (
		<div>
			<h2> {label}: </h2>
			<TextField
				type='text'
				size='small'
				multiline
				rowsMax={2}
				{...props}
			/>
			{errors && touched &&
				<div style={{ color: 'red' }} >
					{errors}
				</div>
			}
		</div>
	)
}