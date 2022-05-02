export const isAuth = 'isAuth';

export const USER_NAME = "USER_NAME"

export const toggelAuth = (data) => {
	return {
        type:isAuth,
        payload:data
    }
};


export const username=(data)=>{
    return {
        type:USER_NAME,
        payload:data
    }
}