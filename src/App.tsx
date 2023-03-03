import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { AppRouter } from "./Router";
import { NotificationProvider } from "./context/notification.context";
import { store } from "./redux/store";
import { Fragment, Suspense } from "react";
import axios from "axios";
axios.defaults.baseURL = 'http://localhost:1337/api/'

const App = () => {
  return (
    <Fragment>
      <Provider store={store}>
        <NotificationProvider>
          <BrowserRouter>
            <Suspense fallback={'Cargando...'}>
              <AppRouter />
            </Suspense>
          </BrowserRouter>
        </NotificationProvider>
      </Provider>
    </Fragment>
  );
};

export default App;
