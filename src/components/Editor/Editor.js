import React, {useState} from 'react';
import { Editor, EditorState, convertToRaw, ContentState } from 'draft-js';
import './Editor.css';
import journalEntryApi from '../../api/journalEntryApi'
import {SERVER_ERROR_MESSAGE} from '../../utils/Messages'
import NotifyService from '../../services/NotifyService'
import EventEmitter from '../../utils/EventEmitter';

function TextEditor({content}) {
    const _createEditorState = (content) => {
        return !content ? EditorState.createEmpty() : 
            EditorState.createWithContent(ContentState.createFromText(content))
    }

    const [editorState, setEditorState] = useState(_createEditorState(content));

    const editor = React.useRef(null);

    const _focusEditor = () => {
        editor.current.focus();
    }

    const _contentStateToString = (contentState) => {
        let contentStateString = "";
        contentState.blocks.forEach(block => {
            contentStateString += block.text;
        })
        return contentStateString;
    }

    const saveContent = async () => {
        console.log('save content')
        const contentState = editorState.getCurrentContent(); 
        const content = _contentStateToString(convertToRaw(contentState))
        try {
            const newJournalEntry = {content: content, date: new Date().toISOString()}
            await journalEntryApi.saveJournalEntry(newJournalEntry);
            NotifyService.notifySuccess();
            EventEmitter.dispatch('updateJournalEntries', true)
            setEditorState(EditorState.createEmpty())
        } catch(e) {
            console.error(e)
            NotifyService.notifyError();
            console.error(SERVER_ERROR_MESSAGE);
        }
    }

    return (
        <div className="editor">
            <div className="editor-container" data-testid="editor-container" onClick={_focusEditor}>
                <Editor ref={editor} editorState={editorState} onChange={setEditorState} />
            </div>
            <div className="button-wrapper">
                <button className="save-button" onClick={saveContent}>Save</button>
            </div>
        </div>
    );
}

export default TextEditor;