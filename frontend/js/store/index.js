import { configureStore } from '@reduxjs/toolkit';

import acceuilReducer from '../app/example-app/components/Accueil/slice';
import actualiteReducer from '../app/example-app/components/Actualite/slice';
import diasporaReducer from '../app/example-app/components/Diaspora/slice';
import InnovationReducer from '../app/example-app/components/Innovation/slice';
import InterviewReducer from '../app/example-app/components/Interview/slice';
import PolitiqueReducer from '../app/example-app/components/Politique/slice';
import PortraitReducer from '../app/example-app/components/Portrait/slice';
import StartupReducer from '../app/example-app/components/Startup/slice';
export const store = configureStore({
  reducer: {
    acceuil: acceuilReducer,
    actualite: actualiteReducer,
    diaspora: diasporaReducer,
    innovation: InnovationReducer,
    interview: InterviewReducer,
    politique: PolitiqueReducer,
    portrait: PortraitReducer,
    startup: StartupReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
