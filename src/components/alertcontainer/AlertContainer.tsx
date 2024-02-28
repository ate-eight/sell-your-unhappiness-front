import Alert, { IAlert } from '../common/alert/Alert';
import * as S from './style';
const AlertContainer = () => {
    const alertMsgs: IAlert[] = [
        {
            text: '새로운 댓글이 달렸어요',
            date: '2024.01.01 12:00',
            icon: {
                iconName: 'i-message',
                iconText: '댓글',
            },
        },
        {
            text: '새로운 답글이 달렸어요',
            date: '2024.01.11 12:00',
            icon: {
                iconName: 'i-reply',
                iconText: '답글',
            },
        },
    ];
    return (
        <S.AlertContainer id='alert'>
            {alertMsgs.map((alert) => (
                <Alert data={alert} key={alert.date} />
            ))}
        </S.AlertContainer>
    );
};
export default AlertContainer;
