import { CircularProgress } from '@material-ui/core';

export const Preloader = () => {
	return (
		<div>
			<CircularProgress
				size={200}
				color='primary'
				style={{
					position: 'absolute',
					top: '50%',
					left: '50%',
					marginLeft: '-100px',
					marginTop: '-60px',
				}}
			/>
		</div>
	);
};
