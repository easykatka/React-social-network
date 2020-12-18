export const updateObjectInArray = (items , itemId , objPropName) => {
	return items.map(u => {
		if (u[objPropName] === itemId) {
			return {...u, followed: !u.followed}
		}
		return u
	})
}