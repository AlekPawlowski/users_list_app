import { RootState } from "@/redux"
import { IModalState, modalShownStatusChange } from "@/redux/modalSlice";
import { updateUsers } from "@/redux/userSlice";
import { MainHeader, Modal, ModalActionButtons, ModalCancelButton, ModalDeleteButton, ModalTxt, ModalWindow, SectionHead, SmallMain } from "@/styles/SMain"
import { supabase } from "@/supabase/config";
import { useDispatch, useSelector } from "react-redux"

export const DeleteModal = () => {
    const store = useSelector((store: RootState) => store.modal);
    const dispatch = useDispatch();
    if (!store.isModalActive) return null;

    const clearModalState = () => {
        const modalInformation: IModalState = {
            isModalActive: false,
            user: null
        }
        dispatch(modalShownStatusChange(modalInformation));
    }

    const deleteUser = async () => {
        // delete user
        const { error } = await supabase
            .from('users')
            .delete()
            .eq('id', store.user?.id);
        // import database and update state
        let { data: users, error: importError } = await supabase
            .from('users')
            .select('*');
        if(users){
            dispatch(updateUsers(users))
        }
        clearModalState()
    }
    return <Modal>
        <ModalWindow>
            <SmallMain>
                <SectionHead>
                    <MainHeader>Delete</MainHeader>
                </SectionHead>
                <ModalTxt>
                    Do you want o delete user: {store.user?.name}
                </ModalTxt>
                <ModalActionButtons>
                    <ModalCancelButton type="button" onClick={clearModalState}>Cancel</ModalCancelButton>
                    <ModalDeleteButton type="button" onClick={deleteUser}>Delete</ModalDeleteButton>
                </ModalActionButtons>
            </SmallMain>
        </ModalWindow>
    </Modal>
}