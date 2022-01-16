import styled from 'styled-components';

export const ContactItemCss = styled.li`
    width: 370px;
    height: 60px;
    background: #b2f0f5;
    border-radius: 20px;
    font-family: cursive;
    display: flex;
    align-items: center;
    justify-content: center;
    :not(:last-child){
        margin-bottom: 10px;
    }
`;

export const DeleteContactBtn = styled.button`
    margin-left: 10px;
    border: none;
    padding: 5px;
    font-family: cursive;
    display: flex;
    align-items: center;
    border-radius: 20px;
    background: #3f87a6;
    cursor: pointer;
`;