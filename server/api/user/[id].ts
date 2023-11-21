export default defineEventHandler(async event => {
    const id = getRouterParam(event, 'id');
    
    return {   
        id,
        session: event.context.user.id,
    }
})