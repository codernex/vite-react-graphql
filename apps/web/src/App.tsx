import "./App.css";
import { gql, useLazyQuery } from "@apollo/client";

function App() {
  const query = gql`
    query {
      users {
        id
        name
        email
      }
    }
  `;
  const [getUsers, { data, loading }] = useLazyQuery(query, {});

  return (
    <>
      <p>
        ! Fetch Users From Graphql API {import.meta.env.VITE_GRAPHQL_API_URL}
      </p>
      <button
        onClick={() => {
          getUsers();
        }}
      >
        Fetch User
      </button>

      {loading && <p>Loading...</p>}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          rowGap: 10,
          marginTop: 20,
        }}
      >
        {data &&
          data.users.map((user: any) => {
            return (
              <div
                style={{
                  display: "flex",
                  justifyContent: "justify-between",
                  columnGap: 20,
                  width: "500px",
                  margin: "auto",
                  border: "1px solid black",
                  paddingLeft: 10,
                }}
                key={user.id}
              >
                <p>{user.id}</p>
                <p>{user.name}</p>
                <p>{user.email}</p>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default App;
