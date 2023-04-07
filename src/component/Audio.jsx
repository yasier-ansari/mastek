import { useState } from 'react';
import { FaRegFileAudio } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';

const AudioUpload = () => {
    const [audioFile, setAudioFile] = useState(null);

    const handleAudioFileChange = (event) => {
        const file = event.target.files[0];
        const audio = new Audio(URL.createObjectURL(file));
        setAudioFile({ file, audio });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('audioFile', audioFile.file, uuidv4() + '.wav');
        // send formData to server using fetch or axios
    };


    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <label htmlFor="audioFileInput" className="block font-medium text-gray-700">
                Choose an audio file to upload
            </label>
            <div className="flex items-center justify-center border-dotted border border-black/50 rounded-lg h-40 w-[80%] mx-auto ">
                <label htmlFor="audioFileInput" className="relative cursor-pointer flex items-center space-x-2">
                    <span>
                        <FaRegFileAudio className="text-gray-400" />
                    </span>
                    <span className="text-gray-500 hover:text-gray-700">
                        {audioFile ? audioFile.name : 'Select an audio file'}
                    </span>
                    <input
                        id="audioFileInput"
                        type="file"
                        accept="audio/*"
                        onChange={handleAudioFileChange}
                        className="sr-only"
                    />
                </label>
            </div>
            <button type="submit" className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Upload
            </button>
        </form>
    );
};

export default AudioUpload;

// import { useState } from "react";
// import { v4 as uuidv4 } from "uuid";

// function AudioInput() {
//     const [audioFile, setAudioFile] = useState(null);

//     const handleAudioChange = (e) => {
//         const file = e.target.files[0];
//         const audio = new Audio(URL.createObjectURL(file));
//         setAudioFile({
//             id: uuidv4(),
//             name: file.name,
//             audio,
//             duration: audio.duration,
//         });
//     };

//     return (
//         <div>
//             <label htmlFor="audio-input" className="block font-medium text-gray-700">
//                 Audio Input
//             </label>
//             <input
//                 id="audio-input"
//                 type="file"
//                 accept="audio/*"
//                 onChange={handleAudioChange}
//             />
//             {audioFile && (
//                 <div>
//                     <p>{audioFile.name}</p>
//                     <p>Duration: {audioFile.duration.toFixed(2)} seconds</p>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default AudioInput;
