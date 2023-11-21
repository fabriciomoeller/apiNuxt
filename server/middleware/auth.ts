export default defineEventHandler(async event => {
    const token = getCookie(event, 'token'); 
    const sessionConfig = { password: '94fbae55-2fec-5057-98e7-371c607f8995' };
    const session = await getSession(event, sessionConfig);
    event.context.user = session.data;

    if (!session.data.id) {
        await updateSession(event, sessionConfig, 
            { 
                id: getHeader(event, 'x-user-id') 
            }
        );
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