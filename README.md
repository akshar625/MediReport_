# Medical Document Extraction

This project aims to streamline the process of extracting information from scanned medical documents, specifically patient details and prescriptions, using Python 3.11. The workflow involves converting scanned PDFs to JPEG images, enhancing image quality through adaptive thresholding in OpenCV2, and utilizing PyTesseract for text extraction. Regular expressions are then applied to the extracted text to gather relevant data, which is stored in a dictionary format.


# Project Structure

* **pdf2image :** Contains a class for converting scanned PDFs to JPEG format.

* **pytesseract :** Includes a class for enhancing image quality using adaptive thresholding.

* **parser_patient_details.py :** Defines a class with regular expressions specific to extracting patient details.

* **parser_prescription :** Implements a class with regular expressions tailored for prescription extraction.

* **main.py :** Utilizes FastAPI to develop the backend of the project, handling API calls for document type identification and information extraction.

* **static:** Contains HTML, CSS (Tailwind CSS), and JavaScript files for the frontend.


# Workflow

1. **PDF Conversion:** Scanned PDFs are converted to JPEG format using the `PDFToImageConverter` class.

2. **Image Enhancement:** The `ImageProcessor` class enhances image quality through adaptive thresholding in OpenCV2.

3. **Text Extraction:** PyTesseract is employed to extract text from the processed images.

4. **Data Parsing:** Two separate classes, `PatientDetailsParser` and `PrescriptionParser`, use distinct regular expressions to extract relevant information from the extracted text.

5. **FastAPI Backend:** The main backend, `main.py`, utilizes FastAPI to handle API calls for document type identification and information extraction. Users specifies the document type (patient details or prescription) when sending a PDF file.

6. **Frontend Integration:** The extracted information is sent to the frontend in JSON format for seamless integration into the company's database.


# Real-Life Use Case

This project finds practical application in an insurance company, where employees often need to manually read and input information from scanned PDFs into the company database. By utilizing this project, the manual effort is significantly reduced. Employees can simply press a button in the frontend, triggering the automatic extraction of relevant information from the scanned documents. This not only saves time but also minimizes the chance of errors that may occur during manual data entry. The project enhances efficiency by eliminating the need to repeatedly type details from scanned copies, making the process more streamlined and user-friendly.

## Installation and Setup

### Prerequisites

- Python 3.11
- Pip (Python package installer)
- Tesseract OCR (Ensure it's installed and accessible)
- Node.js and npm (for building Tailwind CSS)

### Clone the Repository

bash
```git clone https://github.com/yourusername/medical-document-extraction.git```

```cd medical-document-extractionm ```

### Backend Setup

#### Install Dependencies
```pip install -r requirements.txt```

#### Set Up Tesseract

Ensure Tesseract OCR is installed and accessible. Set the pytesseract.pytesseract.tesseract_cmd to the path where Tesseract is installed in your environment. For example:

```import pytesseract```  

```pytesseract.pytesseract.tesseract_cmd = '/usr/local/bin/tesseract' ```

 or

```pytesseract.pytesseract.tesseract_cmd = 'C:/Program Files/Tesseract-OCR/tesseract.exe' ```

#### Run the FastAPI Server

```uvicorn main:app --reload```

#### Create Tailwind Configuration File

```npx tailwindcss init```

#### Configure Tailwind
Edit tailwind.config.js to remove unused styles in production:

```module.exports = {```
```  purge: ['./static/**/*.html', './static/**/*.js'],```
```  darkMode: false, // or 'media' or 'class'```
```  theme: {```
```    extend: {},```
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
``
#### Include Tailwind in Your CSS

Create a static/styles/tailwind.css file and add the following lines:

``@tailwind base;
@tailwind components;
@tailwind utilities;
``

#### Build Your CSS

Add a script to your package.json to build your CSS:

``{
  "scripts": {
    "build:css": "tailwindcss build static/styles/tailwind.css -o static/styles/main.css"
  }
}
``

#### Then run:

``npm run build:css``

#### Running the Application
* Ensure the FastAPI server is running.
* Open static/index.html in your web browser to use the frontend interface.
#### API Usage
* Endpoint: /extract_from_doc
* Method: POST
*Form Parameters:
* *type: The type of document (prescription or patient_details).
* *file: The PDF file to be processed.
