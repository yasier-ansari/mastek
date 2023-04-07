// import { useState } from 'react';

// function TextInput() {
//     const [textFile, setTextFile] = useState(null);

//     function handleFileInputChange(e) {
//         const file = e.target.files[0];
//         if (!file) return;
//         setTextFile(file);
//     }

//     function handleSubmit(e) {
//         e.preventDefault();
//         const formData = new FormData();
//         formData.append('textFile', textFile);
//         fetch('/api/upload', {
//             method: 'POST',
//             body: formData,
//         })
//             .then((res) => res.json())
//             .then((data) => console.log(data))
//             .catch((err) => console.error(err));
//     }

//     return (
//         <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//             <label className="flex flex-col gap-1">
//                 <span className="text-gray-700">Choose a text file:</span>
//                 <input type="file" accept=".txt" onChange={handleFileInputChange} />
//             </label>
//             <button
//                 type="submit"
//                 className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
//             >
//                 Upload
//             </button>
//         </form>
//     );
// }

// export default TextInput;


import { useState } from 'react';
import { AiOutlineFileText } from 'react-icons/ai';
import { v4 as uuidv4 } from 'uuid';

const TextUpload = () => {
    const [textFile, setTextFile] = useState(null);

    const handleTextFileChange = (event) => {
        const file = event.target.files[0];
        setTextFile(file);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!textFile) return;
        const formData = new FormData();
        formData.append('textFile', textFile, uuidv4() + '.txt');
        try {
            const response = await fetch('/api/uploadText', {
                method: 'POST',
                body: formData,
            });
            if (response.ok) {
                // do something with the response
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <label htmlFor="textFileInput" className="block font-medium text-gray-700">
                Choose a text file to upload
            </label>
            <div className="flex items-center justify-center border-dotted border border-black/50 rounded-lg h-40 w-[80%] mx-auto ">
                <label htmlFor="textFileInput" className="relative cursor-pointer flex items-center space-x-2">
                    <span>
                        <AiOutlineFileText className="text-gray-400" />
                    </span>
                    <span className="text-gray-500 hover:text-gray-700">{textFile ? textFile.name : 'Select a text file'}</span>
                    <input id="textFileInput" type="file" accept=".txt" onChange={handleTextFileChange} className="sr-only" />
                </label>
            </div>
            <button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                disabled={!textFile}
            >
                Upload
            </button>
        </form>
    );
};

export default TextUpload;

