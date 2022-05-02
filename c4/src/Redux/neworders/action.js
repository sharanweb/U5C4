export const ORDERS = "ORDERS"

export const findorders = (data) => {
	return {
		type: ORDERS,
		payload: data,
	};
};
