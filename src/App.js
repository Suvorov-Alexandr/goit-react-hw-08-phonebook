import { Route, Routes } from "react-router-dom";
import Container from "AppContainer.styled";
import GlobalStyle from "components/GlobalStyle";
import PrivateRoute from "components/PrivateRoute";
import PublicRoute from "components/PublicRoute";
import LoginView from "views/LoginView";
import ContactsView from "views/ContactsView";
import { useFetchCurrentUserQuery } from "redux/contactsApi";
import UserMenu from "components/UserMenu";
import Loader from "components/Loader";
import Toast from "components/Toast";

function App() {
  const { isFetching } = useFetchCurrentUserQuery();
  return (
    <>
      <UserMenu />
      <Container>
        <GlobalStyle />
        {isFetching ? (
          <Loader />
        ) : (
          <Routes>
            <Route
              path="contacts"
              element={
                <PrivateRoute>
                  <ContactsView />
                </PrivateRoute>
              }
            />
            <Route
              path="*"
              element={
                <PublicRoute restricted={true}>
                  <LoginView />
                </PublicRoute>
              }
            />
          </Routes>
        )}
        <Toast />
      </Container>
    </>
  );
}

export default App;
