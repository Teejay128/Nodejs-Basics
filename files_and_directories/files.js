const fs = require('fs');

// FILES


// Reading files
const readFile = (file) => {
    fs.readFile(file, (err, data) => {
        if(err){
            console.log(err)
        } else {
            data = data.toString()
            console.log(data)
        }
    })
}

// readFile("./txts/file.txt")

// Writing files
const writeFile = (file, msg) => {
    fs.writeFile(file, msg, (err) => {
        if(err){
            console.log(err)
        } else{
            console.log(`File: ${file} was written`)
        }
    })
}

// writeFile("./txts/file.txt", "The heart plays in ways the mind can't figure out")

// Deleting files
const deleteFile = (file) => {
    if(fs.existsSync(file)){
        fs.unlink(file, (err) => {
            if(err){
                console.log(err)
            } else{
                console.log(`File: ${file} was deleted`)
            }
        })
    } else {
        console.log(`File: ${file}, does not exist`)
    }
}

// deleteFile("./txts/newFile.txt")


// DIRECTORIES


// Creating directory
const createDirectory = (directory) => {
    if(!fs.existsSync(directory)){
        fs.mkdir(directory, (err) => {
            if(err){
                console.log(err)
            } else {
                console.log(`Directory: ${directory}, was Created`)
            }
        })
    } else {
        console.log(`Directory: ${directory}, already exists`)
    }
}

// createDirectory("./bs")

// Removing directory
const removeDirectory = (directory) => {
    if(fs.existsSync(directory)){
        fs.rmdir(directory, (err) => {
            if(err){
                console.log(err)
            } else {
                console.log(`Directory: ${directory}, was removed`)
            }
        })
    } else {
        console.log(`Directory: ${directory}, does not exist`)
    }
}

// removeDirectory("./texts")
