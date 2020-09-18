import React, { Component } from 'react'
import {CSVReader} from 'react-papaparse'
import '../css/LoadQuizData.css'

const buttonRef = React.createRef()
let dataTemp = [];

class LoadQuizData extends Component {

    handleOpenDialog = (event) => {
        // Note that the ref is set async, so it might be null at some point
        if (buttonRef.current) {
            buttonRef.current.open(event)
        }
    }

    handleOnFileLoad = (data) => {
        console.log('---------------------------')
        console.log(data)
        console.log('---------------------------')
        dataTemp = data;
    }

    handleOnError = (err, file, inputElem, reason) => {
        console.log(err)
    }

    handleOnRemoveFile = (data) => {
        console.log('---------------------------')
        console.log(data)
        console.log('---------------------------')
    }

    handleRemoveFile = (event) => {
        // Note that the ref is set async, so it might be null at some point
        if (buttonRef.current) {
            buttonRef.current.removeFile(event)
        }
    }

    handleSubmit =() => {
        if(dataTemp.length !== 0) {
            console.log('---------------------------');
            console.log('quiz data submitted');
            console.log('---------------------------');
            const rows = [];
            dataTemp.forEach((row) => {
                rows.push(row.data);
            })
            this.props.onDataSubmit(rows);
        }
    }

    render() {
        return (
            <>
                <h5>Upload your Quiz Data (csv)</h5>
                <CSVReader ref={buttonRef} onFileLoad={this.handleOnFileLoad} onError={this.handleOnError} noClick noDrag config={{header: true}} onRemoveFile={this.handleOnRemoveFile} >
                    {({ file }) => (
                        <aside className='aside'>
                            <button type='button' onClick={this.handleOpenDialog}>
                                Browse file
                            </button>
                            <div className='file-display'>
                                {file && file.name}
                            </div>
                            <button onClick={this.handleRemoveFile}>
                                Remove
                            </button>
                            <button onClick={this.handleSubmit}>
                                Submit
                            </button>
                        </aside>
                    )}
                </CSVReader>
            </>
        )
    }
}

export default LoadQuizData;