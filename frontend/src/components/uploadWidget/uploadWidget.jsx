import React, { useEffect, useRef } from 'react';

const CloudinaryUploadWidget = ({ uwConfig, setPublicId, setState }) => {
  const uploadWidgetRef = useRef(null);
  const uploadButtonRef = useRef(null);

  useEffect(() => {
    if (window.cloudinary && uploadButtonRef.current) {
      uploadWidgetRef.current = window.cloudinary.createUploadWidget(
        uwConfig,
        (error, result) => {
          if (!error && result && result.event === 'success') {
            console.log('Upload successful:', result.info);
            setState((prev)=>[...prev,result.info.secure_url])
          }
        }
      );

      const handleUploadClick = () => {
        if (uploadWidgetRef.current) {
          uploadWidgetRef.current.open();
        }
      };

      const button = uploadButtonRef.current;
      button.addEventListener('click', handleUploadClick);

      return () => {
        button.removeEventListener('click', handleUploadClick);
      };
    }
  }, [uwConfig, setPublicId]);

  return (
    <button
      ref={uploadButtonRef}
      id="upload_widget"
      className="cloudinary-button"
    >
      Upload
    </button>
  );
};

export default CloudinaryUploadWidget;
