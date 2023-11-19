export default defineEventHandler(async event => {
    const token = getCookie(event, 'token'); 
    event.context.user = { 
        id: 'hi'
    } 

    const storage = useStorage('user');
    if (await storage.hasItem('token')) {
        await storage.setItem('token', 'update token');
    } else {
        await storage.setItem('token', 'new token');    
    }    
    
    //await useStorage().setItem('user:token', 'hi');

    if (event.path.startsWith('/api/user') && token !== 'hi') {      
        // throw createError({
        //     status: 401,
        //     message: 'Not authorized'
        // })
            
    }
});