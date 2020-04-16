import React from 'react';
import { render } from '@testing-library/react';
import TextEditor from './Editor';
// import journalEntryApi from '../../api/journalEntryApi'

jest.mock('../../api/journalEntryApi')

test('should display text props content when created with it', () => {
  const {getByText} = render(<TextEditor content="Testing123"/>);
  const textEditorContent = getByText(/Testing123/i);
  expect(textEditorContent).toBeInTheDocument();
});

// test('should save content when save button is clicked', () => {
//   const {getByText} = render(<TextEditor content="Send this text, please"/>)
//   const saveButton = getByText(/Save/i)
//   fireEvent(saveButton, new MouseEvent('click',{
//     EventType: 'MouseEvent',
//     defaultInit: {bubbles: true, cancelable: true, button: 0, composed: true},
//   }))
//   expect(journalEntryApi.saveJournalEntry).toHaveBeenCalled()
// });
