class FileConverter {
    readFileBase64(file) {
        const avatar = file;

        return new Promise((resolve, reject) => {
            const reader = new FileReader();

            reader.onload = (event) => {
                resolve(event.target.result);
            };

            reader.onerror = (err) => {
                reject(err);
            };

            reader.readAsDataURL(avatar);
        });
    }
}

export default new FileConverter()