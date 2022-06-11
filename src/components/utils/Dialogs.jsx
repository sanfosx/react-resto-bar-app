import styled from "styled-components";

const Dialogs = ({
    children, 
    state, 
    changeStateDialog, 
    paddingDialog,
    positionDialog,
    titleDialog, 
    showHeaderDialog,
    showOverlayDialog,
    showCloseBtn,
    userId,
    setUserId,
}) => {

    return (
        <>
        {state &&
            <Overlay showOverlayDialog={showOverlayDialog} positionDialog={positionDialog}>
                <DialogContainer paddingDialog={paddingDialog} >
                    {showHeaderDialog &&
                        <DialogHeader>
                        <h3>{titleDialog}</h3>
                        </DialogHeader>
                    }
                    {showCloseBtn &&
                      <BtnCloseDialog onClick={() => {changeStateDialog(false)}}>
                        <i className='material-icons text-danger'>close</i>
                      </BtnCloseDialog>
                    }
                        {children}
                </DialogContainer>
            </Overlay>
        }
    </>
    )
};

export default Dialogs

const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index:99;
    background: ${props => props.showOverlayDialog ? 'rgba(0,0,0,.5)' : 'rgba(0,0,0,0)'} ;
    display: flex;
	align-items: ${props => props.positionDialog ? props.positionDialog : 'center'};
	justify-content: center;
    padding: 20px;
`;

const DialogContainer = styled.div`
    width: 70vh;
    min-height: 100px;
    position: relative;
    top: 0;
    left: 0;
    box-shadow: rgba(252, 75, 8, 0.2) 0px 7px 29px 8px;
    padding: ${props => props.paddingDialog ? props.paddingDialog : '20px'};
`;

const DialogHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top:5px;
    margin-bottom: 20px;
    padding-bottom: 20px;
`;

const BtnCloseDialog = styled.div`
    position: absolute;
    background:none;
    top: 15px;
    right: 10px;
    width: 30px;
    height: 30px;
    border: none;
    cursor: pointer;
    transition: 3s ease all;
    z-index:99;
    color: red;;
    &:hover{
        background: dimgray;
    }
    svg {
        width: 100%;
        height: 100%;
    }
`;