import EventEmitter from '../utils/EventEmitter'
import {SAVED_SUCCESSFULLY_MESSAGE, SERVER_ERROR_MESSAGE} from '../utils/Messages';

const NotifyService = {
    notifySuccess: () => {
        EventEmitter.dispatch('notification', {message: SAVED_SUCCESSFULLY_MESSAGE, type:'success'})
    },
    notifyError: () => {
        EventEmitter.dispatch('notification', {message: SERVER_ERROR_MESSAGE, type:'error'})
    }
}

export default NotifyService