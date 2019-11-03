import styled from "styled-components";

export const Div = styled.div`
  margin-bottom: 40px;
  overflow: hidden;
  position: relative;
  border: 1px solid #d4d4d4;
  padding-bottom: 10px;
`;

export const Icon = styled.div`
  position: relative;
  padding-left: 30px;
  display: flex;
  align-items: center;
  height: 30px;
  color: #696969;
  &:after {
    content: "";
    background-image: ${(props: { icon: string }) => `url(${props.icon});`}
    width: 25px;
    height: 30px;
    display: block;
    background-position: center;
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const WrapperIcons = styled.div`
  display: flex;
  margin: 5px 0 10px 0;
  border-bottom: 1px solid #d4d4d4;
  padding-bottom: 10px;
  justify-content: space-around;
`;

export const P = styled.p`
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0 15px;
  color: #696969;
`;
