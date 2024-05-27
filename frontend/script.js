document.getElementById('uploadForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('type', document.getElementById('type').value);
    formData.append('file', document.getElementById('file').files[0]);

    const response = await fetch('http://127.0.0.1:8000/extract_from_doc', {
        method: 'POST',
        body: formData
    });

    const result = await response.json();
    document.getElementById('result').innerText = JSON.stringify(result, null, 2);
});
