import React from 'react'
import preloader from '../../../Reload.svg'

 let Preloader = (props) => {
	return <div style = { { backgroundcolor:'white'} }>
		<img src={preloader} />
	</div>
}

export default Preloader