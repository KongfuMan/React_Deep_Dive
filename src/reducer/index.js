const ACTION_TYPE_1 = 'ACTION_TYPE_1';


export default function fakeReducers(state={},action){
    switch (action.type){
        case ACTION_TYPE_1:
            return Object.assign(state,action.payload);
        default:
            return state;
    }
}
