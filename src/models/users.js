import { loadUsers } from '../common/api';

const users = {
    state: [],
    reducers: {
        loaded: (state, payload) => payload,
        followToggled: (state, payload) => state.map(user => {
            if (user.id === payload.id) {
                return {
                    ...user,
                    isFollowing: !user.isFollowing,
                }
            }
            return user;
        })
    },
    effects: dispatch => ({
        async load() {
            const users = await loadUsers();
            dispatch.users.loaded(users);
        },
        toggleFollow(user) {
            dispatch.users.followToggled(user);
            dispatch.toasts.add(`You ${user.isFollowing ? 'unfollowed' : 'followed'} ${user.name.first} ${user.name.last}`);
        }
    })
};

export default users;