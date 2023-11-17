export default defineEventHandler(async event => {
    const token = getCookie(event, 'token'); 
    event.context.user = { 
        id: 'hi'
    }  
    if (event.path.startsWith('/api/user') && token !== 'hi') {      
        throw createError({
            status: 401,
            message: 'Not authorized'
        })
            
    }
});