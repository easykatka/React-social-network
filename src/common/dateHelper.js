
export const dateHelper = (date,timeZone=10800000) => {
	// работает,но че-т хрень какая-то)
	
	const ruTime = new Date(date).getTime()
	const currentTime = new Date(ruTime+timeZone).toLocaleTimeString('ru', {hour: '2-digit', minute:'2-digit'})
	const formatedDate = new Date(ruTime+timeZone).toLocaleDateString()
	const currentDate = new Date().toLocaleDateString()
	const yesterdayDate = new Date(Date.now() - 86400000+ timeZone).toLocaleDateString()
	


	const visibleDate =
		formatedDate === currentDate ?
			'today ' + currentTime
			:
			formatedDate === yesterdayDate ?
				'yesterday ' + currentTime
				:
				formatedDate

	return visibleDate
}