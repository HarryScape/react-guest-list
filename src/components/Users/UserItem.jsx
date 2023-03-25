import styled from "styled-components";

const StyledUserItem = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  border-radius: 8px;
  margin: 5px auto;
  width: 90%;
  display: flex;
  justify-content: space-evenly;
`;

function UserItem(props) {
  return (
    <StyledUserItem>
      <h2>{props.name}</h2>
      <h2>Age: {props.age}</h2>
    </StyledUserItem>
  );
}

export default UserItem;
