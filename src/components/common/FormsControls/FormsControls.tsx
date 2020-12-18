import React from "react";
import styles from './FormsControls.module.css'
import { WrappedFieldProps } from "redux-form";



type OwnProps = {
	typeF:string
}

export const FormControl:React.FC<WrappedFieldProps & OwnProps> = ({typeF, input , meta , ...props}) =>   /// дестр. инпут , мета,в пропсах их не
// остается
{
	const hasError =  meta.touched && meta.error
	return <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
		<div>
			{React.createElement(typeF,{...input,...props})}
		</div>
		{hasError && <span>{meta.error}</span>}
	</div>
}
//берем методы импута и остаток пропсов с плейсхолдером

