import { CircularProgress } from '@material-ui/core';

export const Preloader = () => {
	return (
		
			<CircularProgress
				size={200}
				color='primary'
				style={{
					
					position:'absolute',
					top: '50%',
					left: '50%',
					marginLeft: '-225px',
					marginTop: '-100px',
					
				}}
			/>
	
	);
};
