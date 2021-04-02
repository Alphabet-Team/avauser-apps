/* global */
import { init } from '@rematch/core';
import { getPersistor } from '@rematch/persist';

import * as models from '../models';

const configureStore = () => {
    const store = init({
        models
    });

    const persistor = getPersistor();
    const { dispatch } = store;

    return { persistor, store, dispatch };
};

export default configureStore;