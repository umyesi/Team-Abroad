const initState = {
	school: true,
	accomodation: false,
	activities: false,
	transfers: false,
	meals: false,
	assistance: false
};

const serviceReducer = (state = initState, action) => {
	switch (action.type) {
		case "SHOW_SERVICE_INFO":
			state = undefined;
			return {
				...state,
				[action.name]: true
			};
		case "HIDE_INFO":
			state = undefined;
			return {
				...state,
				school: true
			};

		default:
			return state;
	}
};

export default serviceReducer;
