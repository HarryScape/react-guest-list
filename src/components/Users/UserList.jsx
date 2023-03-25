import styled from "styled-components";
import UserItem from "./UserItem";
import Card from "../UI/Card";

const StyledUserList = styled.ol`
  list-style-type: none;
  padding: 0;
`;

const UserList = (props) => {
  let userContent = <h2>No Attendees</h2>;

  if (props.items.length > 0) {
    userContent = props.items.map((user) => {
      return (
        <li key={user.id}>
          <UserItem name={user.name} age={user.age} />
        </li>
      );
    });
  }

  return (
    <Card>
      <StyledUserList>{userContent}</StyledUserList>
    </Card>
  );
};

export default UserList;
