
export const dateHelper = (date) => {
	// работает,но че-т хрень какая-то)
	
	const ruTime = new Date(date).getTime()
	const currentTime = new Date(ruTime+10800000).toLocaleTimeString('ru', {hour: '2-digit', minute:'2-digit'})
	const formatedDate = new Date(ruTime+10800000).toLocaleDateString()
	const currentDate = new Date().toLocaleDateString()
	const yesterdayDate = new Date(Date.now() - 75600000).toLocaleDateString()


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