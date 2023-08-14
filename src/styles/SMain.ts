"use client"
import { styled } from "styled-components";
const borderRadius = "5px";
const buttonPadding = "5px 20px";
const fontSize = {
    header: "24px",
    txt: "14px"
}
const colors = {
    lightgrey: "lightgrey",
    dark: "black",
    blueBtn: "#3a89bf",
    orangeBtn: 'orange',
    greenButton: 'green',
    light: "white",
    red: "red",
    grey: 'grey',
};
const aTagStyle = `
    cursor:pointer;
    a {
    color: ${colors.light};
    text-decoration: none;
}`;
export const HomePageLink = styled.p`
    a{
        color: black;
        text-decoration: none;
        cursor: pointer;
    }
`
export const Main = styled.main<{ $small?: boolean }>`
    margin: 0 auto;
    max-width: 1124px;
    box-shadow: 0px 0px 10px ${colors.dark};
    border-radius: ${borderRadius};
    padding: 10px;
`
export const SmallMain = styled(Main)`
    max-width: 540px;
`
export const SectionHead = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${colors.dark};
    margin: 0 -10px;
    padding: 0 20px;
`

export const MainHeader = styled.h1`
    font-size: ${fontSize.header};
    color: black;
`
export const AddUserBtn = styled.div`
    background-color: ${colors.blueBtn};
    border-radius: ${borderRadius};
    text-align: center;
    padding: ${buttonPadding};
    ${aTagStyle}
`

export const Tabel = styled.table`
    margin-top: 10px;
    border: 1px solid ${colors.lightgrey};
    width: 100%;
    border-collapse: collapse;
    font-size: ${fontSize.txt};
    thead{
        background-color: ${colors.lightgrey};
        td{
            padding: 20px 10px;
        }
    }
    tbody tr {
        border-bottom: 1px solid ${colors.lightgrey};
    }
    td{
        padding: 10px 10px
    }
`

export const OrangeElement = styled.p`
    padding: ${buttonPadding};
    background-color: ${colors.orangeBtn};
    display: inline-block;
    border-radius: ${borderRadius};
    ${aTagStyle}
`

export const DeleteUserButtonStyle = styled.button`
    color: ${colors.light};
    background-color: ${colors.red};
    padding: ${buttonPadding};
    border: none;
    border-radius: ${borderRadius};
`


export const Modal = styled.section`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0, 0.5);
`;
export const ModalWindow = styled.section`
    background-color: ${colors.light};
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    min-width: 400px;
`
export const ModalTxt = styled.p`
    border-bottom: 1px solid ${colors.dark};
    margin: 0 -10px;
    padding: 10px 20px;
`;

export const FormStyle = styled.form`
    font-size: ${fontSize.txt};
    fieldset{
        margin: 10px 0;
        border: none;
        display: flex;
        gap: 20px;
        align-items: center;
        margin-bottom: 0px;
        padding: 10px;
    }
    input{
        border-radius: ${borderRadius};
        width: 100%;
        padding: 5px;
        border: 1px solid ${colors.lightgrey}
    }
`;

export const ErrorMessage = styled.p`
    display: block;
    color: ${colors.red};
    margin-top: 0;
    padding: 0 10px;
`

export const FormActionButtons = styled.section`
    display: flex;
    justify-content: flex-end;
    gap: 20px;
    *{
        padding: ${buttonPadding};
        border-radius: ${borderRadius};
    }
    a{
        border: 1px solid ${colors.red};
        color: ${colors.red};
        text-decoration: none;
    }
    button{
        cursor: pointer;
        border: none;
        color: ${colors.light};
    }
`;

export const FormSubmitButton = styled.button`
    background-color: ${colors.greenButton};
`

export const ModalActionButtons = styled(FormActionButtons)`
    margin-top: 10px;
`;

export const ModalDeleteButton = styled.button`
    background-color: ${colors.red};
`
export const ModalCancelButton = styled.button`
    background-color: ${colors.grey};
`

export const TabelContainer = styled.section`
    overflow-x: auto;
`

export const SortSelect = styled.select`
    margin-top: 10px;
    padding: 3px 8px;
    border-radius: ${borderRadius}
`