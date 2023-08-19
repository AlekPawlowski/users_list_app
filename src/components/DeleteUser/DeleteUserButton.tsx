import { IUsers } from "@/interface/IUsers";
import { IModalState, modalShownStatusChange } from "@/redux/modalSlice";
import * as Styled from "@/styles/SMain";
import { useDispatch } from "react-redux";

export const DeleteUserButton = ({user}: {user: IUsers} ) => {
    const dispatch = useDispatch();
    const passUserProps = () => {
        // pass props to redux state
        console.log(`delete user ${user.id}`);
        const modalInformation: IModalState = {
            isModalActive: true,
            user: user
        }
        dispatch(modalShownStatusChange(modalInformation));
    }
    return <Styled.DeleteUserButtonStyle 
        type="button" 
        onClick={passUserProps}
        >
            delete
        </Styled.DeleteUserButtonStyle>
}