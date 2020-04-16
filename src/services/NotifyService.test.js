import React from 'react';
import NotifyService from './NotifyService'
import EventEmitter from '../utils/EventEmitter';
import { SAVED_SUCCESSFULLY_MESSAGE, SERVER_ERROR_MESSAGE } from '../utils/Messages'

jest.mock('../utils/EventEmitter')

test('should have called EventEmitter.dispatch', () => {
    const successNotificationData = {message: SAVED_SUCCESSFULLY_MESSAGE, type:'success'};
    NotifyService.notifySuccess()
    expect(EventEmitter.dispatch).toHaveBeenCalledWith("notification", successNotificationData)
});

test('should have called EventEmitter.dispatch', () => {
    const errorNotificationData = {message: SERVER_ERROR_MESSAGE, type:'error'}
    NotifyService.notifyError()
    expect(EventEmitter.dispatch).toHaveBeenCalledWith("notification", errorNotificationData)
});
