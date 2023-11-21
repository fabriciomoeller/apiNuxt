export default defineCachedEventHandler(async event => {
    const id = getRouterParam(event, 'id');
    
    await new Promise(resolve => setTimeout(resolve, 5000));
    return {   
        id,
        session: event.context.user.id,
    }
}, {swr: true })