import { useEffect, useState } from "react";
import { NavbarComponent, JumbotronComponent, Pagn, People, Footer } from './components';
import { USER_PER_PAGE } from "./utils/pageconstans";
import { API_URL } from "./utils/constans";
import { Container, Row } from "reactstrap";

import axios from 'axios';


function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      const res = await axios.get(API_URL);
      setLoading(false);
      setUsers(res.data.results);

      setTotalPages(Math.ceil(res.data.results.length / USER_PER_PAGE));
    };
    fetchUsers();
  }, []);

  const handleClick = num => {
    setPage(num);
  }

  return (
    <div>
      <NavbarComponent />
      <Row>
        <JumbotronComponent />
      </Row>
      <Container className="text-center">
        <Row className="mt-4">
          <h3><strong>Personal</strong> Identity</h3>
        </Row>
        <Row className="mt-4">
          {loading ? <p>Loading...</p> : <>
            <Row>
              <People users={users} page={page} />
            </Row>
            <Pagn totalPages={totalPages} handleClick={handleClick} />
          </>}
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default App;

// componentDidMount() {
//   const getPosts = async () => {

//     this.setState({ loading: true });
//     const ress = await axios.get(API_URL);
//     console.log("Respons :", ress)
//     this.setState({
//       users: ress.data.results,
//       loading: false
//     });
//   };

//   getPosts();
// }



{/* <Row xs={2} className="mb-4" >
              {users && users.map((user) => (
                // <img src={user.picture.medium} alt={user.name.first} />

                <Col md="auto" style={{ marginTop: 16, marginLeft: 25 }}>
                  <Card style={{ width: '20rem' }} className="mb-4 text-center shadow"   >
                    <img src={user.picture.medium} alt={user.name.first} />
                    <h3 style={{ marginTop: '5%' }}><strong>{user.name.first}</strong> {user.name.last}</h3>
                    <hr />
                    <h5>Telp. {user.phone}</h5>
                    <h5><i>{user.email}</i></h5>
                    <h5>{user.location.country}</h5>
                  </Card>
                </Col>

              ))}

            </Row> */}
