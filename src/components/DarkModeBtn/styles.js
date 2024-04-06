import styled from 'styled-components';

export const Switch = styled.label`
  font-size: 17px;
  position: relative;
  display: inline-block;
  width: 3.5em;
  height: 2em;
`;

export const HiddenCheckbox = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

export const Slider = styled.span`
  margin: 15px;
  position: absolute;
  cursor: pointer;
  background: #000000;
  border-radius: 50px;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  height: 2em;
  width: 3.5em;

  &:before {
    /* position: absolute; */
    content: "";
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2em;
    width: 2em;
    inset: 0;
    background-color: #B73625;
    border-radius: 50px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
`;

export const StyledCheckbox = styled(HiddenCheckbox)`
  &:checked + ${Slider} {
    background: #D9D9D9;
  }

  &:focus + ${Slider} {
    box-shadow: 0 0 1px #171717;
  }

  &:checked + ${Slider}:before {
    transform: translateX(1.6em);
  }
`;

export default Switch;
