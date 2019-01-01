import NOTE_SERVER from 'Const/noteServer.js';
import urlRequest from './urlRequest.js';

function addNote(data, url = NOTE_SERVER) {
    urlRequest({
        url,
        data,
        method: 'post',
        use: xhttp => {
            xhttp.setRequestHeader('Content-type', 'application/json');
            xhttp.setRequestHeader('Accept', 'application/json');
        }
    });
}

function deleteNote(url = NOTE_SERVER) {
    urlRequest({
        url,
        method: 'delete'
    });
}

function deleteNoteById(id, url = `${NOTE_SERVER}/${id}`) {
    urlRequest({
        url,
        method: 'delete'
    });
}

function readAllNotes(onData, url = NOTE_SERVER) {
    fetch(url)
        .then(response => response.json())
        .then(onData);
}

function updateNoteById(id, data, url = `${NOTE_SERVER}/${id}`) {
    console.log('data', data);
    urlRequest({
        url,
        data,
        method: 'put',
        use: xhttp => {
            xhttp.setRequestHeader('Content-type', 'application/json');
            xhttp.setRequestHeader('Accept', 'application/json');
        }
    });
}

export {
    addNote,
    deleteNote,
    readAllNotes,
    updateNoteById,
    deleteNoteById
};
