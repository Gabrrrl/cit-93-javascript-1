'use strict'
// add a dom element between the title and body inputs (span)
// set the text value : last edited 4 hours ago
// update value on title/body/storage change

const titleElement = document.querySelector('#note-title')
const edited = document.querySelector('#edited')
const bodyElement = document.querySelector('#note-body')
const removeElement = document.querySelector('#remove-note')
const noteId = location.hash.substring(1)
let notes = getSavedNotes()
let note = notes.find((note) => {
    return note.id === noteId
})

if (!note) {
    location.assign('index.html')
}

titleElement.value = note.title
bodyElement.value = note.body
edited.textContent = generateLastEdited(note.updatedAt)

titleElement.addEventListener('input', (e) => {
    note.title = e.target.value
    note.updatedAt = moment().valueOf()
    edited.textContent = generateLastEdited(note.updatedAt)
    localStorage.setItem('notes', JSON.stringify(notes))
})

bodyElement.addEventListener('input', (e) => {
    note.body = e.target.value
    note.updatedAt = moment().valueOf()
    edited.textContent = generateLastEdited(note.updatedAt)
    localStorage.setItem('notes', JSON.stringify(notes))
})

removeElement.addEventListener('click', (e) => {
    removeNote(note.id)
    localStorage.setItem('notes', JSON.stringify(notes))
    location.assign(`index.html`)
})

window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        let note = notes.find((note) => note.id === noteId)
        
        if (!note) {
            location.assign('index.html')
        }
        
        titleElement.value = note.title
        bodyElement.value = note.body
        edited.textContent = generateLastEdited(note.updatedAt)
    }
})