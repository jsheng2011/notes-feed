import NOTE_SERVER from '../const/noteServer.js';
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

function deleteNote(data, url = NOTE_SERVER) {
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

function updateNote(data, url = NOTE_SERVER) {

}

export {
    addNote,
    deleteNote,
    readAllNotes
};
